var App = angular.module('app',['ngResource','ngRoute','app.models','app.controllers','app.directives']);

App.config(function($routeProvider) {

  $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller:'MainController'
      }).
      when('/results',{
        templateUrl: 'views/results.html',
        controller:'ResultsController',
      }).otherwise({
        redirectTo: "/"
      });
});