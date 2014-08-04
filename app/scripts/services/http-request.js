'use strict';

/**
 * @ngdoc service
 * @name ganttChartApp.Httprequest
 * @description
 * # Httprequest
 * Service in the ganttChartApp.
 */
angular.module('ganttChartApp')
  .factory('httpRequest', ['$http', '$q', function($http, $q) {
	
	return {
		getJsonp: function (url) {
			//Creating deferred object
			var deferred = $q.defer();

			//Fetch data
			$http.jsonp(url).success(function(data) {
				//Passing data to deferred's resolve function on success
				deferred.resolve(data);
			}).error(function(data, status){
				//error message in case of failure
				deferred.reject({
					'data':data,
					'status': status
				});
			});

			//Returning the promise object
			return deferred.promise;
		},
		getData: function (url) {
			//Creating deferred object
			var deferred = $q.defer();

			//Fetch data
			$http.get(url).success(function(data) {
				//Passing data to deferred's resolve function on success
				deferred.resolve(data);
			}).error(function(data, status){
				//error message in case of failure
				deferred.reject({
					'data':data,
					'status': status
				});
			});

			//Returning the promise object
			return deferred.promise;
		}
	};
}]);
