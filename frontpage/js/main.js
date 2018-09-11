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

    //Ubna vez que carga parámetros activa los demáms métodos
    cargarImagenPortada(grado, nombre );
    cargarTitulo(nombre);
    eCargarLibro(grado, nombre  );

    
    
    
    
}

function cargarImagenPortada(  grado, nombreCuento  ) {
    $("#imgPortada").attr("src", "./img/"+ grado + "/" + nombreCuento + ".jpg"   );
}

function cargarTitulo(nombreCuento) {
    let tmpTitulo = nombreCuento.replace(/_/g, " " ),
    tmpPrimeraMayuscula = tmpTitulo.slice(0,1).toUpperCase();        
   $("#tituloNombreCuento").text(tmpPrimeraMayuscula +  tmpTitulo.slice(1) );
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