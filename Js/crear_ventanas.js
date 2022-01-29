//Iniciar contador de ventanas
var x = 0;


function inciar_creacion_ventana(){
    
    var aux = prompt("Introduce un nombre a la ventana", "Nuevo" + x);
    crear_ventana(aux);
}

function crear_ventana(nombre){

    console.log("Creadno ventana con nombre: " + nombre);
 
    // Div principal
    var ventana = document.createElement("div");
    ventana.setAttribute("id", x);
    ventana.setAttribute("class", "ventana");
    document.body.appendChild(ventana);

        // Div barra superior
        var ventana_barra_sup = document.createElement("div");
        ventana_barra_sup.setAttribute("class", "ventana_barra_sup");
        ventana.appendChild(ventana_barra_sup);

            var barra_arr = document.createElement("div");
            barra_arr.setAttribute("class", "barra_arr");
            barra_arr.setAttribute("onmousedown", "a(event, '" + x + "');");
            ventana_barra_sup.appendChild(barra_arr);

                var titulo = document.createElement("h1");
                titulo.setAttribute("class", "titulo");
                titulo.textContent = nombre;
                barra_arr.appendChild(titulo);

            var botonMAS = document.createElement("button");
            botonMAS.setAttribute("class", "boton");
            botonMAS.setAttribute("onclick", "agrandar(10," + x + ", 'cont" + x +"');");
            botonMAS.textContent = "+";
            ventana_barra_sup.appendChild(botonMAS);    

            var botonMENOS = document.createElement("button");
            botonMENOS.setAttribute("class", "boton");
            botonMENOS.setAttribute("onclick", "reducir(10," + x + ", 'cont" + x +"');");
            botonMENOS.textContent = "-";
            ventana_barra_sup.appendChild(botonMENOS);    

        // Div contenido
        var ventana_contenido = document.createElement("div");
        ventana_contenido.setAttribute("id", "cont" + x);
        ventana_contenido.setAttribute("class", "ventana_contenido");
        ventana.appendChild(ventana_contenido);

        //Div barra inferior
        var ventana_barra_inf = document.createElement("div");
        ventana_barra_inf.setAttribute("class", "ventana_barra_inf");
        ventana.appendChild(ventana_barra_inf);

    //Augmentar contador de ventanas
    x++;
}