
function agrandar (x){
    console.log("Hola");

    let ventana = document.getElementById("ventana");
    let arreglar = document.getElementById("arreglar");

    var alto_cont = arreglar.clientHeight;
    var alto = ventana.scrollHeight;
    var ancho = ventana.clientWidth;

    ventana.style.height = (alto + x) +"px";
    arreglar.style.height = (alto_cont + x) +"px";
    ventana.style.width = (ancho + (1.15 * x)) +"px";
}

function reducir (x){
    let ventana = document.getElementById("ventana");
    let arreglar = document.getElementById("arreglar");

    var alto_cont = arreglar.clientHeight;
    var alto = ventana.scrollHeight;
    var ancho = ventana.clientWidth;

    ventana.style.height = (alto - x) +"px";
    arreglar.style.height = (alto_cont - x) +"px";
    ventana.style.width = (ancho - (1.15 * x)) +"px";
}

