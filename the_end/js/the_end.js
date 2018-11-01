$(document).ready(function () {
    loadModule();
});


function loadModule() {
   
    loadDataSession();
  
}


function loadDataSession() {
    // Cargar la info para llamara al método que recarga el cuento.
    var 
    grado = sessionStorage.getItem("grado"),
    titulo = sessionStorage.getItem("titulo"),
    unidad = sessionStorage.getItem("unidad"); 

    handlerEvents(grado, unidad, titulo);
    //audioHoverButtons ()
}

function handlerEvents(grado, unidad, titulo) {
    //Establece link con parámetros para recargar el cuento
    //Patron: http://localhost/Cuentos_ingles/frontpage/index.php?grado=1&unidad=1&nombre=all_about_me
    
    
    //recarga el cuento
    // Se pasan los datos a través de parametros get ya que el sript de la plantilla  no deja utilizar sessión 
    $("#btnReloadTale").click(function () { 
       let urlCuento = "../frontpage/index.php?grado="+grado+"&unidad="+unidad+"&nombre="+titulo;             
        window.location.assign(urlCuento);
    });


    //Actividades del cuento
    //Toma los datos de session storage 
    $("#btnActivity").click(function () {         
        let urlActividad = "../games/games.html";
        window.location.assign(urlActividad);
    });

    //Los ejercicios en pdf
    $("#btnWorksheets").click(function () { 
        let urlPDF = "./worksheets/" + titulo + ".pdf" ;
        console.log(urlPDF);        
        window.open(urlPDF);        
    });



    //caraga la página con el grado del cuento
    $("#btnGoToGrade").click(function () { 
        let urlGrado;
      switch (grado) {
        case "1":
            urlGrado =  "../navigation/first.html";
        break;
        case "2":
            urlGrado =  "../navigation/second.html";
        break;
        case "3":
            urlGrado =  "../navigation/third.html";
        break;      
        default:
            console.log("fuera de rango");          
        break;
      }
      window.location.assign(urlGrado);
    });

    //Efecto de audios en evento hover de botones


 
}


function audioHoverButtons () {
    

  var audWorksheets = $("#audWorksheets")[0];

    $("body").click(function (e) { 
        e.preventDefault();
        audWorksheets.play();
    });

    $("#btnAudio").click(function (e) { 
        e.preventDefault();        
        audWorksheets.play();
    });

    $("#btnAudio").mouseenter(function (e) { 
        e.preventDefault();        
        audWorksheets.play();
    });


  $("#btnWorksheets").mouseenter(function() {
    audWorksheets.play();
  });

  



}


