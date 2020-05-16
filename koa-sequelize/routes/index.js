const Router = require('koa-router')
const router = new Router()
const { CompanyController } = require("../controllers");

router
  .post("/companies", CompanyController.create)
  .get("/companies", CompanyController.find)
  .get("/companies/:id", CompanyController.findOne)
  .put("/companies/:id", CompanyController.updateCompany)
  .delete("/companies/:id", CompanyController.destroy);

module.exports = router