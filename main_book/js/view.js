'use strict'; 


function View  () {
    
}

View.prototype.writePage = function (arraySentence, contImg, contSnt, idImg, grado, titulo   ) {  
    var limit = arraySentence.length,      
    htmlImage = $("<img class='img-page  img-fluid'  src='img/" + grado + "/" + titulo  + "/pic" +idImg+".png'> "),
    //htmlSentence = $("<div class='alert  alert-warning' role='alert'></div>");
    htmlSentence = $("<div class='divOracion' ></div>");
    
     for (let index = 0; index < limit; index++) {
        //console.log(arraySentence[index]);                 
        var htmlword = $("<span class='span-word'></span>");
        $(htmlword).text(" " + arraySentence[index] + " ");
        $(htmlword).attr("id", "wrd" + index);
        $(htmlSentence).append(htmlword);
    }

    $(contSnt).html(htmlSentence);
    $(contImg).html(htmlImage);

}

View.prototype.preLoadAudios = function (container, maxPages,  grade, story  ) {
    //Se limpia el contenedor del DOM
    $(container).empty();
    //Se genera un contenedor temporal en memoria volátil
    var htmlStringAudios = $("<div></div>");

    for (let index = 0; index < maxPages; index++) {
        //Se crean los audios y se incrustan en el cont temporal
        $(htmlStringAudios).append("<audio id='aud"+ index +"' preload='auto' controls='false' src='./audio/"+ grade +"/"+ story +"/audio"+ index +".mp3' >");        
    }   
    //Se renderiza el contenedor con los audio en el html dentro del contendor de audios
    $(container).append(htmlStringAudios);

  }



View.prototype.preLoadImages = function (container, longArray, grado, titulo) {      
      var htmlStringImages = $("<div></div>");

      for (let index = 0; index < longArray; index++) {         
        $(htmlStringImages).append("<img id='imgTmp"+ index +"' src='img/" + grado + "/" + titulo  + "/pic" +index+".png'> ");
          
      }
      $(container).append(htmlStringImages);
}