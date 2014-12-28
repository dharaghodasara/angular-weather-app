'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
    'ngRoute',
    'weatherApp.weatherModule'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/weather', {
        templateUrl: 'weather/partials/weatherInformation.html',
        controller: 'WeatherInformationCtrl'
    }).otherwise({
        redirectTo: '/weather'
    });
}]);