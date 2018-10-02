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


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Activity</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">     
    <link href="https://fonts.googleapis.com/css?family=Gamja+Flower" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli:700i" rel="stylesheet">
    <link rel="stylesheet" href="../main_book/vendor/bootstrap-4.1/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="../navigation/css/bootstrap.css">

    <script src="../main_book/vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../main_book/vendor/bootstrap-4.1/js/bootstrap.min.js"></script>

    <script src="./js/m_games.js"></script>
    <script src="./js/v_games.js"></script>
    <script src="./js/c_games.js"></script>

</head>
<body>

<div class="jumbotron">
    <h1>Activity</h1>
</div>

<div class="container">
    <div class="row">
        <div class="col-2 text-right" id="vNumber"></div>
        <div class="col-8" id="vQuestion"  >
        <div class="col-2"></div>        
    </div>
    </div>
</div>
    
</body>
</html>