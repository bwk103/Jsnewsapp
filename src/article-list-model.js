(function(exports) {
  var ArticleList = function() {
    this.list = [];
  };

  addArticle = function(array) {
    for (var i = 0; i < myData.response.editorsPicks.length; i++){
      this.list.push(new Article(myData.response.editorsPicks[i].webTitle, myData.response.editorsPicks[i].fields.body));
    }
  };

  ArticleList.prototype.getData = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        myData = JSON.parse(this.responseText);
      }
    };
    xmlhttp.open("GET", "http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=body&api-key=aa4d0029-5dc9-4ac6-86f9-d34f382c4d8e", true);
    xmlhttp.send();
    // delayAssigment(this);
    };

    ArticleList.prototype.sendData = function(){

    }

    function delayAssigment(item){
      setTimeout(function() {
        item.addArticle();
        }, 1000);
    }
  // Article.prototype.viewHeadline = function() {
  //   return this.headline;
  // };

  exports.ArticleList = ArticleList;
})(this);
