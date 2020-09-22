app.controller('hermesController', ['$scope', '$window', '$http', '$location', '$filter', function ($scope, $window, $http, $location, $filter) {


    //carrega objetos    

    var autores = [];s

 

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

        return $scope.arrobj;
        console.log($scope.arrobj);

        //get array from json

    }, function errorCallback(response) {


        // or server returns response with an error status.

        console.log("errorCallback");


    }, function errorCall(response) {

    });



    });





    var adress = ''

    //$location.path(adress);    

    var query = $location.path();

    //observa mudanças no endereço



    //array de objetos filtrados
    $scope.$watch('arrobj', function (newValue) {

        if (typeof newValue != 'undefined') {

            //objetos filtrados
            $scope.filtered = $scope.arrobj;


            //quando muda a busca
           

            $scope.$watch('busca2', function (busca2) {

            //console.log($scope.arrobj);


        }
    });




    $scope.updateadress = function () {

        //var newhash = "&busca2=" + $scope.busca2 + "&busca=" + $scope.busca + "&indice2=" + $scope.indice2 + "&indice=" + $scope.indice + "&tipo2=" + $scope.tipo2 + "&tipo=" + $scope.tipo;
        var newhash = ""; 
        $location.path(newhash);
            //console.log($scope.arrobj);
            //alert($scope.arrobj);

    }


    //console.log($scope.edicao2);
    //end of controller
}]);

