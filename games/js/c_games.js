"use strict";

var m = new Model(), v = new View();

$(document).ready(function () {
    loadMod();
});


function loadMod() {
    m.getJson("./data/1/all_about_me.json", function () {
        showItem(0);
    });
}



function showItem ( index) {
    v.NumberOfQuestion(m.getItem(index), "#vNumber" );
    v.question(m.getItem(index), "#vQuestion" );  
    
}