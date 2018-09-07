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
             

        if (page < maxPages-1   ) {
            switch (this.id) {
                case "btnAdelante":
                    page++;
                break;
                case "btnAtras":
                    page--;
                break;
            
                default:
                console.log("Selector fuera de rango");            
                break;
            }
            loadPage(page, resaltadoRecursivo);
            
        } else {
            window.alert('The End!');
            
        }
        
    })  
        

    
}


function loadPage(page, resaltadoRecursivo) {
    //console.log("página " + page);
    //inicializar el contador para que carge una nueva oración
    cont=-1;
            
    v.writePage(m.convertTotArray(page), $("#contImage"), $("#contSentence"), page );
    
    //Manejador de audio:
    // si el audio está cargado pausarlo para poder cambiar a otra pagina
    if (page != 0) {
        objAudio.pause();
    }
    //regarga el obj audio con el nuevo audio
    objAudio = document.getElementById("aud"+page);
    objAudio.play();
    arrayT = m.getTime(page);
    limit = arrayT.length;

    clearTimeout(resaltadoRecursivo);
    //resaltado
    highlight(); 
}


function highlight (resaltadoRecursivo) {
    console.log("INICIAL");
    
 
       
    if (cont < limit   ) { 
        //apaga el resaltado
        $(".span-word").removeClass("highlighted");       
        //console.log("apagado");

       console.log(arrayT[cont]);
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






