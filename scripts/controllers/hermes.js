app.controller('hermesController', ['$scope', '$window', '$http', '$location', '$filter', function ($scope, $window, $http, $location, $filter) {

    //carrega objetos

    var autores = [];

    //variaveis padrão

    $scope.users = "";
    //$scope.thumbs2 = false;

    //load json
    $scope.users = 'scripts/services/files.json';

    //can load php here:

    //$scope.buscaobj = 'http://hermes.radio/service.php?q=*';

    $http({
        method: 'GET',
        url: $scope.users
    }).then(function successCallback(response) {
        //console.log(response.data);
        $scope.objetos = response.data;
        $scope.arrobj = $filter('array')($scope.objetos);
        $scope.arrobj = $filter('orderBy')($scope.arrobj, 'idno');

        console.log($scope.arrobj);
        //get array from json
        return $scope.arrobj;
    }, function errorCallback(response) {

        // or server returns response with an error status.

        console.log("errorCallback");


    }, function errorCall(response) {
        console.log("error")
    });

    var adress = ''

    //$location.path(adress);

    var query = $location.path();

}]);
