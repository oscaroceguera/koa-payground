module.exports = {
  async create(ctx) {
    try {
      ctx.body = ctx.db.Company.create({
        name: ctx.request.body.name,
        city: ctx.request.body.city,
        address: ctx.request.body.address,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async find(ctx) {
    try {
      ctx.body = await ctx.db.Company.findAll({
        include: [
          {
            model: ctx.db.Job
          }
        ]
      })
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async findOne(ctx) {
    try {
      const company  = await ctx.db.Company.findOne({
        id: ctx.params.id
      })

      if (!company) {
        ctx.throw(404, 'company is invalid')
      }
      
      ctx.body = company
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async destroy(ctx) {
    try {
      const results = await ctx.db.Company.destroy({
        where: {
          id: ctx.params.id,
        },
      });

      results === 0 ? ctx.throw(500, 'invalid id provided') : ctx.body = `company is deleted wiith id ${ctx.params.id}`

    } catch (error) {
      ctx.throw(500, error);
    }
  },
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
  }
}