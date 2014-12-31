'use strict';
angular.module('weatherApp.Directives', [])
    .directive('weatherpanel', [function() {
        return {
            restrict: 'E',
            scope: {
                weatherRecord: '=record'
            },
            templateUrl: 'weather/partials/weatherDataPanel.html',
            link: function(scope, element, attributes) {
                scope.getImageUrl = function(imageName) {
                    return 'http://openweathermap.org/img/w/' + imageName + '.png';
                };
            }
        };
    }]);
