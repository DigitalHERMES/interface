app.controller('hermesController', ['$scope', '$window', '$http', '$location', '$filter', function ($scope, $window, $http, $location, $filter) {
    //carrega objetos
    var users = [];

    $scope.buscaobj = 'scripts/services/files.json';

    $http({
        method: 'GET',
        url: $scope.buscaobj
    }).then(function successCallback(response) {
        //console.log(response.data);
        $scope.objetos = response.data;
        $scope.arrobj = $filter('array')($scope.objetos);
        $scope.arrobj = $filter('orderBy')($scope.arrobj, 'idno');

        return $scope.arrobj;
        console.log($scope.arrobj);

    }, function errorCallback(response) {

        // or server returns response with an error status.


    }, function errorCall(response) {

    });

    var query = $location.path();

    //observa mudanças no endereço
    //end of controller
}]);
