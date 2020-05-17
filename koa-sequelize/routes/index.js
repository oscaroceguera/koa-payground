const Router = require('koa-router')
const router = new Router()
const {
  CompanyController,
  JobController,
  ApplicationController,
} = require("../controllers");

// Company
router
  .post("/companies", CompanyController.create)
  .get("/companies", CompanyController.find)
  .get("/companies/:id", CompanyController.findOne)
  .put("/companies/:id", CompanyController.updateCompany)
  .delete("/companies/:id", CompanyController.destroy);

// Job
router.post("/jobs", JobController.create)
  .get("/jobs", JobController.find)

// ApplicationController
router.post("/applications", ApplicationController.create);

module.exports = router