
 myApp.controller('question', function($scope, $http ,$rootScope) {
  let index=0;
  let score =0;
   $scope.Name = "Megha Jain";
   $scope.mobileNo = "8962299199" ; 
   $scope.id = "A-101";
   $scope.password = "meghaj4091";
  $scope.Question = function(){
  $http.get("../question.json")
    .then(function (response){
      $scope.name = response.data.questions;
       $scope.index=index;
    });
  }
  $scope.next = function(){
    $http.get("../question.json")
      .then(function (response){
        $scope.name = response.data.questions;
        index++;
        $scope.index=index;
      if (index == 10){
          exit() ;
        }
      
      });
    }
    $scope.previous = function(){
      $http.get("../question.json")
        .then(function (response){
          $scope.name = response.data.questions;
          index--;
          $scope.index=index;
        });
      }
      $scope.checkAnswer = function(index) {
        $rootScope.score = score;
         $http.get("../question.json")
        .then(function (response){
        var ans = $('input[name=answer]:checked').val();
         console.log(ans+ " "+response.data.questions[index].options[response.data.questions[index].answer-1]+" "+$scope.score)
       if( ans == response.data.questions[index].options[response.data.questions[index].answer-1]) {
          score++;
          $rootScope.score = score;
         }
           $rootScope.answer = $rootScope.score;         
           $rootScope.avg = ($rootScope.score * 100) / 10 ;
           if ($rootScope.avg >= 60){
             $rootScope.selected = "yes";
           }
             else
             { $rootScope.selected = "No"}
           });
      }
    
      
});



