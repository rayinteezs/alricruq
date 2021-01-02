module.exports = (sequelize, Sequelize) => {
    const Boat = sequelize.define("boat", {
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
    });
  
    Boat.associate = function(models) {
      Boat.belongsTo(models.user, {
        onDelete: "CASCADE",
        foreignKey: "userId",
        as: "users",
      })
    }
  
    return Boat;
  };