$(document).ready(function () {
    loadModule();
});


function loadModule() {
    linkActivity();
  
}


function linkActivity() {
    let grado = sessionStorage.getItem("grado"),
    titulo =  sessionStorage.getItem("titulo");
    $("#lnkActivity").attr("href", "../games/games.php?level=" + grado + "&taleTitle=" + titulo );
}


