(function(exports) {
  var ArticleList = function() {
    this.list = [];
    this.xmlhttp = new XMLHttpRequest();
  };

  formatArray = function(item, array) {
    for (var i = 0; i < myData.response.editorsPicks.length; i++){
      item.push(new Article(myData.response.editorsPicks[i].webTitle, myData.response.editorsPicks[i].fields.body));
    }
  };

  ArticleList.prototype.getData = function () {
    this.xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        myData = JSON.parse(this.responseText);
      }
    };
    this.xmlhttp.open("GET", "http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=body&api-key=aa4d0029-5dc9-4ac6-86f9-d34f382c4d8e", true);
    this.xmlhttp.send();
    };

    ArticleList.prototype.assignData = function(){
      getData(this.xmlhttp)
      delayAssigment(this.list)
    }

    function delayAssigment(item){
      setTimeout(function() {
        return myData;
        }, 1000);
    }
  // Article.prototype.viewHeadline = function() {
  //   return this.headline;
  // };

  exports.ArticleList = ArticleList;
})(this);
