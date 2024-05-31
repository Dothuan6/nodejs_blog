const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const port = 3000;
const morgan = require("morgan");
const newsController = require("./app/controllers/NewsController");
const route = require("./routes");

const app = express();

//file tĩnh
app.use(express.static(path.join(__dirname, "public")));
//middleware xử lý dữ liệu từ  form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// http logger
app.use(morgan("dev"));
//template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

//route init
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
