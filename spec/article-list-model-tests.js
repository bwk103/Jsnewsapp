function testArticleListIsArticleList() {
  var articleList = new ArticleList();
  assert.isTrue(articleList instanceof ArticleList);
}

function testArticleListSendsRequest(){
  var articleList = new ArticleList();
  function xmlrequestDouble(){
    this.apiCallCount = 0;
  }
  xmlrequestDouble.prototype = {
    onreadystatechange: function(){
    },
    open: function(){},
    send: function () {
      this.apiCallCount++
    },
  }
  xmlhttpDouble = new xmlrequestDouble()
  articleList.xmlhttp = xmlhttpDouble;
  articleList.getData()
  assert.isTrue(articleList.xmlhttp.apiCallCount === 1)
  console.log(articleList);
};

function testArticleListReceiveJSON(){
  var articleList = new ArticleList();
  var myData = {"response": {"editorsPicks": {"webTitle": "Bayern 5 - Arsenal 1", "fields":{"body": "Arsenal are rubbish!"}}}};
  function xmlrequestDouble(){
    this.apiCallCount = 0;
    this.myData = {"response": {"editorsPicks": {"webTitle": "Bayern 5 - Arsenal 1", "fields":{"body": "Arsenal are rubbish!"}}}};
  }
  xmlrequestDouble.prototype = {
    onreadystatechange: function(){
    },
      open: function(){},
      send: function (){
        return this.myData;
      }
  }
  xmlhttpDouble = new xmlrequestDouble()
  articleList.xmlhttp = xmlhttpDouble;
  articleList.getData()
  console.log(this.xmlhttpDouble.myData)
  assert.isTrue(articleList.getData() === this.xmlhttpDouble.myData)
  console.log(articleList);
};

testArticleListIsArticleList();
testArticleListSendsRequest();
testArticleListReceiveJSON();
