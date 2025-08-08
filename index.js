const express = require("express");
const app = express();
const conn = require("./db/config");
const taskRoutes = require("./routes/tasksRoutes");

const PORT = process.env.PORT;

const hbs = require("express-handlebars");

app.engine("handlebars", hbs.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const Task = require("./models/Task");
app.use("/tasks", taskRoutes);

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
