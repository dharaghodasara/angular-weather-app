'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
    'ngRoute',
    'weatherApp.Controllers',
    'weatherApp.Services',
    'weatherApp.Directives',
    'weatherApp.Filters'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/weather', {
        templateUrl: 'weather/partials/weatherData.html',
        controller: 'WeatherDataCtrl'
    }).otherwise({
        redirectTo: '/weather'
    });
}]);