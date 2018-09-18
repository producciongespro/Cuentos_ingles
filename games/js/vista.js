function View  () {

}
View.prototype.lanzarPregunta = function (nivel,titulo,pregunta,id, opcion1, opcion2, correcta, cuantas) {
  var htmlQuestion = $("<h1 id='titulo' class='span-word'></h1>");
  var htmlTitle= "<h3 id='numberOfQuestion'>Question # "+ id + "</h3>";
  var htmlOptions = ("<br><div class='row'><div class='col-sm-2'></div><div id='left' class='col-sm-3'></div><div class='col-sm-2'></div><div id='right' class='col-sm-3'></div><div class='col-sm-2'></div></div>");
  // var htmlNext = "<br><h1 id='siguiente' class='span-word'>N E X T</h1>"
  $(htmlQuestion).text(pregunta);
  $("#trivia").append(htmlTitle);
  $("#trivia").append(htmlQuestion);
  $("#trivia").append(htmlOptions);
  $("#left").append(opcion1);
  $("#right").append(opcion2);
  var tituloConEspacios = titulo.replace(/_/g, " ");
  var tituloMayuscula = tituloConEspacios.charAt(0).toUpperCase() + tituloConEspacios.slice(1);
  $("#tituloCuento").html("<center><h1 id='tituloDelCuento'>"+tituloMayuscula+"</h1></center>");
  // $("#trivia").append(htmlNext);
  console.log(correcta);
};

View.prototype.genera_tabla = function (cuantas) {
  console.log(cuantas);
$('#acertadas').append(  "<center><table id='aciertos'>" );
$('#aciertos').append( '<tr>');

  for(i=0;i<cuantas;i++){

     $('#aciertos').append( "<td class='celdasPreguntas'><center><img class='signoPregunta'  id='pregunta"+i+"' src='../games/img/star_gray.png'></center></td>" );

}
$('#aciertos').append( '</tr>');
$('#aciertos').append( '<tr>');
for(i=0;i<cuantas;i++){

   $('#aciertos').append( "<td class='celdasPreguntas'></td>" );

}
$('#aciertos').append( '</tr>');
$('#aciertos').append( '</tr>');
   $('#acertadas').append(  '</table></center>' );
};

View.prototype.mostrarFinal = function () {
  var audio = new Audio('../audio_effects/win.mp3');

  $("#trivia").html("<div id='mensajeFinal'></div>");
  $("#mensajeFinal").html("<br><center><p id='mensajeGanador'>You won: "+total+ " stars </p></center>");
  $("#trivia").append("<div id='siguiente'></div>");
  $("#siguiente").html("<br><a id='return' href='../'>Return</a>");
  $("#left").off('click');
  $("#right").off('click');
  $("#estrellasTotal").html(total+"★");
  $("#estrellasTotal").addClass("puntosActivos");
  audio.play();
};
