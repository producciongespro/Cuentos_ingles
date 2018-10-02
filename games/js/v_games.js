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



