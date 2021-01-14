const db = require("../models");
const Manager = db.manager;
const Op = db.Sequelize.Op;

// Create and Save a new Manager
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Manager
  const manager = {
    name: req.body.name,
    surname: req.body.surname,
    repairedboats: req.body.repairedboats,
    description: req.body.description,
    filename: req.file.filename
  };

  // Save Manager in the database
  Manager.create(manager)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Manager."
      });
    });
};

// Retrieve all Managers from the database.
exports.findAll = (req, res) => {
  Manager.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving managers."
      });
    });
};

// Find a single Manager with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Manager.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Manager with id=" + id
      });
    });
};

// Update a Manager by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Manager.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Manager was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Manager with id=${id}. Maybe Manager was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Manager with id=" + id
      });
    });
};

// Delete a Manager with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Manager.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Manager was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Manager with id=${id}. Maybe Manager was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Manager with id=" + id
      });
    });
};