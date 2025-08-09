const express = require("express");
const router = express.Router();
const TasksController = require("../controllers/TaskController");

router.get("/add", TasksController.createTask);
router.post("/add", TasksController.createTaskSave);
router.post("/remove", TasksController.removeTask);
router.get("/edit/:id", TasksController.updateTask);
router.post("/edit", TasksController.updateTaskPost);
router.post("/updatestatus", TasksController.toggleTaskStatus);
router.get("/", TasksController.showTasks);
module.exports = router;
