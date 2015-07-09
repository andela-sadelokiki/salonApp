"use strict"

angular.module('salonApp')
  .controller('HomeCtrl', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

    console.log("getting started");
    $scope.getStarted = function() {
      console.log("getting started");
      $location.path('/signup');
    }
  }])
