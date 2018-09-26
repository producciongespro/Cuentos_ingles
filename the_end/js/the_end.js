$(document).ready(function () {
    loadModule();
});


function loadModule() {
    loadDataSession();
    linkActivity();
  
}


function loadDataSession() {
    // Cargar la info para llamara al método que recarga el cuento.
    var 
    grado = sessionStorage.getItem("grado"),
    titulo = sessionStorage.getItem("titulo"),
    unidad = sessionStorage.getItem("unidad");

    console.log(grado);
    console.log(titulo);
    console.log(unidad);
    
    handlerEvents(grado, unidad, titulo);

}

function handlerEvents(grado, unidad, titulo) {
    //Establece link con parámetros para recargar el cuento
    //Patron: http://localhost/Cuentos_ingles/frontpage/index.php?grado=1&unidad=1&nombre=all_about_me
    
    
    //recarga el cuento
    $("#btnReloadTale").click(function () { 
        console.log("prueba");               
        window.location.assign("../frontpage/index.php?grado="+grado+"&unidad="+unidad+"&nombre="+titulo);
    });

    //caraga la página con el grado del cuento
    $("#btnGoToGrade").click(function () { 
        let tmpPath;
      switch (grado) {
        case "1":
            tmpPath =  "../navigation/first.html";
        break;
        case "2":
            tmpPath =  "../navigation/second.html";
        break;
        case "3":
            tmpPath =  "../navigation/third.html";
        break;      
        default:
            console.log("fuera de rango");          
        break;
      }
      window.location.assign(tmpPath);
    });

 
}




function linkActivity() {
    let grado = sessionStorage.getItem("grado"),
    titulo =  sessionStorage.getItem("titulo");
    $("#lnkActivity").attr("href", "../games/games.php?level=" + grado + "&taleTitle=" + titulo );
}


