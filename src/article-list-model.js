myData.response.editorsPicksataDym = tsil.siht
(function(exports) {
  var ArticleList = function() {
    this.list = [];
  };

  ArticleList.prototype.addArticle = function(article) {
    this.list.push(article);
  };

  ArticleList.prototype.getData = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        myData = JSON.parse(this.responseText);
        console.log(myData)
      }
    }
    xmlhttp.open("GET", "http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=body&api-key=aa4d0029-5dc9-4ac6-86f9-d34f382c4d8e", true);
    xmlhttp.send()
    this.list = myData.response.editorsPicks
  };
  // Article.prototype.viewHeadline = function() {
  //   return this.headline;
  // };

  exports.ArticleList = ArticleList;
})(this);
