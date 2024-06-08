const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./courses");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  app.use("/courses", courseRouter);
}
module.exports = route;
