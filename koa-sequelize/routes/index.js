const Router = require('koa-router')
const router = new Router()
const {
  CompanyController,
  JobController,
  ApplicationController,
  UserController
} = require("../controllers");

const isAuthenticated = require('../polices/isAuthenticated')

// Company
router
  .post("/companies", isAuthenticated, CompanyController.create)
  .get("/companies", isAuthenticated, CompanyController.find)
  .get("/companies/:id", isAuthenticated, CompanyController.findOne)
  .put("/companies/:id", isAuthenticated, CompanyController.updateCompany)
  .delete("/companies/:id", isAuthenticated, CompanyController.destroy);

// Job
router.post("/jobs", isAuthenticated, JobController.create)
  .get("/jobs", isAuthenticated, JobController.find)

// ApplicationController
router.post("/applications", isAuthenticated, ApplicationController.create);

// User
router.post("/signup", UserController.signup);
router.post("/login", UserController.login)

module.exports = router