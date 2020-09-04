app.controller('mapaController', ['$scope', '$window', '$http', '$location', '$filter', function ($scope, $window, $http, $location, $filter) {


    //carrega objetos    

    var autores = [];

 

    //variaveis padrão

    //revista par
    //revista impar  
    $scope.dir = "codigo01";
    $scope.dir2 = "codigo01";

    //pagina par
    //pagina impar
    $scope.indice = "codigo01_0001";
    $scope.indice2 = "codigo01_0038";

    //tipo par
    //tipo impar
    $scope.tipo = "imagem";
    $scope.tipo2 = "imagem";
    //console.log($scope.tipo);

    $scope.busca = "";
    $scope.busca2 = "";
    //$scope.thumbs2 = false;

    $scope.buscaobj = 'scripts/services/objects.json';
    $scope.buscarev = 'scripts/services/revistas.json';
    $scope.buscaaut = 'scripts/services/autores.json';

    //$scope.buscaobj = 'http://localhost/dados/service.php/simple/objects?q=*';
    //$scope.buscarev = 'http://localhost/dados/service.php/simple/revistas?q=*';
    //$scope.buscaaut = 'http://localhost/dados/service.php/simple/autores?q=*';

    //$scope.buscaobj = 'http://www.codigorevista.org/dados/service.php/simple/objects?q=*';
    //$scope.buscarev = 'http://www.codigorevista.org/dados/service.php/simple/revistas?q=*';
    //$scope.buscaaut = 'http://www.codigorevista.org/dados/service.php/simple/autores?q=*';

    $http({
        method: 'GET',
        url: $scope.buscaobj
    }).then(function successCallback(response) {
        //console.log(response.data);
        $scope.objetos = response.data;
        $scope.arrobj = $filter('array')($scope.objetos);
        $scope.arrobj = $filter('orderBy')($scope.arrobj, 'idno');


        $scope.edicao = $scope.arrobj;
        $scope.edicao2 = $scope.arrobj;
        $scope.sel = $scope.arrobj;
        $scope.sel2 = $scope.arrobj;


        return $scope.arrobj;
        //console.log($scope.arrobj);

    }, function errorCallback(response) {


        // or server returns response with an error status.

    $scope.buscaobj = 'scripts/services/objects.json';
    $scope.buscaaut = 'scripts/services/autores.json';

    $http({
        method: 'GET',
        url: $scope.buscaobj
    }).then(function successCallback(response) {
        //console.log(response.data);
        $scope.objetos = response.data;
        $scope.arrobj = $filter('array')($scope.objetos);
        $scope.arrobj = $filter('orderBy')($scope.arrobj, 'idno');


        $scope.edicao = $scope.arrobj;
        $scope.edicao2 = $scope.arrobj;
        $scope.sel = $scope.arrobj;
        $scope.sel2 = $scope.arrobj;


        return $scope.arrobj;
        //console.log($scope.arrobj);

    }, function errorCall(response) {

    });



    });



    //carrega colecoes
    $http({
        method: 'GET',
        url: $scope.buscarev
    }).then(function successCallback(response) {
        //console.log(response.data);
        $scope.revistas = response.data;

    }, function errorCallback(response) {
        // or server returns response with an error status.
        $scope.buscarev = 'scripts/services/revistas.json';

        $http({
        method: 'GET',
        url: $scope.buscarev
    }).then(function successCallback(response) {
        //console.log(response.data);
        $scope.revistas = response.data;

    }, function errorCall(response) {

    });

    });


    //carrega autores

    $http({
        method: 'GET',
        url: $scope.buscaaut
    }).then(function successCallback(response) {
        //console.log(response.data);
        $scope.autores = response.data;
        //console.log(autores);

    }, function errorCallback(response) {
        // or server returns response with an error status.
    });

    //variaveis padrão

    //revista par
    //revista impar  
    $scope.dir = "codigo01";
    $scope.dir2 = "codigo01";

    //pagina par
    //pagina impar
    $scope.indice = "codigo01_0001";
    $scope.indice2 = "codigo01_0038";

    //tipo par
    //tipo impar
    $scope.tipo = "imagem";
    $scope.tipo2 = "imagem";

    $scope.busca = "";
    $scope.busca2 = "";

    $scope.tipos = [{ Name: 'texto', id: 1 },{ Name: 'imagem', id: 2 }];
    $scope.options = [{ Name: 'imagem', id: 2 }];
    $scope.tipo = $scope.options[0].id;

        $scope.parts = $scope.indice.split("_");
        $scope.parts2 = $scope.indice2.split("_");
        $scope.dir = $scope.parts[0];
        $scope.dir2 = $scope.parts2[0];
        $scope.pagnum = $scope.parts[1];
        //$scope.pagnum = parseInt;
        $scope.pagnum2 = $scope.parts2[1];
        //$scope.pagnum2 = parseInt;

    //console.log($scope.tipo);

    //$scope.test = 'bla';


    //estilo pagina par (zoom)
    //estilo pagina impar (zoom)
    //$scope.estilo = $('#faixa').css();
    //$scope.estilo = angular.element('#faixa').getBoundingClientRect();

    //$scope.estilo = 'bla'
    //$scope.estilo2 = $('#faixa2').css();

    //console.log($scope.estilo);

    //url

    var adress = '&indice=' + $scope.indice + '&indice2=' + $scope.indice2

    //$location.path(adress);    

    var query = $location.path();

    //observa mudanças no endereço



    if (query) {
        $scope.thumbs2 = false;
        var items = query.split("&");
        //console.log(items);
        var params = {};

        for (var i = 0, l = items.length; i < l; i++) {
            var temp = items[i].split("=");
            if (temp[0]) {
                if (temp.length < 2) {
                    temp.push("");
                }
                params[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
            }
        }
        //console.log(params);

        $scope.busca = params.busca;
        $scope.busca2 = params.busca2;
        $scope.indice = params.indice;
        $scope.indice2 = params.indice2;
        $scope.tipo = params.tipo;
        $scope.tipo2 = params.tipo2;
        var parts = params.indice.split("_");
        var parts2 = params.indice2.split("_");
        $scope.dir = parts[0];
        $scope.dir2 = parts2[0];
        $scope.pagnum = parts[1];
        $scope.pagnum = parseInt;
        $scope.pagnum2 = parts2[1];
        $scope.pagnum2 = parseInt;

    } else {
    $scope.thumbs2 = true;
    }







    $scope.udateindice = function () {
        $scope.indice = $scope.dir + "_0001";
        $scope.updateadress();
        $scope.edicao = $filter('filter')($scope.arrobj, {
            collections: $scope.dir
        });
    }
    $scope.udateindice2 = function () {
        $scope.indice2 = $scope.dir2 + "_0001";
        $scope.updateadress();
        $scope.edicao2 = $filter('filter')($scope.arrobj, {
            collections: $scope.dir2
        });

    }

    //array de objetos filtrados
    $scope.$watch('arrobj', function (newValue) {

        if (typeof newValue != 'undefined') {

            //objetos filtrados
            $scope.filtered = $scope.arrobj;


            //quando muda a busca
            $scope.$watch('busca', function (busca) {
                if (typeof busca != 'undefined') {
                    $scope.filtered = $filter('filter')($scope.arrobj, busca);
                } else {
                    $scope.filtered = $scope.arrobj;
                }

                //muda os selecionados
                $scope.sel = $scope.filtered;
                //$scope.pag = $filter('filter')($scope.sel, $scope.indice);

                var positem = findinarray($scope.sel, 'idno', $scope.indice);

                return positem;
                return $scope.sel;



                //            console.log(positem);
                //            console.log(nextitem);
                //            console.log(previtem);


            });

            $scope.$watch('busca2', function (busca2) {
                if (typeof busca2 != 'undefined') {
                    $scope.filtered2 = $filter('filter')($scope.arrobj, busca2);
                } else {
                    $scope.filtered2 = $scope.arrobj;
                }
                $scope.sel2 = $scope.filtered2;
                $scope.pag2 = $filter('filter')($scope.sel2, $scope.indice2);

                var positem2 = findinarray($scope.sel2, 'idno', $scope.indice2);

                if (positem2 >= $scope.sel2.length) {
                    var nextitem2 = 0;
                } else {
                    var nextitem2 = positem2 + 1;
                }

                if (positem2 <= 0) {
                    var previtem2 = $scope.sel2.length;
                } else {
                    var previtem2 = positem2 - 1;
                }

                return positem2;
                return $scope.sel2;


                //            console.log(positem2);
                //            console.log(nextitem2);
                //            console.log(previtem2);    
            });

            //console.log($scope.arrobj);


        }
    });








    $scope.moveprev = function () {

        var positem = findinarray($scope.edicao, 'idno', $scope.indice);
        var tamanho = $scope.edicao.length;
        if (positem <= 0) {
            var previtem = tamanho - 1;
        } else {
            var previtem = positem - 1;
        }
        $scope.indice = $scope.edicao[previtem].idno;
        var parts = $scope.indice.split("_");
        $scope.dir = parts[0];
        //console.log($scope.edicao);
        $scope.updateadress();


    }

    $scope.moveprev2 = function () {
        var positem = findinarray($scope.edicao2, 'idno', $scope.indice2);
        var tamanho = $scope.edicao2.length;
        if (positem <= 0) {
            var previtem = tamanho - 1;
        } else {
            var previtem = positem - 1;
        }
        $scope.indice2 = $scope.edicao2[previtem].idno;
        var parts = $scope.indice2.split("_");
        $scope.dir2 = parts[0];
        //console.log($scope.edicao);
        $scope.updateadress();


    }



    $scope.movenext = function () {
        var positem = findinarray($scope.edicao, 'idno', $scope.indice);
        var tamanho = $scope.edicao.length;

        if (positem >= tamanho - 1) {
            var nextitem = 0;
        } else {
            var nextitem = positem + 1;
        }
        $scope.indice = $scope.edicao[nextitem].idno;
        var parts = $scope.indice.split("_");
        $scope.dir = parts[0];
        //console.log($scope.edicao.length);

        $scope.updateadress();

    }


    $scope.movenext2 = function () {
        var positem = findinarray($scope.edicao2, 'idno', $scope.indice2);
        var tamanho = $scope.edicao2.length;

        if (positem >= tamanho - 1) {
            var nextitem = 0;
        } else {
            var nextitem = positem + 1;
        }
        $scope.indice2 = $scope.edicao2[nextitem].idno;
        var parts = $scope.indice2.split("_");
        $scope.dir2 = parts[0];
        //console.log($scope.edicao2);

        $scope.updateadress();

    }

//____________________________________


$scope.duplavolta = function () {
//pega o indice - pagina da direita
var objdir = $scope.indice;
//divide em pagina e diretorio
var objparts = objdir.split("_");
var pagnum = objparts[1];
var pagnum = parseInt(pagnum);
var colecao = objparts[0];


//pega o indice 2 - pagina da esquerda 
var objesq = $scope.indice2;
//divide em pagina e diretorio
var objparts2 = objesq.split("_");
var pagnum2 = objparts2[1];
var pagnum2 = parseInt(pagnum2);
var colecao2 = objparts2[0];

//diferença entre as páginas
var diferenca = pagnum - pagnum2


//verifica o numero de paginas da revista
var paginasrevista = $filter('filter')($scope.arrobj, {
            collections: colecao
        });
var paginasrevista = $filter('array')(paginasrevista);

var numerodepaginas = paginasrevista.length;
//confere se impar

if (pagnum % 2 === 1) {
// se for dupla 
    if (colecao === colecao2 & diferenca === 1) {
        if (pagnum === 3) {
            nextpagnum = 1;
            nextpagnum2 = numerodepaginas;
            } else {
            nextpagnum2 = pagnum - 3;
            nextpagnum = pagnum - 2;
            }
            
            //alert('1')
            //se for a primeira dupla 
            

    } 
    //se nao for dupla
    else {

        //se for capa e contracapa 

        if (colecao === colecao2 & pagnum === 1 & pagnum2 === numerodepaginas) {
                nextpagnum = numerodepaginas - 1;
                nextpagnum2 = numerodepaginas - 2;
        } else {
        //se for impar reseta a dupla

    if (pagnum === 1) {
            nextpagnum = 1;
            nextpagnum2 = numerodepaginas;

    } else {
        if (pagnum % 2 === 1) {
            nextpagnum = pagnum;
            nextpagnum2 = pagnum - 1; 
        }

    }

    }

    }

    } else {
        nextpagnum = pagnum2 ;
        nextpagnum2 = pagnum2 - 1; 

}



//se for a primeira pagina

//se for capa/contracapa

//se for par
nextpagnum = $filter('numberFixedLen')(nextpagnum, 4); 
nextpagnum2 = $filter('numberFixedLen')(nextpagnum2, 4);

$scope.indice = colecao + "_" + nextpagnum;
$scope.indice2 = colecao + "_" + nextpagnum2;

$scope.updateadress();




//console.log(colecao2);
//console.log('pagnum' + pagnum);
//console.log(numerodepaginas);
//console.log(nextpagnum);
//console.log(nextpagnum2);
//console.log('');
}

//__________________________________________________





//__________________________________________________

$scope.duplavolta2 = function () {
//pega o indice - pagina da direita
var objdir = $scope.indice;
//divide em pagina e diretorio
var objparts = objdir.split("_");
var pagnum = objparts[1];
var pagnum = parseInt(pagnum);
var colecao = objparts[0];


//pega o indice 2 - pagina da esquerda 
var objesq = $scope.indice2;
//divide em pagina e diretorio
var objparts2 = objesq.split("_");
var pagnum2 = objparts2[1];
var pagnum2 = parseInt(pagnum2);
var colecao2 = objparts2[0];

//diferença entre as páginas
var diferenca = pagnum - pagnum2


//verifica o numero de paginas da revista
var paginasrevista = $filter('filter')($scope.arrobj, {
            collections: colecao2
        });
var paginasrevista = $filter('array')(paginasrevista);

var numerodepaginas = paginasrevista.length;

//confere se par
    if (pagnum2 % 2 === 0) {
    // se for dupla 
    if (colecao2 === colecao & diferenca === 1) {
    //se for a primeira dupla 
        if (pagnum2 === 2) {
            nextpagnum2 = numerodepaginas;
            nextpagnum = 1;
        } else {
         nextpagnum2 = pagnum2 - 2;
        nextpagnum = pagnum2 - 1;           
        }


        } 
//se nao for dupla
else {

//se for capa e contracapa 

if (colecao === colecao2 & pagnum === 1 & pagnum2 === numerodepaginas) {
    nextpagnum = numerodepaginas - 1;
    nextpagnum2 = numerodepaginas - 2;
} else {
    //se for par reseta a dupla
    if (pagnum2 % 2 === 0) {
        nextpagnum = pagnum2 + 1;
        nextpagnum2 = pagnum2; 
    }

}

}

} else {
nextpagnum = pagnum2 ;
nextpagnum2 = pagnum2 - 1; 

}



//se for a primeira pagina

//se for capa/contracapa

//se for par
nextpagnum = $filter('numberFixedLen')(nextpagnum, 4); 
nextpagnum2 = $filter('numberFixedLen')(nextpagnum2, 4);

$scope.indice = colecao2 + "_" + nextpagnum;
$scope.indice2 = colecao2 + "_" + nextpagnum2;

$scope.updateadress();




//console.log(colecao2);
//console.log('pagnum' + pagnum);
//console.log(numerodepaginas);
//console.log(nextpagnum);
//console.log(nextpagnum2);
//console.log('');
}




//__________________________________________________

$scope.duplavai = function () {
//pega o indice - pagina da direita
var objdir = $scope.indice;
//divide em pagina e diretorio
var objparts = objdir.split("_");
var pagnum = objparts[1];
var pagnum = parseInt(pagnum);
var colecao = objparts[0];


//pega o indice 2 - pagina da esquerda 
var objesq = $scope.indice2;
//divide em pagina e diretorio
var objparts2 = objesq.split("_");
var pagnum2 = objparts2[1];
var pagnum2 = parseInt(pagnum2);
var colecao2 = objparts2[0];

//diferença entre as páginas
var diferenca = pagnum - pagnum2


//verifica o numero de paginas da revista
var paginasrevista = $filter('filter')($scope.arrobj, {
            collections: colecao2
        });
var paginasrevista = $filter('array')(paginasrevista);

var numerodepaginas = paginasrevista.length;
//confere se par

if (pagnum2 % 2 === 0) {
// se for dupla 

controle = numerodepaginas - 2;

if (colecao2 === colecao & diferenca === 1) {
    //se for a ultima dupla
    if (pagnum2 === controle) {
        nextpagnum = 1;
        nextpagnum2 = numerodepaginas

    } else {
        nextpagnum2 = pagnum2 + 2;
        nextpagnum = pagnum2 + 3;
    }
} 
    //se nao for dupla
        else {

    //se for capa e contracapa 

if (colecao === colecao2 & pagnum === 1 & pagnum2 === numerodepaginas) {
    nextpagnum = 3;
    nextpagnum2 = 2;
} else {
    
    //

    //se for impar reseta a dupla

    if (pagnum2 % 2 === 1) {
        nextpagnum = pagnum2;
        nextpagnum2 = pagnum2 - 1; 
    } else {
        nextpagnum = 1;
        nextpagnum2 = 2;
    }

} 

}


} else {
nextpagnum = pagnum2;
nextpagnum2 = pagnum2 - 1; 
}



//se for a primeira pagina

//se for capa/contracapa

//se for par
nextpagnum = $filter('numberFixedLen')(nextpagnum, 4); 
nextpagnum2 = $filter('numberFixedLen')(nextpagnum2, 4);

$scope.indice = colecao2 + "_" + nextpagnum;
$scope.indice2 = colecao2 + "_" + nextpagnum2;

$scope.updateadress();




console.log(controle);
console.log('pagnum' + pagnum);
console.log(numerodepaginas);
console.log(paginasrevista);
console.log($scope.arrobj);
console.log(colecao2);
//alert(numerodepaginas);
//console.log(nextpagnum);
//console.log(nextpagnum2);
//console.log('');
}



//_________________________________________________

$scope.vai = function () {
//pega o indice - pagina da direita
var objdir = $scope.indice;
//divide em pagina e diretorio
var objparts = objdir.split("_");
var pagnum = objparts[1];
var pagnum = parseInt(pagnum);
var colecao = objparts[0];


//pega o indice 2 - pagina da esquerda 
var objesq = $scope.indice2;
//divide em pagina e diretorio
var objparts2 = objesq.split("_");
var pagnum2 = objparts2[1];
var pagnum2 = parseInt(pagnum2);
var colecao2 = objparts2[0];

//diferença entre as páginas
var diferenca = pagnum - pagnum2


//verifica o numero de paginas da revista
var paginasrevista = $filter('filter')($scope.arrobj, {
            collections: colecao2
        });
var paginasrevista = $filter('array')(paginasrevista);

var numerodepaginas = paginasrevista.length;

//confere se impar

if (pagnum % 2 === 1) {
// se for dupla 
if (colecao2 === colecao & diferenca === 1) {
        controle = numerodepaginas - 1;

        //se for a ultima dupla 
        if (pagnum === controle) {
            nextpagnum = 1;
            nextpagnum2 = pagnum + 1;
            //alert('2');
        } else {
         nextpagnum2 = pagnum + 1;
        nextpagnum = pagnum + 2;
        
        //alert('1');   
        }

} 
//se nao for dupla
else {

//se for capa e contracapa 

if (colecao === colecao2 & pagnum === 1 & pagnum2 === numerodepaginas) {
    nextpagnum = 3;
    nextpagnum2 = 2;
    //alert('3');
} else {
    //se for impar reseta a dupla
    if (pagnum2 % 2 === 1) {
        nextpagnum = pagnum + 1;
        nextpagnum2 = pagnum;
        //alert('4'); 
    } else {
        nextpagnum = pagnum;
        nextpagnum2 = pagnum - 1; 
    }

}

}


} else {
//se for par

nextpagnum = pagnum + 1;
nextpagnum2 = pagnum; 
colecao2 = colecao;
//alert('5');

}



//se for a primeira pagina

//se for capa/contracapa

//se for par
nextpagstr = $filter('numberFixedLen')(nextpagnum, 4); 
nextpagstr2 = $filter('numberFixedLen')(nextpagnum2, 4);

$scope.indice = colecao + "_" + nextpagstr;
$scope.indice2 = colecao + "_" + nextpagstr2;

$scope.updateadress();




//console.log(objdir);
//console.log('pagnum' + pagnum);
console.log(numerodepaginas);
//console.log('pimpar' + nextpagnum);
//console.log(nextpagnum2);
//console.log('');
}



//_________________________________________________



//__________________________________________________


    $scope.vai2 = function () {

        var positem = findinarray($scope.edicao, 'idno', $scope.indice);
        
        var positem2 = findinarray($scope.arrobj, 'idno', $scope.indice2);


        var tamanho = $scope.arrobj.length;

        var controle = tamanho - 1

        //se for o ultimo volta pro primeiro
        if (positem >= controle) {
            var nextitem = 0;
            var nextitem2 = tamanho - 2;
        } 
//se não for o ultimo
        else {
            //se for par
            if (positem % 2 === 0) {
                var nextitem = positem + 2;
                var nextitem2 = positem + 1;
            } 

            else {
                var nextitem = positem + 1;
                var nextitem2 = positem;
            }


        }


        $scope.indice = $scope.arrobj[nextitem].idno;
        $scope.indice2 = $scope.arrobj[nextitem2].idno;

        var parts2 = $scope.indice2.split("_");
        $scope.dir2 = parts2[0];
        var parts = $scope.indice.split("_");
        $scope.dir = parts[0];

        //console.log($scope.edicao.length);
        //console.log(tamanho);

        console.log(positem);
        //console.log(nextitem);
        //console.log(nextitem2);

        $scope.updateadress();

    }


$scope.volta = function () {
        //posicao do item impar

        var positem = findinarray($scope.edicao, 'idno', $scope.indice);
        var positem2 = findinarray($scope.arrobj, 'idno', $scope.indice2);

        //quantidade de items
        var tamanho = $scope.arrobj.length;


        var controle = tamanho - 1

        //se não for impar
        if (positem % 2 === 1) {
           var previtem2 = positem;
            var previtem = positem + 1 ;
        
        }else {
            
         var previtem = positem - 2;
            var previtem2 = positem - 3;
        }
        



        //if (positem2 <= 1) {

        //    var previtem = 0
        //    var previtem2 = tamanho - 1;
        //}

        //if (positem = 0) {
        //    var previtem = tamanho - 2;
        //    var previtem2 = tamanho - 3;

        //}
    

        $scope.indice = $scope.arrobj[previtem].idno;
        $scope.indice2 = $scope.arrobj[previtem2].idno;

        var parts2 = $scope.indice2.split("_");
        $scope.dir2 = parts2[0];
        var parts = $scope.indice.split("_");
        $scope.dir = parts[0];






        //console.log(tamanho);

        console.log($scope.edicao);
        //console.log(positem2);
        //console.log(previtem);
        //console.log(previtem2);

        $scope.updateadress();



}


    $scope.move2 = function () {
        var positem2 = findinarray($scope.arrobj, 'idno', $scope.indice2);
        var positem = findinarray($scope.arrobj, 'idno', $scope.indice);
        var tamanho = $scope.arrobj.length;

        
        if (positem2 % 2 === 0) {
           var previtem2 = positem2 - 1;
            var previtem = positem2 ;
        
        }else {
            
         var previtem = positem2 - 1;
            var previtem2 = positem2 - 2;
        }
        



        if (positem2 <= 1) {

            var previtem = 0
            var previtem2 = tamanho - 1;
        }

        if (positem = 0) {
            var previtem = tamanho - 2;
            var previtem2 = tamanho - 3;

        }
        
        
        

        if ($scope.arrobj[previtem2].idno) {
            $scope.indice2 = $scope.arrobj[previtem2].idno;
        } else {
            var previtem2 = previtem2 - 1;
            $scope.indice2 = $scope.arrobj[previtem2].idno;
        }

        $scope.indice = $scope.arrobj[previtem].idno;

        var parts2 = $scope.indice2.split("_");
        $scope.dir2 = parts2[0];
        var parts = $scope.indice.split("_");
        $scope.dir = parts[0];


        //console.log(tamanho);

        //console.log(positem2);
        //console.log(previtem);
        //console.log(previtem2);

        $scope.updateadress();


    }




    //    $scope.$watchGroup(['foo', 'bar'], function(newValues, oldValues, scope) {
    //  // newValues array contains the current values of the watch expressions
    //  // with the indexes matching those of the watchExpression array
    //  // i.e.
    //  // newValues[0] -> $scope.foo 
    //  // and 
    //  // newValues[1] -> $scope.bar 
    //});
    //    


    $scope.updateadress = function () {

        //var newhash = "&busca2=" + $scope.busca2 + "&busca=" + $scope.busca + "&indice2=" + $scope.indice2 + "&indice=" + $scope.indice + "&tipo2=" + $scope.tipo2 + "&tipo=" + $scope.tipo;
        var newhash = "&indice2=" + $scope.indice2 + "&indice=" + $scope.indice; 
        $location.path(newhash);
            //console.log($scope.arrobj);
            //alert($scope.arrobj);

    }



    //console.log($scope.edicao2);
    //end of controller
}]);









//pagina par
// move esquerda
// move proxima


//pagina impar
// move direita
// move proxima