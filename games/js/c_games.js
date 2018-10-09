"use strict";

var m = new Model(), v = new View(), 
enabledBtn = false,
i=0; // indice que recorre el array de preguntas

$(document).ready(function () {
    //----TMP ----
    
   // sessionStorage.setItem("grado", "1");
   // sessionStorage.setItem("titulo", "this_is_my_neighborhood");
   // sessionStorage.setItem("unidad", "1");

    //-----------------------

    loadMod();
    eventsStart();
});


function loadMod() {  
    //carga el json de acuerdo a los datos de sessionstorage
    m.getJson("./data/"+m.gestSessionStorage().grado+"/"+m.gestSessionStorage().titulo+".json", function () {
        v.preloadImage(m.getDataSet());
        v.preloadAudio(m.getDataSet(), m.gestSessionStorage().grado, m.gestSessionStorage().titulo );
        playIntro();        
        showItem(i);
        v.setGrayScale(".col-opt-images");
    });
}


function playIntro() {
    var tmpAudio =  $("#audIntro")[0];
    tmpAudio.play();
    //Evento que se activa cuando se ha termina el audio de la intro
    tmpAudio.addEventListener('ended', function(){        
       playAudio(i);
       enabledBtn = true;
       v.setColor(".col-opt-images");
    });
    
}


function showItem ( index) {    
    v.NumberOfQuestion(m.getItem(index), "#vNumber" );
    v.question(m.getItem(index), "#vQuestion" );
    v.image(index, "#vImage1", "#vImage2" );    
}

function playAudio(index ) {
    // reproducción de audio mediante jquery utlizando método trigger
    index = index + 1;
    $("#aud"+index ).trigger("play");
}

function eventsStart() {   
   //Cargar la siguiente pregunta
    $("#btnForward").click(function (e) { 
        i++;
        if (i<4) {
            showItem(i);
            playAudio(i);

        }       
    });
    
    //Seleccionar opcion
    $(".col-opt-images").click(function () { 
        // si está habilitada se lanza la verifcicacion de respuesta
        if (enabledBtn) {
            let opt = $(this).attr("id").slice(6);
            //console.log(opt);
            //console.log(i);
            if (opt == m.getItem(i).correcta  ) {
                //TODO acciones que se dan si la tiene buena
                correctStar(i);
            } else {
                wrongStar(i);
            }  
        }

       
        
    });
}

function correctStar(index) {  
    console.log("correcta");
    index = index + 1;
    $("#imgStar"+index ).attr("src", "./img/star_color.png");   
}

function wrongStar(index) {
    console.log("equivocada");
    index = index + 1;
    $("#imgStar"+index ).attr("src", "./img/star_activa.png"); 
}
