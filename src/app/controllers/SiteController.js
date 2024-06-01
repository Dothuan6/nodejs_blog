class NewsController {
    //get /news
    index(req, res) {
        res.render('home');
    }
    //get /news/:slug (slug là 1 biến động nhận các giá trị ngẫu nhiên)
    search(req, res) {
        res.render('search');
    }
}
module.exports = new NewsController();
