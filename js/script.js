document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("header");
  let h1 = document.querySelector(".random-color");
  function generarColorAleatorio() {
    // Generar colores aleatorios en formato hexadecimal
    let color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let color3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    // Actualiza los colores
    header.style.backgroundImage =
      "linear-gradient(to right, " + color1 + ", " + color2 + ")";
    h1.style.color = color3;
  }
  setInterval(generarColorAleatorio, 800);
});
// Seleccionar el contenedor de imágenes y todas las imágenes dentro de él
// Obtener la cantidad total de imágenes
// Obtener la cantidad total de imágenes
// Obtener el ancho de la primera imagen
// Inicializar el índice actual y el ancho total del deslizamiento (tres imágenes juntas)
// Ancho total de las imágenes a mostrar
const imagesContainer = document.querySelector(".images");
const images = document.querySelectorAll(".images img");
const numImages = images.length;
const imageWidth = images[0].clientWidth;
let currentIndex = 0;
const slideWidth = imageWidth * 3;
document.querySelector(".prev").addEventListener("click", () => {
  currentIndex -= slideWidth; // Disminuir el índice actual por el ancho total del deslizamiento
  if (currentIndex < 0) {
    currentIndex = imageWidth * (numImages - 3); // Si el índice actual es menor que 0, establecerlo para mostrar las últimas tres imágenes
  }
  imagesContainer.style.transform = `translateX(-${currentIndex}px)`; // Aplicar el desplazamiento horizontal al contenedor de imágenes
});
document.querySelector(".next").addEventListener("click", () => {
  currentIndex += slideWidth; // Aumentar el índice actual por el ancho total del deslizamiento
  if (currentIndex > imageWidth * (numImages - 1)) {
    currentIndex = 0; // Si el índice actual es mayor que el ancho total de todas las imágenes, restablecer a 0
  }
  imagesContainer.style.transform = `translateX(-${currentIndex}px)`; // Aplicar el desplazamiento horizontal al contenedor de imágenes
});

document.getElementById('file-input').addEventListener('change', (event) => {
  const fileInput = event.target;
  const file = fileInput.files[0];
  const previewImage = document.getElementById('preview-image');

  if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
          previewImage.src = e.target.result;
          previewImage.alt = "Imagen seleccionada";
      };
      reader.readAsDataURL(file);
  }
});

document.getElementById('upload-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'presetImg');

  try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/dddzywyaw/image/upload`, {
          method: 'POST',
          body: formData
      });

      if (!response.ok) {
          throw new Error('Error en la subida de la imagen');
      }

      const data = await response.json();

      // Mostrar mensaje emergente
      alert('Datos enviados correctamente');

      // Volver a mostrar el logo de la compañía
      const previewImage = document.getElementById('preview-image');
      previewImage.src = './assets/IMG/logo.png';
      previewImage.alt = 'Logo compañía';
  } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar los datos');
  }
});
