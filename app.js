const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const expenseRoutes = require("./routes/expense");
const rootDir = require("./util/path");
const app = express();
var cors = require("cors");
app.use(bodyParser.json({ extended: false }));

app.use(cors());
app.use(expenseRoutes);
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

sequelize
  .sync()
  .then((result) => {
    console.log("result");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
