module.exports = app => {
    const boats = require("../controllers/boat.controller.js");
    const auth = require("../controllers/auth.js");
  
    var router = require("express").Router();
    var upload = require('../multer/upload');
  
    // Create a new Boat
    router.post("/", auth.isAuthenticated, upload.single('file'), boats.create);
  
    // Retrieve all Boats
    router.get("/", auth.isAuthenticated, boats.findAll);

    // Retrieve a single Boat with id
    router.get("/:id", auth.isAuthenticated, boats.findOne);
  
    // Update a Boat with id
    router.put("/:id", auth.isAuthenticated, upload.single('file'), boats.update);
  
    // Delete a Boat with id
    router.delete("/:id", auth.isAuthenticated, boats.delete);
  
    app.use('/api/boat', router);
  };