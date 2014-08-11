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
		var margin = {top: 20, right: 0, bottom: 15, left: 50},
			width = 1300 - margin.left - margin.right,
			height = 800 - margin.top - margin.bottom,
			now = new Date();
			// colors = d3.scale.category20();

		//Linking function
		var link = function (scope, element, attr) {
			var el = element[0],
				data = scope.data,//.slice(0, 30),
				dateFormat = d3.time.format('%y%m%d%H%M%S%Z'),//formats date 140227003408+0000
				tickFormat = d3.time.format('%Y-%m-%d'),//x axis tick format
				laneStarts = [
					data[0].start
				];//initializes an array to store the starting date of each lane
			data[0].lane = 0;
			//Calculates and assignes lane property of each event
			angular.forEach(data, function(value, key) {
				var len = laneStarts.length;
				for (var i = 0; i < len; i++) {
					// debugger;
					if(value.end < laneStarts[i]) {
						value.lane = i;
						laneStarts[i] = value.start;
						return;
					}
				}
				//If a date range doesn't fit in any lanes add a new lane
				if(value.lane === undefined) {
					laneStarts[len] = value.start;
					value.lane = len;
				}
			});


			//Tooltip div 
			var tooltipDiv = d3.select(el).append('div')
				.attr('class', 'tooltip')
				.style('opacity', 0);

			//Calculates graph height according to lane number
			var lanes = laneStarts.length,
				miniHeight = 100,//lanes * 12 + 50,
				mainHeight = 500,//height - miniHeight - 50,
				sublaneHeight = mainHeight / lanes;

			//x scale
			var x = d3.time.scale()
				.domain([d3.time.sunday(d3.min(data, function(d) { return dateFormat.parse(d.start); })),
				d3.max(data, function(d) { return dateFormat.parse(d.end); })])
				.range([0, width]);

			var x1 = d3.time.scale().range([0, width]);

			var ext = d3.extent([0,lanes]);
			var y1 = d3.scale.linear().domain([ext[0], ext[1] + 1]).range([0, mainHeight]);
			var y2 = d3.scale.linear().domain([ext[0], ext[1] + 1]).range([0, miniHeight]);
			//Chart svg
			var chart = d3.select(el)
				.append('svg:svg')
				.attr('width', width + margin.right + margin.left)
				.attr('height', height + margin.top + margin.bottom)
				.attr('class', 'chart');

			//Clipping Path
			chart.append('defs').append('clipPath')
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

			// draw the lanes for the main chart
			main.append('g').selectAll('.laneLines')
				.data(laneStarts)
				.enter().append('line')
				.attr('x1', 0)
				.attr('y1', function(d, i) { return d3.round(y1(i)) + 0.5; })
				.attr('x2', width)
				.attr('y2', function(d, i) { return d3.round(y1(i)) + 0.5; })
				.attr('stroke', 'lightgray');

			main.append('g').selectAll('.laneText')
				.data(laneStarts)
				.enter().append('text')
				.text(function(d, i) { return 'lane-' + i; })
				.attr('x', -10)
				.attr('y', function(d, i) { return y1(i + 0.5); })
				.attr('dy', '0.5ex')
				.attr('text-anchor', 'end')
				.attr('class', 'laneText');

			// draw the lanes for the mini chart
			mini.append('g').selectAll('.laneLines')
				.data(laneStarts)
				.enter().append('line')
				.attr('x1', 0)
				.attr('y1', function(d, i) { return d3.round(y2(i)) + 0.5; })
				.attr('x2', width)
				.attr('y2', function(d, i) { return d3.round(y2(i)) + 0.5; })
				.attr('stroke', 'lightgray');

			mini.append('g').selectAll('.laneText')
				.data(lanes)
				.enter().append('text')
				.text(function(d, i) { return 'lane-' + i; })
				.attr('x', -10)
				.attr('y', function(d, i) { return y2(i + 0.5); })
				.attr('dy', '0.5ex')
				.attr('text-anchor', 'end')
				.attr('class', 'laneText');

			// draw the x axis
			var xDateAxis = d3.svg.axis()
				.scale(x)
				.orient('bottom')
				.ticks(d3.time.mondays, (x.domain()[1] - x.domain()[0]) > 15552e6 ? 2 : 1)
				.tickFormat(d3.time.format('%d'))
				.tickSize(6, 0, 0);

			var x1DateAxis = d3.svg.axis()
				.scale(x1)
				.orient('bottom')
				.ticks(d3.time.days, 1)
				.tickFormat(d3.time.format('%a %d'))
				.tickSize(6, 0, 0);

			var xMonthAxis = d3.svg.axis()
				.scale(x)
				.orient('top')
				.ticks(d3.time.months, 1)
				.tickFormat(d3.time.format('%b %Y'))
				.tickSize(15, 0, 0);

			var x1MonthAxis = d3.svg.axis()
				.scale(x1)
				.orient('top')
				.ticks(d3.time.mondays, 1)
				.tickFormat(d3.time.format('%b - Week %W'))
				.tickSize(15, 0, 0);

			main.append('g')
				.attr('transform', 'translate(0,' + mainHeight + ')')
				.attr('class', 'main axis date')
				.call(x1DateAxis);

			main.append('g')
				.attr('transform', 'translate(0,0.5)')
				.attr('class', 'main axis month')
				.call(x1MonthAxis)
				.selectAll('text')
					.attr('dx', 5)
					.attr('dy', 12);

			mini.append('g')
				.attr('transform', 'translate(0,' + miniHeight + ')')
				.attr('class', 'axis date')
				.call(xDateAxis);

			mini.append('g')
				.attr('transform', 'translate(0,0.5)')
				.attr('class', 'axis month')
				.call(xMonthAxis)
				.selectAll('text')
					.attr('dx', 5)
					.attr('dy', 12);
			// // draw a line representing today's date
			// main.append('line')
			// 	.attr('y1', 0)
			// 	.attr('y2', mainHeight)
			// 	.attr('class', 'main todayLine')
			// 	.attr('clip-path', 'url(#clip)');

			// mini.append('line')
			// 	.attr('x1', x(now) + 0.5)
			// 	.attr('y1', 0)
			// 	.attr('x2', x(now) + 0.5)
			// 	.attr('y2', miniHeight)
			// 	.attr('class', 'todayLine');

			// draw the items
			var itemRects = main.append('g')
				.attr('clip-path', 'url(#clip)');

			mini.append('g').selectAll('miniItems')
				.data(getPaths(data))
				.enter().append('path')
				.attr('d', function(d) { return d.path; });

			// invisible hit area to move around the selection window
			mini.append('rect')
				.attr('pointer-events', 'painted')
				.attr('width', width)
				.attr('height', miniHeight)
				.attr('visibility', 'hidden')
				.on('mouseup', moveBrush);
			// draw the selection area
			var brush = d3.svg.brush()
				.x(x)
				.extent([dateFormat.parse(data[99].start),d3.time.monday(now)])
				.on('brush', display);

			mini.append('g')
				.attr('class', 'x brush')
				.call(brush)
				.selectAll('rect')
					.attr('y', 1)
					.attr('height', miniHeight - 1);
			mini.selectAll('rect.background').remove();
			display();

			function display () {

				var rects, labels,
					minExtent = d3.time.day(brush.extent()[0]),
					maxExtent = d3.time.day(brush.extent()[1]),
					visItems = data.filter(function (d) { return dateFormat.parse(d.start) < maxExtent && dateFormat.parse(d.end) > minExtent;});

				mini.select('.brush').call(brush.extent([minExtent, maxExtent]));

				x1.domain([minExtent, maxExtent]);
				//Format ticks depending on time range
				if ((maxExtent - minExtent) > 1468800000) {
					x1DateAxis.ticks(d3.time.mondays, 1).tickFormat(d3.time.format('%a %d'));
					x1MonthAxis.ticks(d3.time.mondays, 1).tickFormat(d3.time.format('%b - Week %W'));
				}
				else if ((maxExtent - minExtent) > 172800000) {
					x1DateAxis.ticks(d3.time.days, 1).tickFormat(d3.time.format('%a %d'));
					x1MonthAxis.ticks(d3.time.mondays, 1).tickFormat(d3.time.format('%b - Week %W'));
				}
				else {
					x1DateAxis.ticks(d3.time.hours, 4).tickFormat(d3.time.format('%I %p'));//12 AM
					x1MonthAxis.ticks(d3.time.days, 1).tickFormat(d3.time.format('%b %e'));//Aug 1
				}


				// update the axis
				main.select('.main.axis.date').call(x1DateAxis);
				main.select('.main.axis.month').call(x1MonthAxis)
					.selectAll('text')
						.attr('dx', 5)
						.attr('dy', 12);

				// upate the item rects
				rects = itemRects.selectAll('rect')
					.data(visItems, function (d, i) { return i; })
					.attr('opacity', 0.5)
					.attr('x', function(d) { return x1(dateFormat.parse(d.start)); })
					.attr('width', function(d) { return x1(dateFormat.parse(d.end)) - x1(dateFormat.parse(d.start)); });

				rects.enter().append('rect')
					.attr('x', function(d) { return x1(dateFormat.parse(d.start)); })
					.attr('y', function(d) { return y1(d.lane) + 0.1 * y1(1) + 0.5; })
					.attr('width', function(d) { return x1(dateFormat.parse(d.end)) - x1(dateFormat.parse(d.start)); })
					.attr('height', function(d) { return 0.8 * y1(1); })
					.attr('class', function(d) { return 'mainItem ' + d.class; });

				rects.exit().remove();

				// update the item labels
				labels = itemRects.selectAll('text')
					.data(visItems, function (d, i) { return i; })
					.attr('x', function(d) { return x1(Math.max(dateFormat.parse(d.start), minExtent)) + 2; });
							
				labels.enter().append('text')
					.text(function (d,i) { return i; })
					.attr('x', function(d) { return x1(Math.max(dateFormat.parse(d.start), minExtent)) + 2; })
					.attr('y', function(d) { return y1(d.lane) + 0.4 * y1(1) + 0.5; })
					.attr('text-anchor', 'start')
					.attr('class', 'itemLabel');

				labels.exit().remove();
			}

			function moveBrush () {
				var origin = d3.mouse(this),
					point = x.invert(origin[0]),
					halfExtent = (brush.extent()[1].getTime() - brush.extent()[0].getTime()) / 2,
					start = new Date(point.getTime() - halfExtent),
					end = new Date(point.getTime() + halfExtent);

				brush.extent([start,end]);
				display();
			}

			function getPaths(items) {
				var paths = {}, d, offset = 0.5 * y2(1) + 0.5, result = [];
				for (var i = 0; i < items.length; i++) {
					d = items[i];
					if (!paths[d.class]) { paths[d.class] = ''; }
					paths[d.class] += ['M',x(dateFormat.parse(d.start)),(y2(d.lane) + offset),'H',x(dateFormat.parse(d.end))].join(' ');
				}

				for (var className in paths) {
					result.push({class: className, path: paths[className]});
				}

				return result;
			}

		};
		return {
			restrict: 'E',
			scope : {
				data:'='
			},
			link: link
		};
	});
