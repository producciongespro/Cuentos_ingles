$(document).ready(function () {
    console.log("ready");
    
    linksBotones() ;
});


function linksBotones() {
    console.log("evento");
    
    $(".col-opcion-cuento").click(function (e) { 
        e.preventDefault();
        console.log("clic");

        
        let cuentoEscogido = $(this).attr("target");
        console.log(cuentoEscogido);
        
        
    });
}


