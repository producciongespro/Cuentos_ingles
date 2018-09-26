$(document).ready(function () {
    obtenerParametrosUrl();
   
    
});


function obtenerParametrosUrl() {  
    cargarImagenPortada(grado, nombre );
    establecerVinculo(grado);
    reproducirAudio(grado, nombre);
    cargarTitulo(nombre, unidad );
    eCargarLibro(grado, unidad, nombre );     
}

function establecerVinculo(grado) {
    let pathGrado;
    switch (grado) {
        case "1":
        pathGrado = "../navigation/first.html";
        break;
        case "2":
        pathGrado = "../navigation/second.html";
        break;
        case "3":
        pathGrado = "../navigation/third.html";
        break;
    
        default:
        console.log("Selección fuera de rango");        
        break;
    }
    $("#lnkGrado").attr("href", pathGrado);
    
}

function cargarImagenPortada(  grado, nombreCuento  ) {
    $("#imgPortada").attr("src", "./img/"+ grado + "/" + nombreCuento + ".png"   );
}

function cargarTitulo(nombreCuento, unidad ) {
    let tmpTitulo = nombreCuento.replace(/_/g, " " ),
    tmpPrimeraMayuscula = tmpTitulo.slice(0,1).toUpperCase();        
   $("#tituloNombreCuento").text(tmpPrimeraMayuscula +  tmpTitulo.slice(1) );
   $("#tituloUnidad").text( "Unit " +  unidad);
}


function reproducirAudio( grado, nombreCuento ) {
   var pathAudio =  "./audio/"+grado+"/"+nombreCuento+".mp3",
    audioNombre = document.getElementById("audioNombreCuento");
    
    audioNombre.src=pathAudio;
    audioNombre.play();
}

function eCargarLibro( grado,unidad, nombre ) {
    $("#btnCargarCuento").click(function (e) { 
        e.preventDefault();
      //almacena en variables de sesión el nombre y el grado:
        sessionStorage.setItem("grado", grado);
        sessionStorage.setItem("titulo", nombre);
        sessionStorage.setItem("unidad", unidad);
        window.location.assign( "../main_book/index.html"  );        
    });
}