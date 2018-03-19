myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise( "/");
      $stateProvider
           .state('Home', {
               url: "/",
               templateUrl: "View/home.html"
           })
           .state('QuizStart', {
               url:"/QuizStart",
             templateUrl: "View/quiz.html", 
             controller : "question" 
           
           })
            .state('ScoreCard', {
             url:"/ScoreCard",
                templateUrl: "View/result.html",
                controller : "question"
            });
           
   });
  

   templateUrl: "partial/partial1.html"