"use4 strict";

$(document).ready(function () {
    loadModule();
});


function loadModule() {
       loadDataSession();  
}


function loadDataSession() {
    // Cargar la info para llamara al método que recarga el cuento.
   
    grado = sessionStorage.getItem("grado"),
    titulo = sessionStorage.getItem("titulo"),
    unidad = sessionStorage.getItem("unidad");

    var pathImg = "./img/end"+grado+".png";
    console.log(pathImg);
    
    $("#imgTheEnd").attr("src", pathImg); 
    playAudioIntro();
    handlerEvents(grado, unidad, titulo);
    audioHoverButtons ()
}


function playAudioIntro() {
    $("#audTheEnd").trigger("play");
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

    


 
}

//Efecto de audios en evento hover de botones
function audioHoverButtons () {

    var audMinibooks = $("#audMinibooks")[0],
    audWorksheets = $("#audWorksheets")[0],
    audActivity = $("#audActivity")[0];

        $("#btnGoToGrade").mouseenter(function () { 
            console.log("enter");
            audMinibooks.pause();
            audMinibooks.currentTime=0;
            audMinibooks.play();        
        });
        
   
        $("#btnWorksheets").mouseenter(function () { 
            console.log("enter");
            audWorksheets.pause();
            audWorksheets.currentTime=0;
            audWorksheets.play();        
        });
        
        $("#btnActivity").mouseenter(function () { 
            console.log("enter");
            audActivity.pause();
            audActivity.currentTime=0;
            audActivity.play();        
        }); 



}


