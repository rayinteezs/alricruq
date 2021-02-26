module.exports = app => {
    const managers = require("../controllers/manager.controller.js");
    const auth = require("../controllers/auth.js");
  
    var router = require("express").Router();
    var upload = require('../multer/upload');
  
    // Create a new Manager
    router.post("/", upload.single('file'), managers.create);
  
    // Retrieve all Managers
    router.get("/", managers.findAll);

    // Retrieve a single Manager with id
    router.get("/:id", managers.findOne);
  
    // Update a Manager with id
    router.put("/:id", upload.single('file'), managers.update);
  
    // Delete a Manager with id
    router.delete("/:id", managers.delete);
  
    app.use('/api/manager', router);
  };