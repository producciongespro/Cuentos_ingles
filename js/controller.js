'use strict'; 
const v = new View(), m = new Model();
var w, arrayT, cont=0, limit=0;

$(document).ready(function () {
   m.loadJson("./data/cuento1.json", loadApp)
    
});


function loadApp() { 
    v.loadAudios($("#contAudios"));
    loadPage(0);
}



function loadPage(page) {
    v.writePage(m.convertTotArray(page), $("#contImage"), $("#contSentence"), m.getImgName(page) );
    document.getElementById("audio"+page).play();
    arrayT = m.getTime(0);
    limit = arrayT.length;
    highlight();   
}


function highlight () { 
    $(".span-word").removeClass("highlighted");    
    if (cont < limit) {
        console.log(arrayT[cont]); 
        $("#wrd"+cont).addClass("highlighted");
        setTimeout("highlight()", arrayT[cont]);      
        cont++;
    }
}






function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("./js/worker.js");
        }
        w.onmessage = function(event) {
           console.log(event.data);           
        };
    } else {
        console.log("no soportado");
        
    }
}


