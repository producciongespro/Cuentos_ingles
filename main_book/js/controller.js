'use strict'; 
const v = new View(), m = new Model();
var arrayT, cont, limit=0, objAudio, 
vistaPage, // página mostrada en pantalla
page = -1, //setea la pagina en -1 para cargar la pag 0
resaltadoRecursivo, // objeto que almacena higlith en settimeout
grado, // grado del cuento
unidad,
audioMuteHover=true,  // bandera que determina si debe mutear el audio. Se convierte en False cuando se termina la narración.
titulo;  //titulo


$(document).ready(function () {
    vistaPage=1;             
    obtenerInfoSesion();
    eCargarAudio();
    window.addEventListener("resize", function(){console.log('resize!')}, true);
    window.addEventListener("resize", cambiaGrid);
    cambiaGrid();
});
{/* <div class="row fila-imagen-texto" id="divContenedor">
  <div class="col-1" id="colPrimera" ></div>
  <div class="col-7 col-marco3" id="visorImage"   ></div>
    <div class="col-3 col-marco1"  id="contSentence" > </div>
     <div class="col-1" id="colUltima" ></div>
</div> */}

function cambiaGrid() {  
    console.log("en cambiaGrid");
    
    if (window.innerWidth < 700)
    {
        $("#divContenedor").removeClass("row");
        $("#divContenedor").addClass(" d-flex flex-column");
        $("#colPrimera").removeClass("col-1");
        $("#colPrimera").addClass("p-2");
        $("#visorImage").removeClass("col-6");
        $("#visorImage").addClass("p-2");
        $("#contSentence").removeClass("col-4");
        $("#contSentence").addClass("p-2");
        $("#colUltima").removeClass("col-1");
        $("#colUltima").addClass("p-2");
        
    }
    else
    {
        $("#divContenedor").addClass("row");
        $("#divContenedor").removeClass("d-flex flex-column");
        $("#colPrimera").addClass("col-1");
        $("#colPrimera").removeClass("p-2");
        $("#visorImage").addClass("col-6");
        $("#visorImage").removeClass("p-2");
        $("#contSentence").addClass("col-4");
        $("#contSentence").removeClass("p-2");
        $("#colUltima").addClass("col-1");
        $("#colUltima").removeClass("p-2");
    }
}


function obtenerInfoSesion() {
    grado = sessionStorage.getItem("grado");
    titulo = sessionStorage.getItem("titulo");
    unidad = sessionStorage.getItem("unidad");
    //carga el json
    loadModule( grado, titulo );  
}

function loadModule( grade, story ) {
    //reset de variable que muestra la pagina al usuario:
    
      
  
    m.loadJson("./data/"+grade+"/"+ story+".json",  function () { 
        //console.log("Data Loaded");
        var maxPages = m.getDataset().length;  
        v.preLoadAudios($("#contAudios"), maxPages, grade, story );
        //precarga de imágenes
        v.preLoadImages($("#contImages"),maxPages, grade, story );


        handlerEvents(maxPages);
        
        
               //titulo en encabezado
               let tmpTitulo = titulo.replace(/_/g, " " ),
               tmpPrimeraMayuscula = tmpTitulo.slice(0,1).toUpperCase(); 
               
               if (tmpTitulo=="may I help you") {
                tmpTitulo = tmpTitulo + "?";
            }

               $("#spnMaintitle").text("Unit " + unidad + ": " + tmpPrimeraMayuscula +  tmpTitulo.slice(1) );

        //Carga de la primera pagina:
        page++;

 

        viewIntro();


  
        
 
     });
}


function viewIntro() {
      //carga el método que dibuja la pagina y activa el resaltado  
    
    


      $("#btnReproducir").click(function (e) { 
        e.preventDefault();  
        $(".div-shadow").addClass("invisible");                  
        //carga el método que dibuja la pagina y activa el resaltado             
        loadPage(page, resaltadoRecursivo);            
    });
    
}



function handlerEvents(maxPages) {       
    

    $(".btn-load-page").click(function () { 

        //desactiva los botones mientras se reproduce el audio
        $(".btn-load-page").prop("disabled", true);
        $(".btn-load-page").css("cursor", "not-allowed");
        //console.log("Desactivado");

        //console.log(page);
        //Botona adelante: avanzar


        let idBtnActual = $(this).attr("id");

        if ( idBtnActual == "btnAdelante" ) {
            vistaPage++;
            //validación de limite superior
            if (page < maxPages - 1 ) {
                page++;
                //carga el método que dibuja la pagina y activa el resaltado
                loadPage(page, resaltadoRecursivo);
            }else {
                //Cuadno termina el cuento pAsa al "módulo final" donde se muestran las actividades, evaluación etc
                window.location.href = "../the_end/the_end.html";
            }
            
        }

        //Retroceso - botón atrás
        if (idBtnActual == "btnAtras") {
            //verificando limite inferior
            if (page > 0) {
                page--; 
                //carga el método que dibuja la pagina y activa el resaltado
                console.log(page);
                //Aumenta la página 
                vistaPage--;
                
                loadPage(page, resaltadoRecursivo);
            }
            if (page==0) {
                  //Solo carga el método que dibuja la pagina y activa el resaltado
                  loadPage(page, resaltadoRecursivo);
            }
            
        } 
        /** Fin evento de botones **/               
    })  
        
            $("#btnMini").click(function () { 
                 switch (parseInt(grado)) {
                    case 1:
                    window.location.assign("../navigation/first.html"); 
                    break;
                    case 2:
                    window.location.assign("../navigation/second.html"); 
                    break;
                    case 3:
                    window.location.assign("../navigation/third.html"); 
                    break;
                 
                    default:
                        console.log("Opción fuera de rango");                        
                    break;
                 }               
                
            });
      

            $("#btnReload").click(function () { 
                //Recarga la página
                loadPage(page, resaltadoRecursivo);
                
            });
    
}


function loadPage(page, resaltadoRecursivo ) {
    //console.log("página " + page);
    //inicializar el contador para que carge una nueva oración
    cont=-1;


         //Desactiva el botón:
         $("#btnReload").prop("disabled", true);        
         $("#btnReload").css("cursor", "not-allowed");

         //Desahbilita los botones de adelante - atrás
         $(".btn-load-page").prop("disabled", true);        
         $(".btn-load-page").css("cursor", "not-allowed");
   
    
    //Escribe la oración 
    v.writePage(m.convertTotArray(page), $("#visorImage"), $("#contSentence"), page, grado, titulo, vistaPage  );
    
    //Manejador de audio:
    // si el audio está cargado pausarlo para poder cambiar a otra pagina
    
    if (page > 0) {
        //se apusa el audio actual
        objAudio.load();
        objAudio.pause();
        //se limpia la variable
        objAudio = null;
        //console.log("pausa");        
    }
    

    //regarga el obj audio con el nuevo audio
    objAudio = document.getElementById("aud"+page);
    //console.log("id de aduio: " + objAudio.id);
    
  
    objAudio.play();
    // fin de manejador de audio

    //habilita la bandera mute para que no se pueda reproducir el hover hasta que termine la narración
    audioMuteHover=true;


    //Activa los botones cuando se lanza el evento end del audio (cundo termina el audio)
    objAudio.onended = function() {
        // *****************************
        //Botones de adelantar o atrasar página:
        $(".btn-load-page").prop("disabled", false);        
        $(".btn-load-page").css("cursor", "pointer");
        

        // *****************************
        //Botón de recargar página:

        $("#btnReload").prop("disabled", false);        
        $("#btnReload").css("cursor", "pointer");
        //console.log("ACtivado");
        

        // deshabilita el mute para que suene el audio al pasar el mouse sobre lso botones.
        audioMuteHover = false;
    };



    arrayT = m.getTime(page);
    limit = arrayT.length;

    //Limpia el objeto recursivo que contiene el método: highlight
    clearTimeout(resaltadoRecursivo);
   // console.log(resaltadoRecursivo);
    


    // método resaltado
    highlight();
    
    
    
}


function highlight (resaltadoRecursivo) {
    //console.log("INICIAL");    
 
       
    if (cont < limit   ) { 
        //apaga el resaltado
        $(".span-word").removeClass("highlighted");       
        //console.log("apagado");

        // console.log(arrayT[cont]);
        //console.log(cont);
        
        $("#wrd"+cont).addClass("highlighted");
       // console.log("resaltado");       
        
        //console.log("Esperando: " + arrayT[cont] + " seg"  + " Valor del indice: " + cont  );
        
        cont++;

        resaltadoRecursivo = setTimeout( function () {
            highlight();                     
          }, arrayT[cont]);      
        
        
    }
}


function eCargarAudio() { 
    
    var audMinibooks = $("#audMinibooks")[0];
            $("#btnMini").mouseenter(function () { 
                console.log("enter");
                if (!audioMuteHover) {
                    audMinibooks.pause();
                audMinibooks.currentTime=0;
                audMinibooks.play();   
                }
                     
            });    
    
    }