'use strict';


function Model() {
    
}

Model.prototype.dataSet = "";

Model.prototype.loadJson = function (pathJson, mCallBack) {
 // console.log("get json");
    $.getJSON(pathJson,
        function (data, textStatus, jqXHR) {

            Model.prototype.dataSet=data;
           // console.log( Model.prototype.dataSet);
            mCallBack( );
            
        }
    );
 }

Model.prototype.convertTotArray = function (i) {
    //console.log(Model.prototype.rawSentence);      
    var array =  Model.prototype.dataSet[i].oracion.split(" ");       
    return array; 
  }

Model.prototype.getDataset = function () { 
        return Model.prototype.dataSet;
 }

 Model.prototype.getTime = function (i) {
     return Model.prototype.dataSet[i].tiempo;
   }









