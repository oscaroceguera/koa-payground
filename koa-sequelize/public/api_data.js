define({ "api": [
  {
    "type": "post",
    "url": "/applications",
    "title": "",
    "group": "Applications",
    "name": "CreateApplications",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Application",
            "description": "<p>A newly created Application object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/application",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can apply for the Job</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\" : \"jkahdkjashdk324324342\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "JobId",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/application.controller.js",
    "groupTitle": "Applications"
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "",
    "group": "Companies",
    "name": "CreateCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Company",
            "description": "<p>A newly created Company Object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/companies",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can register new Company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\" : \"jkahdkjashdk324324342\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "UserId",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "",
    "group": "Companies",
    "name": "GetCompanies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Company",
            "description": "<p>List of Companies with Jobs</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/companies",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can view all the companies</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\" : \"jkahdkjashdk324324342\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "/companies/:id",
    "title": "",
    "group": "Companies",
    "name": "GetCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Company",
            "description": "<p>A single Company by Id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/companies/:id",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can get single company by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\" : \"jkahdkjashdk324324342\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "put",
    "url": "/companies/:id",
    "title": "",
    "group": "Companies",
    "name": "UpdateCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Company",
            "description": "<p>is updated successfully</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/companies/:id",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can get single company by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\" : \"jkahdkjashdk324324342\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "delete",
    "url": "/companies/:id",
    "title": "",
    "group": "Companies",
    "name": "deleteCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Company",
            "description": "<p>is deleted successfully</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/companies/:id",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can delete the company by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\" : \"jkahdkjashdk324324342\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "/jobs",
    "title": "",
    "group": "Jobs",
    "name": "GetJobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Job",
            "description": "<p>List of Jobs with Candidates</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can view all the jobs</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\" : \"jkahdkjashdk324324342\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs",
    "title": "",
    "group": "Jobs",
    "name": "createJob",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>User must need to provide the job title</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "CompanyId",
            "description": "<p>User must need to provide the CompanyId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params :",
          "content": "{\n \"title\"  : \"Node.js developer\",\n \"CompanyId\" : 1\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Job",
            "description": "<p>A newly created job object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login Response:",
          "content": "{\n \"id\" : 1,\n \"CompanyId\" :1\n \"title\" : \"Nodejs developer\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can create new job</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\" : \"jkahdkjashdk324324342\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "version": "1.0.0",
    "name": "LoginUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>user must need to provide the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user must need to provide the password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params :",
          "content": "{\n  \"email\": \"test@email.com\",\n  \"password\": \"password123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Token",
            "description": "<p>A Json web token to access protected routes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login Response :",
          "content": "HTTP/1.1 200Ok\n{\n   \"token\": \"ASDASDASDASDADASDADASDASDEDERFSAD\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/login",
        "type": "curl"
      }
    ],
    "description": "<p>User can login to the system</p>",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "",
    "version": "1.0.0",
    "name": "SignupUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>user must need to provide the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user must need to provide the password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params :",
          "content": "{\n  \"email\": \"test@email.com\",\n  \"password\": \"password123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>Signup successfull!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Signup-Success-Response :",
          "content": "HTTP/1.1 200Ok\n{\n   \"msg\": \"Signup Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/signup",
        "type": "curl"
      }
    ],
    "description": "<p>User can create new account</p>",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
