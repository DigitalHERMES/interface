<?php

$p = $_GET['p'];

if ( $p == 1 ) {
    $data = [ 'pagina' => '1', 'teste' => TRUE, 'texto' => "pagina 1" ];
}
else if ( $p == 2 ) {
    $data = [ 'pagina' => '2', 'teste' => TRUE, 'texto' => "pagina 2" ];
}
else  {
    $data = [ 'pagina' => 'outra', 'numero' => -1 ];
}

/*
switch ($p)
  case 1 {
      
  }
default {

}
*/

header('Content-type: application/json');
echo json_encode( $data );



?>
