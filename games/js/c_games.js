"use strict";

var m = new Model(), v = new View(), 
i=0; // indice que recorre el array de preguntas

$(document).ready(function () {
    loadMod();
    eventsStart();
});


function loadMod() {
    m.getJson("./data/1/all_about_me.json", function () {
        showItem(i);
    });
}



function showItem ( index) {
    v.NumberOfQuestion(m.getItem(index), "#vNumber" );
    v.question(m.getItem(index), "#vQuestion" );
    v.images(m.getItem(index), "#vImage1", "#vImage2" );
    
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