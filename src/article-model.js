(function(exports) {
  var Article = function(headline, body) {
    this.headline = headline;
    this.body = body
  };

  Article.prototype.viewHeadline = function() {
    return this.headline;
  };

  exports.Article = Article;
})(this);
