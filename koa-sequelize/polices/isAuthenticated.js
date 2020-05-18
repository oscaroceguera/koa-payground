const JwtService = require('../services/jwt.service')

module.exports = async (ctx, next) => {
  let token = ''
  if (ctx.req.headers && ctx.req.headers.authorization) {
    token = ctx.req.headers.authorization
  } else {
    ctx.throw(401, 'Authorization header is missing')
  }

  const decodedToken = JwtService.verify(token)

  const user = await ctx.db.user.findOne({
    where: {
      id: decodedToken.payload.user
    }
  })

  if (user) {
    // putt de user id in the context
    ctx.state.user = user.id
    await next()
  } else {
    ctx.throw(401, 'Unauthorized')
  }
}