"use strict"

angular.module('salonApp')
  .controller('UserCtrl', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

    $scope.getStarted = function() {
      console.log("getting started");
      $location.path('/signup');
    }
  }])
