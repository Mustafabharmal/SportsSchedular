"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    static associate(models) {
      Sport.hasMany(models.Session, { foreignKey: "sportId" });
    }
    static addSport(sportname) {
      try {
        return this.create({
          sportname,
        });
      } catch (error) {
        console.error("Error adding a task", error);
      }
    }

    static async getSports() {
      try {
        return this.findAll({
          order: [["id", "ASC"]],
        });
      } catch (error) {
        console.error("get all sports", error);
      }
    }

    static async getSportWithID(id) {
      try {
        return this.findByPk(id);
      } catch (error) {
        console.error("Error while getsport with id", error);
      }
    }
  }
  Sport.init(
    {
      sportname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Sport",
    }
  );
  return Sport;
};
