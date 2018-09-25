$(document).ready(function () {
    loadModule();
});


function loadModule() {
    linkActivity();
  
}


function loadDataSession() {
    //TODO: cargar la info para llamara al método que recarga el cuento.
}

function eReload(params) {
    //TODO: establece link con parámetros para recargar el cuento
    //Patron: http://localhost/Cuentos_ingles/frontpage/index.php?grado=1&unidad=1&nombre=all_about_me
}




function linkActivity() {
    let grado = sessionStorage.getItem("grado"),
    titulo =  sessionStorage.getItem("titulo");
    $("#lnkActivity").attr("href", "../games/games.php?level=" + grado + "&taleTitle=" + titulo );
}


