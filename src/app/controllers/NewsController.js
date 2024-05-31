class NewsController {
  //get /news
  index(req, res) {
    res.render("news");
  }
  //get /news/:slug (slug là 1 biến động nhận các giá trị ngẫu nhiên)
  show(req, res) {
    res.send("News Detail");
  }
}
module.exports = new NewsController();
