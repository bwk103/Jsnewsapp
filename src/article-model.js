(function(exports) {
  var Article = function(text) {
    this.headline = text;
  };

  Article.prototype.viewHeadline = function() {
    return this.headline;
  };

  exports.Article = Article;
})(this);
