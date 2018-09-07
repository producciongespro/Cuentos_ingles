'use strict'; 
const v = new View(), m = new Model();
var arrayT, cont, limit=0, objAudio; 

$(document).ready(function () {
    //console.log("Ready");    
    loadModule( 1,"s1" );    
});

function loadModule( grade, story ) {
    //reset variables
    
    
   
    m.loadJson("./data/"+grade+"/"+ story+".json",  function () { 
        //console.log("Data Loaded");
        var maxPages = m.getDataset().length;  
        v.loadAudios($("#contAudios"), maxPages, grade, story   );
        handlerEvents(maxPages); 
     });
}




function handlerEvents(maxPages) {    
    //inicailizar page
    var page = -1,
    resaltadoRecursivo // objeto que almacena higlith en settimeout
    

    $(".btn-load-page").click(function () { 
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
                alert ("the End");
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
        

    
}


function loadPage(page, resaltadoRecursivo) {
    console.log("página " + page);
    //inicializar el contador para que carge una nueva oración
    cont=-1;
    
    //Escribe la oración 
    v.writePage(m.convertTotArray(page), $("#contImage"), $("#contSentence"), page );
    
    //Manejador de audio:
    // si el audio está cargado pausarlo para poder cambiar a otra pagina
    
    if (page > 0) {
        //se apusa el audio actual
        objAudio.load();
        objAudio.pause();
        //se limpia la variable
        objAudio = null;
        console.log("pausa");

        
    }
    

    //regarga el obj audio con el nuevo audio
    objAudio = document.getElementById("aud"+page);
    console.log("id de aduio: " + objAudio.id);
    
  
    objAudio.play();
    // fin de manejador de audio


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






