'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        //It calls numWordsByAuthor which returns an array for each stat and adds it to a handlesbars template and appends it to author-stats class. Then, it appends the length of articles.all that has class of articles that's a subgroup of id of blog-stats. Then it solves the results of numWordsByAuthor into the words class tha's a subgroup of blog-stats.
        //numWordsByAuthor called immediately. numWordsAll is in article.js.
        //
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
