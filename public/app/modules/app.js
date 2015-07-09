"use strict"

var app = angular.module("salonApp", ["ngRoute","angular-loading-bar"]);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', 'cfpLoadingBarProvider', function($routeProvider, $httpProvider, $locationProvider, cfpLoadingBarProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'app/views/home.view.html',
      controller: 'HomeCtrl'
    })
    .when('/signup', {
      templateUrl: 'app/views/signup.view.html',
      controller: 'UserCtrl'
    })
    .when('/signin', {
      templateUrl: 'app/views/signin.view.html',
      controller: 'UserCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}])
