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
    <link rel="stylesheet" href="./css/games.css">

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
    
    <div class="row row-questions">
        <div class="col-2 col-numbers text-right" id="vNumber"></div>
        <div class="col-8 col-question" id="vQuestion"  ></div>
        <div class="col-2"></div>       
    </div>
    <br>
    <div class="row row-images">
        <div class="col-2"></div>    
        <div class="col-4" id="vImage1"></div>    
        <div class="col-4" id="vImage2"></div>    
        <div class="col-2"></div>   
    </div>
    <br>
    <div class="row row-footer">
        <div class="col-1"></div>   
            <div class="col-10 text-center" >
                <img class="img-stars" src="./img/star_gray.png" alt="estrella 1">
                <img class="img-stars" src="./img/star_gray.png" alt="estrella 2">
                <img class="img-stars" src="./img/star_gray.png" alt="estrella 3">
                <img class="img-stars" src="./img/star_gray.png" alt="estrella 4">
                <img class="img-stars" src="./img/star_gray.png" alt="estrella 5">
            </div>    
        <div class="col-1">
            <button class="btn btn-outline-success" id="btnForward"> <i class="fas fa-forward ico-bigger"></i>  </button>
        </div> 
    </div>





</div>
    
</body>
</html>