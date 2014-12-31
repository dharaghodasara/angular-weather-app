angular.module('weatherApp.Controllers', [])
    .controller('WeatherDataCtrl', ['$scope', 'OpenWeatherMap', function($scope, OpenWeatherMap) {

        $scope.weatherData = [];
        /* success callback */
        $scope.getPosition = function(position) {            
            OpenWeatherMap.get({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }, function(data) { /* success callback */
                $scope.weatherData.push(data);                
            });
        };
        /* error callback */
        $scope.getPositionErr = function(error) {
            $scope.errorMessage = error.message;
        };
        /* get current location */
        navigator.geolocation.getCurrentPosition($scope.getPosition, $scope.getPositionErr);
        
        /* click event listener */
        $scope.getWeatherData = function() {
            /* convert string into array */
            var cities = $scope.city.trim().split(',');
            /* reset weatherData array */
            $scope.weatherData = [];
            /* reset textbox*/
            $scope.city = '';
            /* loop through entered cities*/
            angular.forEach(cities, function(city) {
                /* service call for each city */
                OpenWeatherMap.get({
                    q: city
                }, function(data) { /* success callback */
                    $scope.weatherData.push(data);
                });
            });            
        };
    }]);
