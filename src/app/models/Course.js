const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const moongoseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Course = new Schema(
  {
    _id: { type: Number },
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String, required: true },
    level: { type: String },
  },
  {
    _id: false,
    timestamps: true,
  }
);
mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(moongoseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
module.exports = mongoose.model("Course", Course);
//mongoose tự đọc cái model này và tạo ra collection trong db
//nếu có collection rồi nó tự convert sang số nhiều hoặc chữ thường để so sánh
//với collection sau đó đọc dữ liệu
//nếu chưa có collection nó tự tạo ra collection mới
