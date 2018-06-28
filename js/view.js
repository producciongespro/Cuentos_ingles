'use strict'; 


function View  () {
    
}

View.prototype.writePage = function (arraySentence, contImg, contSnt, nameImg) {  
    var limit = arraySentence.length,    
    htmlImage = $("<img class='img-page' src='img/book1/" +nameImg+".png'> "),
    htmlSentence = $("<div class='alert  alert-warning' role='alert'></div>");
    
     for (let index = 0; index < limit; index++) {
        //console.log(arraySentence[index]);                 
        var htmlword = $("<span class='span-word'></span>");
        $(htmlword).text(" " + arraySentence[index]);
        $(htmlword).attr("id", "wrd" + index);
        $(htmlSentence).append(htmlword);
    }

    $(contSnt).html(htmlSentence);
    $(contImg).html(htmlImage);

}

View.prototype.loadAudios = function (cont) {
    $(cont).empty();
    $(cont).append("<audio id='audio0' preload='auto' controls='false' src='./audio/book1/audio0.mp3' >");
    $(cont).append("<audio id='audio1' preload='auto' controls='false' src='./audio/book1/audio1.mp3' >");

  }

