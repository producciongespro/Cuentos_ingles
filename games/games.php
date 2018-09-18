<?php
   $totalEstrellas = 0;
   $nivel = $_GET["level"];
   $tituloCuento = $_GET["taleTitle"];
?>

<script type="text/javascript">
    var nivel = '<?php echo $nivel;?>'
    var titulo = '<?php echo $tituloCuento;?>'
    var total = '<?php echo $totalEstrellas;?>'
    // console.log("Nivel:" +nivel);
</script>
?>

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Trivia</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
     <!-- esta es la referencia para el cambio de letra -->
     <link href="https://fonts.googleapis.com/css?family=Gamja+Flower" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli:700i" rel="stylesheet">
    <link rel="stylesheet" href="../main_book/vendor/bootstrap-4.1/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="../navigation/css/animate.css">
    Icomoon Icon Fonts
    <link rel="stylesheet" href="../navigation/css/icomoon.css"> -->
    <!-- Bootstrap  -->
    <link rel="stylesheet" href="../navigation/css/bootstrap.css">
    <!-- Theme style  -->
    <link rel="stylesheet" href="../navigation/css/style.css">
    <script src="../main_book/vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../main_book/vendor/bootstrap-4.1/js/bootstrap.min.js"></script>
    <script src="js/modelo.js"></script>
    <script src="js/vista.js"></script>
    <script src="js/controlador.js"></script>
  </head>
  <body>
  <div id="page2">
  	<nav class="fh5co-nav" role="navigation">
  		<div class="container">
  			<div class="fh5co-top-logo">
  				<div id="fh5co-logo"><a href="../index.html">HOME</a></div>
  			</div>
  			<div class="fh5co-top-menu menu-1 text-center">
  				<ul>
  					<li><a href="../navigation/first.html">First Grade</a></li>
  					<li><a href="../navigation/second_grade.html">Second Grade</a></li>
  					<li><a href="../navigation/third_grade.html">Third Grade</a></li>
  					<li><a href="../navigation/contact.html">Contact</a></li>
  				</ul>
  			</div>
        <div id="totales">

        </div>
  		</div>
  	</nav>
      <div class="row fila-titulo">
          <div class="col-4" > </div>
          <div id="tituloCuento" class="col-4" > </div>
          <div class="col-4" > </div>
      </div>
    <div class="row fila-imagen">
    <div class="col-1" > </div>
      <div class="col-1 col-marco3" ></div>
      <div class="col-8 col-marco1" id="trivia" style="height:300px">

      </div>
    <div class="col-1 col-marco3"></div>
    </div>
  </div>

  <div class="row fila-imagen">
  <!-- <div class="col-1 col-marco3"></div> -->
  <div class="col-12 col-marco4" id="acertadas" style="height:130px">

  </div>
<!-- <div class="col-1 col-marco3" > </div>
<div class="col-1" > </div> -->
</div>
  </body>
</html>
