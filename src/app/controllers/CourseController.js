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
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect(`/me/stored/courses`))
      .catch(next);
  }
  //get /courses/:id/edit
  edit(req, res, next) {
    const id = req.params.id;
    Course.findById(id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //put /courses/:id
  update(req, res, next) {
    const id = req.params.id;
    const formData = req.body;
    Course.updateOne({ _id: id }, formData)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  //delete /courses/:id
  delete(req, res, next) {
    const id = req.params.id;
    Course.delete({ _id: id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  //patch /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  //delete /courses/:id/force
  forceDelete(req, res, next) {
    Course.deleteOne({
      _id: req.params.id,
    })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new CourseController();
//get /news/:slug (slug là 1 biến động nhận các giá trị ngẫu nhiên
