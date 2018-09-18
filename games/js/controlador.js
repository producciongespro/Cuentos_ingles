'use strict';
const v = new View(), m = new Model();

$(document).ready(function () {
  console.log("Total desde el controlador: "+total);
    $("#totales").html("<center><span id='estrellasTotal'>"+total+"★</span></center>");
    cargarPreguntas(nivel,titulo);

});


function cargarPreguntas( nivel, titulo, id,  op1, op2, correcta) {
      m.cargarJson("../games/data/"+nivel+"/"+ titulo+".json",  function () {
      console.log("Cargando preguntas...");
      var cual = 0;
      var nivel = "first";
      v.genera_tabla(Model.prototype.dataSet.length);
      lanzarPregunta(nivel,titulo,id, op1, op2, correcta, cual);
     });
}

function lanzarPregunta(nivel, titulo, id,op1, op2, correcta, cual) {
      var cuantas = Model.prototype.dataSet.length;
      $("#pregunta"+cual).attr("src","../games/img/star_activa.png")
      v.lanzarPregunta(nivel,titulo,Model.prototype.dataSet[cual].pregunta, Model.prototype.dataSet[cual].id,Model.prototype.dataSet[cual].opc1, Model.prototype.dataSet[cual].opc2,Model.prototype.dataSet[cual].correcta, cuantas);
      var respuestaCorrecta= Model.prototype.dataSet[cual].correcta;
      $("#left").hover(
                 function(){
                     $("#left").css({"background-color":"#cccccc"});
                 },
                 function(){
                     $("#left").css({"background-color":"aquamarine"});
                 });
     $("#right").hover(
                function(){
                    $("#right").css({"background-color":"#cccccc"});
                },
                function(){
                    $("#right").css({"background-color":"aquamarine"});
                });
      $("#left").click(function(){
          var respuestaElegida = 1;
          evaluarRespuesta(respuestaElegida, respuestaCorrecta, cual);
          cual++;
          siguientePregunta(nivel, titulo,id,op1, op2, correcta, cual);
                  });
      $("#right").click(function(){
          var respuestaElegida = 2;
          evaluarRespuesta(respuestaElegida, respuestaCorrecta, cual);
          cual++;
         siguientePregunta(nivel, titulo,id,op1, op2, correcta, cual);
        });
}

function siguientePregunta(nivel, titulo,id,op1, op2, correcta, cual) {
  console.log(cual);
  if (cual == Model.prototype.dataSet.length) {
      v.mostrarFinal();
  }
  else {
  $( "#trivia" ).empty();
    lanzarPregunta(nivel, titulo, id,op1, op2, correcta,cual);
}
}
function evaluarRespuesta(respuestaElegida, respuestaCorrecta, cual) {
  $("#pregunta"+cual).addClass("dedos");
  if (respuestaElegida == respuestaCorrecta ) {
        $("#pregunta"+cual).attr("src", "../games/img/star_color.png");
        total++;}
  else {
  $("#pregunta"+cual).attr("src", "../games/img/star_gray.png");
  }
}
