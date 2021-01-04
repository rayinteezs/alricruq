module.exports = (sequelize, Sequelize) => {
    const Manager = sequelize.define("manager", {
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      repairedboats: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
    });
  
    return Manager;
  };