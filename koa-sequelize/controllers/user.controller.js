const UtilService = require('../services/util.service')
const JwtService = require('../services/jwt.service')

module.exports = {
  /**
   *
   * @api {post} /signup
   * @apiVersion 1.0.0
   * @apiName SignupUser
   * @apiGroup Users
   * @apiParam {String} [email] user must need to provide the email
   * @apiParam {String} [password] user must need to provide the password
   * @apiParamExample {String} Request Params :
   * {
   *   "email": "test@email.com",
   *   "password": "password123"
   * }
   * @apiSuccess {String} Msg Signup successfull!
   * @apiSuccessExample {json} Signup-Success-Response :
   * HTTP/1.1 200Ok
   * {
   *    "msg": "Signup Successful"
   * }
   * @apiExample {curl} Example usage:
   * curl -i http://localhost:4000/signup
   * @apiDescription User can create new account
   */
  async signup(ctx) {
    try {
      let { email, password } = ctx.request.body;

      if (!email) {
        ctx.throw(400, "please provide the email");
      }
      if (!password) {
        ctx.throw(400, "please provide the password");
      }

      const encryptedPassword = await UtilService.hashPassword(password);
      await ctx.db.user.create({
        email,
        password: encryptedPassword,
      });
      ctx.body = "Signup successfully";
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  /**
   *
   * @api {post} /login
   * @apiVersion 1.0.0
   * @apiName LoginUser
   * @apiGroup Users
   * @apiParam {String} [email] user must need to provide the email
   * @apiParam {String} [password] user must need to provide the password
   * @apiParamExample {String} Request Params :
   * {
   *   "email": "test@email.com",
   *   "password": "password123"
   * }
   * @apiSuccess {Object} Token A Json web token to access protected routes
   * @apiSuccessExample {json} Login Response :
   * HTTP/1.1 200Ok
   * {
   *    "token": "ASDASDASDASDADASDADASDASDEDERFSAD"
   * }
   * @apiExample {curl} Example usage:
   * curl -i http://localhost:4000/login
   * @apiDescription User can login to the system
   */
  async login(ctx) {
    try {
      let { email, password } = ctx.request.body;

      if (!email) {
        ctx.throw(400, "please provide the email");
      }
      if (!password) {
        ctx.throw(400, "please provide the password");
      }

      const user = await ctx.db.user.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        ctx.throw(400, "unable to process request");
      }

      const matched = UtilService.comparePassword(password, user.password);

      if (matched) {
        // create json webtoken for the user
        const token = JwtService.issue(
          {
            payload: {
              user: user.id,
            },
          },
          "1 day"
        );

        ctx.body = { token };
      } else {
        ctx.throw(500, "invalid password");
      }
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};