var pos_x, pos_y;

function inicializar(event){
    console.log("Incializar se ejecuta");
    pos_x = event.pageX;
    pos_y = event.pageY;
}

function nueva_pos(ventanaID){
    
    let ventana = document.getElementById(ventanaID);

    console.log("Mueve Pos se ejecuta");


    ventana.style.left = (pos_x - 150) + 'px';
    ventana.style.top = (pos_y - 150) + 'px';
}