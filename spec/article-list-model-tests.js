function testArticleListIsArticleList() {
  var articleList = new ArticleList();
  assert.isTrue(articleList instanceof ArticleList);
}

// function testArticleListAddsArticles() {
//   var articleList = new ArticleList();
//
//   // var article1 = new Article("This is the headline for Article 1");
//   // var article2 = new Article("This is the headline for Article 2");
//   // articleList.addArticle(article1);
//   // articleList.addArticle(article2);
//   assert.isTrue(articleList.list.includes(article1, article2));
// }

function testArticleListReturnsJSON(){
  var articleList = new ArticleList();
  var data = {"response": {"editorsPicks": {"webTitle": "Bayern 5 - Arsenal 1", "fields":{"body": "Arsenal are rubbish!"}}}};
  articleList.getData = function () {
    return data
  };
  
};





testArticleListIsArticleList();
// testArticleListAddsArticles();
// testViewTextReturnsText();
