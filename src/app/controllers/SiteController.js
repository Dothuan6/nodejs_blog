const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  //get /news
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
  //get /news/:slug (slug là 1 biến động nhận các giá trị ngẫu nhiên)
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
