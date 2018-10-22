'use strict'; 
const v = new View(), m = new Model();
var arrayT, cont, limit=0, objAudio, 
page = -1, //setea la pagina en -1 para cargar la pag 0
resaltadoRecursivo, // objeto que almacena higlith en settimeout
grado, // grado del cuento
unidad,
titulo;  //titulo


$(document).ready(function () {         
    obtenerInfoSesion();
});





function obtenerInfoSesion() {
    grado = sessionStorage.getItem("grado");
    titulo = sessionStorage.getItem("titulo");
    unidad = sessionStorage.getItem("unidad");
    //carga el json
    loadModule( grado, titulo );  
}

function loadModule( grade, story ) {
    //asigna el estilo  a los botones:
    $(".btn-load-page").css("cursor", "not-allowed");
  
    m.loadJson("./data/"+grade+"/"+ story+".json",  function () { 
        //console.log("Data Loaded");
        var maxPages = m.getDataset().length;  
        v.preLoadAudios($("#contAudios"), maxPages, grade, story );
        //precarga de imágenes
        v.preLoadImages($("#contImages"),maxPages, grade, story );


        handlerEvents(maxPages); 

        //Carga de la primera pagina:
        page++;
        //carga el método que dibuja la pagina y activa el resaltado     
        loadPage(page, resaltadoRecursivo);
     });
}


function eTerminarReproduccionAudio() {
    var aud = document.getElementById("myAudio");
    aud.onended = function() {
        alert("The audio has ended");
    };
}




function handlerEvents(maxPages) {       
    

    $(".btn-load-page").click(function () { 

        //desactiva los botones mientras se reproduce el audio
        $(".btn-load-page").prop("disabled", true);
        $(".btn-load-page").css("cursor", "not-allowed");
        //console.log("Desactivado");

        //console.log(page);
        //Botona adelante: avanzar


        let idBtnActual = $(this).attr("id");

        if ( idBtnActual == "btnAdelante" ) {
            //validación de limite superior
            if (page < maxPages - 1 ) {
                page++;
                //carga el método que dibuja la pagina y activa el resaltado
                loadPage(page, resaltadoRecursivo);
            }else {
                //Cuadno termina el cuento pAsa al "módulo final" donde se muestran las actividades, evaluación etc
                window.location.href = "../the_end/the_end.html";
            }
            
        }

        //Retroceso - botón atrás
        if (idBtnActual == "btnAtras") {
            //verificando limite inferior
            if (page > 0) {
                page--; 
                //carga el método que dibuja la pagina y activa el resaltado
                loadPage(page, resaltadoRecursivo);
            }
            if (page==0) {
                  //Solo carga el método que dibuja la pagina y activa el resaltado
                  loadPage(page, resaltadoRecursivo);
            }
            
        } 
        /** Fin evento de botones **/               
    })  
        
            $("#btnMini").click(function () { 
                 switch (parseInt(grado)) {
                    case 1:
                    window.location.assign("../navigation/first.html"); 
                    break;
                    case 2:
                    window.location.assign("../navigation/second.html"); 
                    break;
                    case 1:
                    window.location.assign("../navigation/third.html"); 
                    break;
                 
                    default:
                        console.log("Opción fuera de rango");                        
                    break;
                 }               
                
            });

            $("#btnReload").click(function () { 
               
                window.location.assign("../frontpage/index.php?grado="+grado+"&unidad="+unidad+"&nombre="+titulo+"" ); 
                
            });
    
}


function loadPage(page, resaltadoRecursivo ) {
    //console.log("página " + page);
    //inicializar el contador para que carge una nueva oración
    cont=-1;
    
    //Escribe la oración 
    v.writePage(m.convertTotArray(page), $("#visorImage"), $("#contSentence"), page, grado, titulo  );
    
    //Manejador de audio:
    // si el audio está cargado pausarlo para poder cambiar a otra pagina
    
    if (page > 0) {
        //se apusa el audio actual
        objAudio.load();
        objAudio.pause();
        //se limpia la variable
        objAudio = null;
        //console.log("pausa");        
    }
    

    //regarga el obj audio con el nuevo audio
    objAudio = document.getElementById("aud"+page);
    //console.log("id de aduio: " + objAudio.id);
    
  
    objAudio.play();
    // fin de manejador de audio


    //Activa los botones cuando se lanza el evento end del audio (cundo termina el audio)
    objAudio.onended = function() {
        $(".btn-load-page").prop("disabled", false);
        
        $(".btn-load-page").css("cursor", "pointer");
        //console.log("ACtivado");
    };



    arrayT = m.getTime(page);
    limit = arrayT.length;

    //Limpia el objeto recursivo que contiene el método: highlight
    clearTimeout(resaltadoRecursivo);
   // console.log(resaltadoRecursivo);
    


    // método resaltado
    highlight();
    
    
    
}


function highlight (resaltadoRecursivo) {
    //console.log("INICIAL");    
 
       
    if (cont < limit   ) { 
        //apaga el resaltado
        $(".span-word").removeClass("highlighted");       
        //console.log("apagado");

        // console.log(arrayT[cont]);
        //console.log(cont);
        
        $("#wrd"+cont).addClass("highlighted");
       // console.log("resaltado");       
        
        //console.log("Esperando: " + arrayT[cont] + " seg"  + " Valor del indice: " + cont  );
        
        cont++;

        resaltadoRecursivo = setTimeout( function () {
            highlight();                     
          }, arrayT[cont]);      
        
        
    }
}






