'use strict'; 


function View  () {
    
}

View.prototype.writePage = function (arraySentence, contImg, contSnt, idImg) {  
    var limit = arraySentence.length,    
    htmlImage = $("<img class='img-page' src='img/book1/pic" +idImg+".png'> "),
    htmlSentence = $("<div class='alert  alert-warning' role='alert'></div>");
    
     for (let index = 0; index < limit; index++) {
        //console.log(arraySentence[index]);                 
        var htmlword = $("<span class='span-word'></span>");
        $(htmlword).html(" " + arraySentence[index] + " ");
        $(htmlword).attr("id", "wrd" + index);
        $(htmlSentence).append(htmlword);
    }

    $(contSnt).html(htmlSentence);
   // $(contImg).html(htmlImage);

}

View.prototype.loadAudios = function (container, maxPages,  grade, story  ) {
    $(container).empty();

    for (let index = 0; index < maxPages; index++) {
        $(container).append("<audio id='aud"+ index +"' preload='auto' controls='false' src='./audio/"+ grade +"/"+ story +"/audio"+ index +".mp3' >");
        
    }   
    

  }

