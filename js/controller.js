'use strict'; 
const v = new View(), m = new Model();

$(document).ready(function () {
    m.loadJson("./data/cuento1.json", loadApp)
    
});


function loadApp(array) {
    v.test1(array);
    m.createArray();
        
}