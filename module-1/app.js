(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchOpts = "";

  $scope.sendMessage = function () {
    // let's say if it's ok or too Much
    var splitted = $scope.lunchOpts.split(',');
    var slength = splitted.length;
    var validElements = 0; var i = 0;
    $scope.msgcolor = "#0b6623";
    $scope.bordercolor = "#0b6623";
    if ($scope.lunchOpts != '') {
        // real number of elements (eg. non white spaces between commas)
        for (i = 0; i < slength; i++) {
          // console.log ('Value: '+splitted[i]+' '); // uncomment for debugging
          if (splitted[i] != '' && splitted[i] != ' ') {
            validElements ++;
          }
        }
          // console.log('validElements: '+validElements+' '); // uncomment for debugging
          if (validElements > 0 && validElements <= 3) {
          $scope.message = 'Enjoy!';
        }
          else if (validElements >= 4) {
            $scope.message = 'Too much!';
        }
    } else {
      // Error scenario
      $scope.msgcolor = "#FF0800";
      $scope.bordercolor = "#FF0800";
      $scope.message = 'Please enter data first!';
    }
  };
};

})();
