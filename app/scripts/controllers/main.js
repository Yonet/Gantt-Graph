'use strict';

/**
 * @ngdoc function
 * @name ganttChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ganttChartApp
 */
angular.module('ganttChartApp')
	.controller('MainCtrl', ['$scope', 'httpRequest', 'dataService',function ($scope, httpRequest, dataService) {
		
		// var url = 'http://dev.poshly.com/api/v1/giveaways';
		$scope.chartData = dataService.getData();
		
	}]);