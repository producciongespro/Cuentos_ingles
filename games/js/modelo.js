'use strict';


function Model() {

}

Model.prototype.dataSet = "";
Model.prototype.cargarJson = function (pathJson, mCallBack) {
  console.log(pathJson);
    $.getJSON(pathJson,
        function (data) {
        Model.prototype.dataSet=data;
        console.log(Model.prototype.dataSet);
            mCallBack( );
        }
    );
 }
