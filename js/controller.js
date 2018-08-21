'use strict'; 
const v = new View(), m = new Model();
var arrayT, cont=0, limit=0; 

$(document).ready(function () {
    //console.log("Ready");    
    loadModule( 1,"s1" );    
});

function loadModule( grade, story ) { 
   
    m.loadJson("./data/"+grade+"/"+ story+".json",  function () { 
        //console.log("Data Loaded");
        var maxPages = m.getDataset().length;  
        v.loadAudios($("#contAudios"), maxPages, grade, story   );
        handlerEvents(maxPages); 
     });
}




function handlerEvents(maxPages) {
    var page = -1;  
      
    $(".btn-load-page").click(function () { 
        console.log(page);
             

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
            loadPage(page);
            
        } else {
            window.alert('The End!');
            
        }
        
    })  
        

    
}


function loadPage(page) {
    //inicializar el contador para que carge una nueva oración
    cont=0;
    //console.log(page);
            
    v.writePage(m.convertTotArray(page), $("#contImage"), $("#contSentence"), page );
    var objAudio = document.getElementById("aud"+page);
    objAudio.play();
    arrayT = m.getTime(page);
    limit = arrayT.length;
    highlight(); 
}


function highlight () {
    //console.log("resaltado");     
    $(".span-word").removeClass("highlighted");    
    if (cont < limit) {        
        $("#wrd"+cont).addClass("highlighted");
        //console.log(arrayT[cont]);
        //console.log(cont);         
        setTimeout("highlight()", arrayT[cont]);      
        cont++;
    }
}






