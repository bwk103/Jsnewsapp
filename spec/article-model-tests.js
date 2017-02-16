function testArticleIsArticle() {
  var article = new Article();
  assert.isTrue(article instanceof Article);
}

// function testNoteContainsText() {
//   var note = new Note("My favourite language is JavaScript");
//   assert.isTrue(note.text === "My favourite language is JavaScript");
// }
//
// function testViewTextReturnsText() {
//   var note = new Note("My favourite language is JavaScript");
//   assert.isTrue(note.viewText() === "My favourite language is JavaScript");
// }

testArticleIsArticle();
// testNoteContainsText();
// testViewTextReturnsText();
