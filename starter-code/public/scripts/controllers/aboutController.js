'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // it's hiding everything but the about id. and then it calls repos.requestRepos with the calback of repoView.index
  //it's called in routes.js
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
