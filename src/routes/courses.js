const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);

router.get("/:slug", courseController.show);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.post("/handle-form-actions", courseController.handleFormActions);
router.patch(
  "/handle-form-actions-trash",
  courseController.handleFormActionsTrash
);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.delete);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id/force", courseController.forceDelete);
module.exports = router;
