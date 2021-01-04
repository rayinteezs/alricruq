module.exports = app => {
    const managers = require("../controllers/manager.controller.js");
    const auth = require("../controllers/auth.js");
  
    var router = require("express").Router();
  
    // Create a new Manager
    router.post("/", auth.isAuthenticated, managers.create);
  
    // Retrieve all Managers
    router.get("/", auth.isAuthenticated, managers.findAll);

    // Retrieve a single Manager with id
    router.get("/:id", auth.isAuthenticated, managers.findOne);
  
    // Update a Manager with id
    router.put("/:id", auth.isAuthenticated, managers.update);
  
    // Delete a Manager with id
    router.delete("/:id", auth.isAuthenticated, managers.delete);
  
    app.use('/api/manager', router);
  };