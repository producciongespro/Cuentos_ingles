$(document).ready(function () {
    obtenerParametrosUrl();
    
});


function obtenerParametrosUrl() {

    let urlActual = window.location.href,
    parametro = urlActual.split("?")[1]; 

    // console.log(urlActual);
    // console.log(parametro);

    let grado = parametro.split("=")[1].slice(0,1);
    let nombre = parametro.split("=")[2];
    console.log(grado );
    console.log(nombre);
    cargarImagenPortada(grado, nombre );

    
    
    
    
}

function cargarImagenPortada(  grado, nombreCuento  ) {
    $("#imgPortada").attr("src", "./img/"+ grado + "/" + nombreCuento + ".jpg"   );
}