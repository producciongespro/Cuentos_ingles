"use strict";

var m = new Model(), v = new View(), 
i=0; // indice que recorre el array de preguntas

$(document).ready(function () {
    //----TMP ----
    
    sessionStorage.setItem("grado", "1");
    sessionStorage.setItem("titulo", "all_about_me");
    sessionStorage.setItem("unidad", "1");

    //-----------------------

    loadMod();
    eventsStart();
});


function loadMod() {  
    //carga el json de acuerdo a los datos de sessionstorage
    m.getJson("./data/"+m.gestSessionStorage().grado+"/"+m.gestSessionStorage().titulo+".json", function () {
        v.preloadImage(m.getDataSet() );
        showItem(i);
    });
}



function showItem ( index) {
    
    v.NumberOfQuestion(m.getItem(index), "#vNumber" );
    v.question(m.getItem(index), "#vQuestion" );
    v.image(m.getItem(index), "#vImage1", "#vImage2" );
    
}

function eventsStart() {
   
   //Cargar la siguiente pregunta
    $("#btnForward").click(function (e) { 
        i++;
        if (i<4) {
            showItem(i); 
        }       
    });

    
}