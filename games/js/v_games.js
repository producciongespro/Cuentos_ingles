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

View.prototype.image = function ( record, visor1, visor2 ) {
    console.log(record.id );
    $(visor1).empty();
    $(visor2).empty();
    $(visor1).html(record.opc1);
    $(visor2).html(record.opc2);
}


View.prototype.preloadImage = function (array) {
    //console.log(array);
    var limit = array.length, arrayImages = $("<div class='col-12' id='preloadedImages' ></div>");
     

    for (let index = 0; index <limit; index++) {
        console.log(array[index].opc1); 
       // $(arrayImages).append(array[index].opc1);
       let tmpImage = $(array[index].opc1);
       $(tmpImage).attr("id", "img"+index);

       $(arrayImages).append(tmpImage);
       
    }     
    $(".row-cont-images").append( arrayImages );    
}


