'use strict';


function View() {

}


View.prototype.question = function ( record, visor ) {
  //console.log(record.pregunta );
  $(visor).empty();
  $(visor).text(record.pregunta);
 }

 View.prototype.NumberOfQuestion = function ( record, visor ) {
    //console.log(record.id );
    $(visor).empty();
    $(visor).text(record.id+"." );
}

View.prototype.image = function ( index, visor1, visor2 ) {
    
    $(visor1).empty();
    $(visor2).empty();
    $(visor1).html($("#imgA"+ index)  );
    $(visor2).html($("#imgB"+ index) );
}


View.prototype.preloadImage = function (array) {
    //console.log(array);
    var limit = array.length, arrayImages = $("<div class='col-12' id='preloadedImages' ></div>");
     

    for (let index = 0; index <limit; index++) {
        //console.log(array[index].opc1); 
       // $(arrayImages).append(array[index].opc1);
       
       //imagenes temporales 1 y 2
       let tmpImage1 = $(array[index].opc1),
       tmpImage2 = $(array[index].opc2);

       // Imagen de la opción 1        
       $(tmpImage1).attr("id", "imgA"+index);
       $(arrayImages).append(tmpImage1);
    
          // Imagen de la opción 2        
       $(tmpImage2).attr("id", "imgB"+index);
       $(arrayImages).append(tmpImage2);       
    }     
    $(".row-cont-images").append( arrayImages );    
}

View.prototype.preloadAudio = function (array, level, name ) {
    //console.log(array);
    var limit = array.length, arrayAudios = $("<div class='col-12' id='preloadedAuidos' ></div>"); 
    //Primero se inyecta el audio de la intro
    $(arrayAudios).append("<audio  id='audIntro' src='./audio/"+level+"/"+name+"/intro.mp3' preload > </audio> ");             

    for (let index = 0; index <limit; index++) {
        //console.log(array[index].id);       
       $(arrayAudios).append("<audio  id='aud"+ array[index].id +"' src='./audio/"+level+"/"+name+"/"+array[index].id+".mp3' preload > </audio> ");          
    }        
    $(".row-cont-audios").append( arrayAudios );    
}

View.prototype.setGrayScale = function (item) {
    $(item).removeClass("img-color");
    $(item).addClass("img-gray");
}

View.prototype.setColor = function (item) {
    $(item).removeClass("img-gray");    
    $(item).addClass("img-color");
}

View.prototype.modalStars = function (stars) {
    $("#spnNumbersOfStars").html(stars + "<img class='gif-star' src='./img/estrella.gif' alt='Animated Star'>"  );
}