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
  const imagesContainer = document.querySelector('.images');
  const images = document.querySelectorAll('.images img');
  const numImages = images.length;
  const imageWidth = images[0].clientWidth;
  let currentIndex = 0;
  const slideWidth = imageWidth * 3; // Ancho total de las imágenes a mostrar
  const speed = 1; // Velocidad de desplazamiento (en píxeles por fotograma)
  
  document.querySelector('.prev').addEventListener('click', () => {
      currentIndex -= slideWidth;
      if (currentIndex < 0) {
          currentIndex = imageWidth * (numImages - 1);
      }
      imagesContainer.style.transform = `translateX(-${currentIndex}px)`;
  });
  
  document.querySelector('.next').addEventListener('click', () => {
      currentIndex += slideWidth;
      if (currentIndex > imageWidth * (numImages - 1)) {
          currentIndex = 0;
      }
      imagesContainer.style.transform = `translateX(-${currentIndex}px)`;
  });
  
  