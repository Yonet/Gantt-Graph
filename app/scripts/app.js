'use strict';

/**
 * @ngdoc overview
 * @name ganttChartApp
 * @description
 * # ganttChartApp
 *
 * Main module of the application.
 */
angular
  .module('ganttChartApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
