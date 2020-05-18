module.exports = {
  /**
   *@api {post} /companies
   *@apiGroup Companies
   * @apiName CreateCompany
   * @apiSuccess {Object} Company  A newly created Company Object
   * @apiExample {curl} Example usage:
   * curl -i http://localhost:4000/companies
   * @apiDescription LoggedIn user can register new Company
   * @apiHeader {String} Authorization  JWT Authorization header
   * @apiHeaderExample {json} Request Authorization Header
   * {
   *  "authorization" : "jkahdkjashdk324324342"
   * }
   * @apiParam {String} [name]
   * @apiParam {String} [city]
   * @apiParam {String} [address]
   * @apiParam {Number} [UserId]
   */
  async create(ctx) {
    try {
      ctx.body = ctx.db.Company.create({
        name: ctx.request.body.name,
        city: ctx.request.body.city,
        address: ctx.request.body.address,
        userId: ctx.state.user,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  /**
   *@api {get} /companies
   *@apiGroup Companies
   * @apiName GetCompanies
   * @apiSuccess {Object[]} Company List of Companies with Jobs
   * @apiExample {curl} Example usage:
   * curl -i http://localhost:4000/companies
   * @apiDescription LoggedIn user can view all the companies
   * @apiHeader {String} Authorization  JWT Authorization header
   * @apiHeaderExample {json} Request Authorization Header
   * {
   *  "authorization" : "jkahdkjashdk324324342"
   * }
   */
  async find(ctx) {
    try {
      ctx.body = await ctx.db.Company.findAll({
        userId: ctx.state.user,
        include: [
          {
            model: ctx.db.Job,
          },
        ],
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  /**
   *@api {get} /companies/:id
   *@apiGroup Companies
   * @apiName GetCompany
   * @apiSuccess {Object} Company A single Company by Id
   * @apiExample {curl} Example usage:
   * curl -i http://localhost:4000/companies/:id
   * @apiDescription LoggedIn user can get single company by id
   * @apiHeader {String} Authorization  JWT Authorization header
   * @apiHeaderExample {json} Request Authorization Header
   * {
   *  "authorization" : "jkahdkjashdk324324342"
   * }
   */
  async findOne(ctx) {
    try {
      const company = await ctx.db.Company.findOne({
        id: ctx.params.id,
      });

      if (!company) {
        ctx.throw(404, "company is invalid");
      }

      ctx.body = company;
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  /**
   *@api {delete} /companies/:id
   *@apiGroup Companies
   * @apiName deleteCompany
   * @apiSuccess {Object} Company is deleted successfully
   * @apiExample {curl} Example usage:
   * curl -i http://localhost:4000/companies/:id
   * @apiDescription LoggedIn user can delete the company by id
   * @apiHeader {String} Authorization  JWT Authorization header
   * @apiHeaderExample {json} Request Authorization Header
   * {
   *  "authorization" : "jkahdkjashdk324324342"
   * }
   */
  async destroy(ctx) {
    try {
      const results = await ctx.db.Company.destroy({
        where: {
          id: ctx.params.id,
        },
      });

      results === 0
        ? ctx.throw(500, "invalid id provided")
        : (ctx.body = `company is deleted wiith id ${ctx.params.id}`);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  /**
   *@api {put} /companies/:id
   *@apiGroup Companies
   * @apiName UpdateCompany
   * @apiSuccess {Object} Company is updated successfully
   * @apiExample {curl} Example usage:
   * curl -i http://localhost:4000/companies/:id
   * @apiDescription LoggedIn user can get single company by id
   * @apiHeader {String} Authorization  JWT Authorization header
   * @apiHeaderExample {json} Request Authorization Header
   * {
   *  "authorization" : "jkahdkjashdk324324342"
   * }
   */

  async updateCompany(ctx) {
    try {
      const results = await ctx.db.Company.update(
        {
          name: ctx.request.body.name,
          city: ctx.request.body.city,
          address: ctx.request.body.address,
        },
        {
          where: {
            id: ctx.params.id,
          },
        }
      );

      results === 0
        ? ctx.throw(500, "invalid id provided")
        : (ctx.body = `company is update wiith id ${ctx.params.id}`);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};