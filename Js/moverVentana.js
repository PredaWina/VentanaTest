
function a(event, ventanaId)  {
    let ventana = document.getElementById(ventanaId);  


    let shiftX = event.clientX - ventana.getBoundingClientRect().left;
    let shiftY = event.clientY - ventana.getBoundingClientRect().top;
  
    ventana.style.position = 'absolute';
    ventana.style.zIndex = 1000;
    document.body.append(ventana);
  
    moveAt(event.pageX, event.pageY);
  
    // mueve la ventana a las coordenadas (pageX, pageY)
    // tomando la posición inicial en cuenta
    function moveAt(pageX, pageY) {
      ventana.style.left = pageX - shiftX + 'px';
      ventana.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mueve la ventana con mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // suelta la ventana
    ventana.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ventana.onmouseup = null;
    };
  
};
  
