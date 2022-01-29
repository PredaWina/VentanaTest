var pos_x = 10;
var pos_y = 10;

function nueva_pos(ventanaID){
    

    let ventana = document.getElementById(ventanaID);

    console.log("Mueve Pos se ejecuta " + pos_x + " || " + pos_y);

    ventana.style.left = pos_x + 'px';
    ventana.style.top = pos_y + 'px';

    pos_x += 20;
    pos_y += 20;

}