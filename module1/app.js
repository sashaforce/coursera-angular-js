(function() {
  'use strict';

  angular.module("LunchCheck", []) // name, requires
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController ($scope) {

    $scope.checkInput = function () {
      // console.log("checking input");
      $scope.messageOut = "";

      //
      if ($scope.textIn == undefined || $scope.textIn.length <= 0) {
          $scope.messageOut = "Please enter data first.";
      }
      else {
        var foodArray = $scope.textIn.split(",");
        if (foodArray.length <= 3) {
          $scope.messageOut = "Enjoy!";
        } else {
          $scope.messageOut = "Too much!";
        }
      }
    }
  };
}());
