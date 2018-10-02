'use strict';


function Model() {

}

Model.prototype.dataSet;

Model.prototype.getJson = function (pathJson, mCallBack) {
  console.log(pathJson);
    $.getJSON(pathJson,
        function (data) {        
        Model.prototype.dataSet = data;
        mCallBack();
        }
    );
 }


 Model.prototype.getItem = function ( index ) {
  return Model.prototype.dataSet[index];
}