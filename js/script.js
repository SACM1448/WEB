function getRandomColor() {
    // Generar un color hexadecimal aleatorio
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  
  function applyRandomColor() {
    var h1 = document.querySelector('.random-color');
    var randomColor = getRandomColor();
    h1.style.color = randomColor; // Aplicar el color aleatorio al elemento h1
  }
  
  // Cambiar el color aleatorio cada 0.18 segundos
  setInterval(applyRandomColor, 780);

  document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');
  
    function generarColorAleatorio() {
      // Generar colores aleatorios en formato hexadecimal
      var color1 = '#' + Math.floor(Math.random()*16777215).toString(16);
      var color2 = '#' + Math.floor(Math.random()*16777215).toString(16);
      // Actualizar el fondo con el nuevo degradado aleatorio
      header.style.backgroundImage = 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';
    }
  
    setInterval(generarColorAleatorio, 800); // Cambiar cada 5 segundos
  });
  
  