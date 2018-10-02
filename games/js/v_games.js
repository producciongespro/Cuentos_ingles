'use strict';


function View() {

}


View.prototype.question = function ( record, visor ) {
  console.log(record.pregunta );
  $(visor).empty();
  $(visor).text(record.pregunta);
 }

 View.prototype.NumberOfQuestion = function ( record, visor ) {
    console.log(record.id );
    $(visor).empty();
    $(visor).text(record.id);
}

View.prototype.images = function ( record, visor1, visor2 ) {
    console.log(record.id );
    $(visor1).empty();
    $(visor2).empty();
    $(visor1).html(record.opc1);
    $(visor2).html(record.opc2);
}



