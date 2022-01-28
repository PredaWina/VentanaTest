
function agrandar (x, ventanaID, contID){
    console.log("Hola");

    let ventana = document.getElementById(ventanaID);
    let arreglar = document.getElementById(contID);

    var alto_cont = arreglar.clientHeight;
    var alto = ventana.scrollHeight;
    var ancho = ventana.clientWidth;

    ventana.style.height = (alto + x) +"px";
    arreglar.style.height = (alto_cont + x) +"px";
    ventana.style.width = (ancho + (1.15 * x)) +"px";
}

function reducir (x, ventanaID, contID){
    let ventana = document.getElementById(ventanaID);
    let arreglar = document.getElementById(contID);

    var alto_cont = arreglar.clientHeight;
    var alto = ventana.scrollHeight;
    var ancho = ventana.clientWidth;

    

    if(alto_cont != 0){
        ventana.style.height = (alto - x) +"px";
        arreglar.style.height = (alto_cont - x) +"px";
        ventana.style.width = (ancho - (1.15 * x)) +"px";

    }
}

