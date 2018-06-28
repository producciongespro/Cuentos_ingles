'use strict'; 
const v = new View(), m = new Model();
var arrayT, cont=0, limit=0;

$(document).ready(function () {
   m.loadJson("./data/cuento1.json", loadApp)
    
});


function loadApp() { 
    v.loadAudios($("#contAudios"));
    handlerEvents(); 
}

function handlerEvents() {
    var page = -1;  
      
    $(".btn-load-page").click(function () {      

        if (page < 1) {
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






