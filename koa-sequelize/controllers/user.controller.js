const UtilService = require('../services/util.service')
const JwtService = require('../services/jwt.service')

module.exports = {
  async signup(ctx) {
    try {
       let { email, password } = ctx.request.body;

       if (!email) {
         ctx.throw(400, "please provide the email");
       }
       if (!password) {
         ctx.throw(400, "please provide the password");
       }

      const encryptedPassword = await UtilService.hashPassword(password)
      await ctx.db.user.create({
         email,
         password: encryptedPassword,
      });
      ctx.body = 'Signup successfully'
    } catch (error) {
      ctx.throw(500, error)
    }
  },
  async login(ctx) {
    try {
      let { email, password } = ctx.request.body
      
      if (!email) {
        ctx.throw(400, 'please provide the email')
      }
      if (!password) {
        ctx.throw(400, 'please provide the password')
      }

      const user = await ctx.db.user.findOne({
        where: {
          email
        }
      })

      if (!user) {
        ctx.throw(400, 'unable to process request')
      }

      const matched = UtilService.comparePassword(password, user.password)

      if (matched) {
        // create json webtoken for the user
        const token = JwtService.issue({
          payload: {
            user: user.id
          }
        }, '1 day')

        ctx.body = {token};
      } else {
        ctx.throw(500, 'invalid password')
      }
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}