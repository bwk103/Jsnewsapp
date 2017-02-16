(function(exports) {
  var ArticleList = function() {
    this.list = [];
  };

  ArticleList.prototype.addArticle = function(article) {
    this.list.push(article);
  };

  // Article.prototype.viewHeadline = function() {
  //   return this.headline;
  // };

  exports.ArticleList = ArticleList;
})(this);
