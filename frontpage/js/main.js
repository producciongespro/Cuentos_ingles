$(document).ready(function () {
    obtenerParametrosUrl();
   
    
});


function obtenerParametrosUrl() {

  
    cargarImagenPortada(grado, nombre );
    reproducirAudio(grado, nombre);
    cargarTitulo(nombre);
    eCargarLibro(grado, nombre );

    
    
    
    
}

function cargarImagenPortada(  grado, nombreCuento  ) {
    $("#imgPortada").attr("src", "./img/"+ grado + "/" + nombreCuento + ".png"   );
}

function cargarTitulo(nombreCuento) {
    let tmpTitulo = nombreCuento.replace(/_/g, " " ),
    tmpPrimeraMayuscula = tmpTitulo.slice(0,1).toUpperCase();        
   $("#tituloNombreCuento").text(tmpPrimeraMayuscula +  tmpTitulo.slice(1) );
}


function reproducirAudio( grado, nombreCuento ) {
   var pathAudio =  "./audio/"+grado+"/"+nombreCuento+".mp3",
    audioNombre = document.getElementById("audioNombreCuento");
    
    audioNombre.src=pathAudio;
    audioNombre.play();
}

function eCargarLibro( grado, nombre ) {
    $("#btnCargarCuento").click(function (e) { 
        e.preventDefault();
      //almacena en variables de sesión el nombre y el grado:
        sessionStorage.setItem("grado", grado);
        sessionStorage.setItem("titulo", nombre);
        window.location.assign( "../main_book/index.html"  );        
    });
}