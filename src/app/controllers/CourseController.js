const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  //get /news
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("courses/create");
  }
  //post /courses/store

  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect(`/courses/${course.slug}`))
      .catch(next);
  }
  //get /news/:slug (slug là 1 biến động nhận các giá trị ngẫu nhiên
}
module.exports = new CourseController();
