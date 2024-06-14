const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const port = 3000;
const morgan = require("morgan");
const route = require("./routes");
const methodOverride = require("method-override");
const SortMiddleware = require("./app/middlewares/SortMiddleware");
const db = require("./config/db");
//connect db

const app = express();

//file tĩnh
app.use(express.static(path.join(__dirname, "public")));
//middleware xử lý dữ liệu từ  form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
// http logger
app.use(morgan("dev"));

//middleware
app.use(SortMiddleware);
//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      sortAble: (field, sort) => {
        //sort cho sort type

        const icons = {
          default: "fa-solid fa-sort",
          asc: "fa-solid fa-arrow-up-short-wide",
          desc: "fa-solid fa-arrow-up-wide-short",
        };
        const types = {
          default: "desc",
          asc: "desc",
          desc: "asc",
        };
        const type = types[sort.type];
        const icon = icons[sort.type];
        return `
        <a href="?_sort&column=${field}&type=${type}">
        <i class="${icon}"></i>
        </a>
        `;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

db.connect();

//route init
route(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
