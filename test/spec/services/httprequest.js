'use strict';

describe('Service: Httprequest', function () {

  // load the service's module
  beforeEach(module('ganttChartApp'));

  // instantiate service
  var Httprequest;
  beforeEach(inject(function (_Httprequest_) {
    Httprequest = _Httprequest_;
  }));

  it('should do something', function () {
    expect(!!Httprequest).toBe(true);
  });

});
