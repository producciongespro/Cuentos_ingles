'use strict';


function Model() {
    this.rawSentence="nada";
}

Model.prototype.rawSentence = "";

Model.prototype.loadJson = function (path, method) {  
    $.getJSON( path,
        function (data, textStatus, jqXHR) {            
        Model.prototype.rawSentence = data[0].oracion1;
        console.log(Model.prototype.rawSentence);
        method(data);                   
        }
      )  
}

Model.prototype.createArray = function () {
    console.log(Model.prototype.rawSentence);      
    //var array =  this.rawSentence.split(" ");
    //return array; 
  }


Model.prototype.dropArray(array, i) = function () {  
    return array[i];
}







