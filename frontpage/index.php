<?php
   $grado =  $_GET["grado"];
   $unidad = $_GET["unidad"];
   $nombre = $_GET["nombre"];
?>

<script type="text/javascript">
    var grado = '<?php echo $grado;?>'
    var unidad = '<?php echo $unidad;?>'
    var nombre = '<?php echo $nombre;?>'
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- Esta es la referencia para fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

     <!-- esta es la referencia para el cambio de letra -->
     <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">

    <link rel="stylesheet" href="./vendor/bootstrap-4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="css/master.css">

    <script src="./vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="./vendor/bootstrap-4.1/js/bootstrap.min.js"></script>

    <script src="./js/main.js"></script>


</head>
<body>

<div class="row fila-encabezado">
  <div class="col-12" > </div>
</div>
<br>
<br>
<br>
<br>
<br>

<div class="row fila-imagen">
<div class="col-1" > </div>
  <div class="col-1 col-marco3" ></div>
  <div class="col-8 col-marco1" >
      <img  id="imgPortada"  src="" alt="Imagen de portada" class="img-fluid">
  </div>
  <div class="col-1 col-marco2" > </div>
<div class="col-1" > </div>
</div>


<br>
<div class="row footer1">
  <div class="col-2"></div>
        <div class="col-2">
        <a id="lnkGrado"  href="" class="btn btn-3d btn-3d-cyan" title="Minibooks">
        <i class="fas fa-grip-horizontal"></i>
        </a>
      </div>

        <div class="col-4 text-center">
          <h1 id="tituloNombreCuento"></h1>
        </div>

        <div class="col-2">
          <button type="button"  id="btnCargarCuento"  class="btn btn-3d btn-3d-blue" title="Forward">
            <i class="fas fa-forward"></i>
          </button>
        </div>
  <div class="col-2">    </div>
</div>


<div class="row footer2">
<div class="col-12" ><h3  id="tituloUnidad" >unidad</h3> </div>

</div>

<div class="row">
  <audio  id="audioNombreCuento" src=""></audio>
</div>





</body>
</html>
