'use strict';
angular.module('weatherApp.Filters', [])
    .filter('celsius', [function() {
        return function(temp){
           return temp- 273.15;
        };
    }]);
