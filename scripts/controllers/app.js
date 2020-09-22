var app = angular.module('app', [
    'ngRoute',
    'ngTouch'
]);


app.config(function ($routeProvider, $locationProvider, $httpProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when('/admin', {
        templateUrl: 'parts/admin.html',
        controller: 'hermesController'
    }).otherwise({
        templateUrl: 'parts/home.html',
        controller: 'hermesController'
    });

    //$locationProvider.html5Mode(true);

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
});

app.filter('numberFixedLen', function () {
    return function (a, b) {
        return (1e4 + a + "").slice(-b)
    }
});

app.filter('numberStr', function () {
    return function (string) {
        parseInt(number);
    }
});

app.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);

app.filter('array', function() {
  return function(items) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
   return filtered;
  };
});
