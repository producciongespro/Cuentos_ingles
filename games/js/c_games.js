"use strict";

var m = new Model(), v = new View(), 
enabledBtn = false,
stars=0, //cantidad de estrellas ganadas
i=0; // indice que recorre el array de preguntas

$(document).ready(function () {
    //----TMP ----
    
    //sessionStorage.setItem("grado", "1");
    //sessionStorage.setItem("titulo", "this_is_my_neighborhood");
    //sessionStorage.setItem("unidad", "1");

    //-----------------------

    loadMod();
    eventsStart();
});


function reset() {
    //imágenes de ña estrellas
    for (let index = 1; index < 5; index++) {
        $("#imgStar"+index ).attr("src", "./img/star_gray.png");        
    }
    //limpieza de variables
    enabledBtn = false,
    stars=0, //cantidad de estrellas ganadas
    i=0;
}

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
           // enabledBtn = true;
           // v.setColor(".col-opt-images");
         });

    
}


function showItem ( index) { 
    console.log(index);
       
    v.NumberOfQuestion(m.getItem(index), "#vNumber" );
    v.question(m.getItem(index), "#vQuestion" );
    v.image(index, "#vImage1", "#vImage2" );
    if (index >=3 ) {
        $("#btnForward").css("display", "none");
    }    
}

function playAudio(index ) {
    // reproducción de audio mediante jquery utlizando método trigger
    index = index + 1;  
    
    $("#aud"+index ).trigger("play");
    var objAudio = $("#aud"+index)[0];

        //Evento que se activa cuando se ha termina el audio de la pregunta
        
        objAudio.addEventListener('ended', function(){        
           
            enabledBtn = true;
            v.setColor(".col-opt-images");
         });
         

}

function eventsStart() {   
   //Cargar la siguiente pregunta
    $("#btnForward").click(function (e) { 
        i++;
        if (i<4) {
            showItem(i);
            playAudio(i);
            //console.log(i); 
            
            //Deshaboilita los botones de imagenes
            enabledBtn = false;            
            v.setGrayScale(".col-opt-images");
            
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
            //console.log(i);
            // si el indice es igual a tres ya terminó las preguntas
            //Espera un tiempo y lanza un modal para mostrrle al usuario cuantas estrellas tiene 
            // y pregutnarle qué desea hacer
            
            if (i>=3) {
                //antes de mostrr el modal renderiza la cantidad de estrellas obtenidas
               v.modalStars(stars);
                setTimeout ( function () {
                    $("#mdlFinish").modal();
                  }, 3000 );  
            }                        
        };      
        
    });

    //Botones del modal  
    //Home:  
    $("#btnGoToGrade").click(function () { 
        var level = parseInt( m.gestSessionStorage().grado ), urlLevel  ;
        switch (level) {
            case 1:
            urlLevel = " ../navigation/first.html";
            break;
            case 2:
            urlLevel = " ../navigation/second.html";
            break;
            case 3:
            urlLevel = " ../navigation/third.html";
            break;           
    
            default:
            console.log("opción fuera de rango");
            break;
        }
        window.location.assign(urlLevel);
        
    });


    //recargar cuento
    $("#btnReloadTale").click(function (e) { 
        $("#mdlFinish").modal("hide");
        reset(); 
        loadMod();
                  
    });

  
}

function correctStar(index) {  
    console.log("correcta");
    $("#audGood").trigger("play");
    index = index + 1;
    $("#imgStar"+index ).attr("src", "./img/star_color.png");
    stars++;   
}

function wrongStar(index) {
    console.log("equivocada");
    $("#audWrong").trigger("play");
    index = index + 1;
    $("#imgStar"+index ).attr("src", "./img/star_activa.png"); 
}
