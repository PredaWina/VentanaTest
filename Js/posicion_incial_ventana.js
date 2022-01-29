var pos_x = 10;
var pos_y = 10;
var cont = 1;

function nueva_pos(ventanaID){
    

    let ventana = document.getElementById(ventanaID);

    console.log("Mueve Pos se ejecuta " + pos_x + " || " + pos_y);

    ventana.style.left = pos_x + 'px';
    ventana.style.top = pos_y + 'px';


    pos_x += 20;
    pos_y += 20;

    //Calculamos que no nos salgamos
    if(pos_y >= (screen.height * 55 /100)){
        pos_y = 10;
        
        if(pos_x >= (screen.width * 70/100)){
            cont = 1;
            pos_x = 10;
        }   
        else{
            pos_x = 150 * cont;
            cont++;
        }
        
    }

}