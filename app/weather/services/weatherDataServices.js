'use strict';

var weatherServices = angular.module('weatherApp.Services', ['ngResource']);

weatherServices.factory('OpenWeatherMap', ['$resource', function($resource) {
	var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
	var numberOfDays = 14;
    return $resource(URL, {
        cnt: numberOfDays
    });
}]);
