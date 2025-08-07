const { DataTypes } = require("sequelize");
const db=require("../db/config");

const Task = db.define("Task", {
  title: {
    type: DataTypes.STRING,
    require: true,
  },
  description: {
    type: DataTypes.TEXT,
    require: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    require: true,
  },
});
module.exports = Task;

