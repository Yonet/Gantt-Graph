'use strict';

/**
 * @ngdoc directive
 * @name longRangeSyncApp.directive:tableChart
 * @description
 * # tableChart
 */
angular.module('ganttChartApp')
	.directive('swimlaneChart', function () {

		//Sets up the display variables 
		var margin = {top: 20, right: 0, bottom: 15, left: 0},
			width = 960 - margin.left - margin.right,
			height = 600 - margin.top - margin.bottom,
			now = new Date(),
			colors = d3.scale.category20();

		//Linking function
		var link = function (scope, element, attr) {
			var el = element[0],
				data = scope.data,
				lanes = [],
				dateFormat = d3.time.format('%y%m%d%H%M%S%Z'),//formats date 140227003408+0000
				tickFormat = d3.time.format("%Y-%m-%d"),//x axis tick format
				laneNum = 0,//initializes number of lanes 
				laneStarts = [
					data[0].start
				];//initializes an array to store the starting date of each lane



			//Calculates and assignes lane property of each event
			angular.forEach(data, function(value) {
				var len = laneStarts.length;
				for (var i = 0; i < len; i++) {
					if(value.end < laneStarts[i]) {
						value.lane = i;
						laneStarts[i] = value.start;
					}
				}
				//If a date range doesn't fit in any lanes add a new lane
				if(!value.lane) {
					laneStarts[len] = value.start;
					value.lane = len;
				}
			});


			//Tooltip div 
			var tooltipDiv = d3.select(el).append('div')
				.attr('class', 'tooltip')
				.style('opacity', 0); 

			//TODO Calculate graph height according to lane number
			var miniHeight = 100,//lanes.length * 6 + 50,
				mainHeight = 400,//height - miniHeight - 50,
				sublaneHeight = mainHeight / 5;

			//Calculates start and end time. 
			// var eventStartMin = d3.min(data, function(d) { return dateFormat.parse(d.start); });
			// var eventEndMax = d3.max(data, function(d) { return dateFormat.parse(d.end); });

			//x scale
			var x = d3.time.scale()
				.domain([
					d3.min(data, function(d){ return d.start;}),
					d3.max(data, function(d){ return d.end;})])
				.range([0, width - 100]);
			var x1 = d3.time.scale().range([0, width]);

			var ext = d3.extent(laneStarts);
			var y1 = d3.scale.linear().domain([ext[0], ext[1] + 1]).range([0, mainHeight]);
			var y2 = d3.scale.linear().domain([ext[0], ext[1] + 1]).range([0, miniHeight]);
			var chart = d3.select(el)
				.append('svg:svg')
				.attr('width', width + margin.right + margin.left)
				.attr('height', height + margin.top + margin.bottom)
				.attr('class', 'chart');

			//Clipping Path
			chart.append('desc').append('clipPath')
				.attr('id', 'clip')
				.append('rect')
					.attr('width', width)
					.attr('height', mainHeight);
			//Main chart selections and transformation
			var main = chart.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
				.attr('width', width)
				.attr('height', mainHeight)
				.attr('class', 'main');

			//Mini chart for brushing function
			var mini = chart.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + (mainHeight + 60) + ')')
				.attr('width', width)
				.attr('height', miniHeight)
				.attr('class', 'mini');

		};
		return {
			restrict: 'E',
			scope : {
				data:'='
			},
			link: link
		};
	});
