'use strict';


function Model() {
    
}

Model.prototype.dataSet = "";

Model.prototype.loadJson = function (path, method) {  
    $.getJSON( path,
        function (data, textStatus, jqXHR) {            
        Model.prototype.dataSet=data;
        //console.log(Model.prototype.dataSet);
        method();                   
        }
      )  
}

Model.prototype.convertTotArray = function (i) {
    //console.log(Model.prototype.rawSentence);      
    var array =  Model.prototype.dataSet[i].oracion.split(" ");       
    return array; 
  }

Model.prototype.getImgName = function (i) { 
        return Model.prototype.dataSet[i].imagen;
 }

 Model.prototype.getTime = function (i) {
     return Model.prototype.dataSet[i].tiempo;
   }









