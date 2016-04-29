angular.module('PersonalPageApp', [])
  .controller('PersonalPageController', function() {
    var personalPage = this;
    personalPage.education = [
      {text:'University of California, San Diego'},
      {text:'B.A. Cognitive Science with minor in Computer Science', done:true}
    ];

  });
