import { valid } from "./validaciones.js";
import { mostrarMensaje } from "./script.js";

const validacion = new valid();
const formulario = document.querySelector("#upload-form");
const formValid = {
  nombre: false,
  correo: false,
  edad: false,
};
document
  .getElementById("upload-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!Object.values(formValid).every(Boolean)) {
      mostrarMensaje("Por favor, complete los campos correctamente.");
    } else {
      document.getElementById("nombre").value = "";
      document.getElementById("correo").value = "";
      document.getElementById("edad").value = "";
      formValid.nombre = false;
      formValid.correo = false;
      formValid.edad = false;
      const fileInput = document.getElementById("file-input");
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "presetImg");

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dddzywyaw/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Error en la subida de la imagen");
        }

        const data = await response.json();

        // Llama a la función para mostrar el mensaje
        mostrarMensaje("Datos enviados correctamente");
        // Volver a mostrar el logo de la compañía
        const previewImage = document.getElementById("preview-image");
        previewImage.src = "./assets/IMG/logo.png";
        previewImage.alt = "Logo compañía";
        fileInput.value = "";
      } catch (error) {
        console.error("Error:", error);
        mostrarMensaje("Error al enviar los datos");
        const previewImage = document.getElementById("preview-image");
        previewImage.src = "./assets/IMG/logo.png";
        previewImage.alt = "Logo compañía";
        fileInput.value = "";
      }
    }
  });

formulario.addEventListener("change", (e) => {
  const inputId = e.target.id;
  const inputValue = e.target.value;
  switch (inputId) {
    case "nombre":
      formValid.nombre = validacion.validNames(inputValue);
      console.log(Object.keys(formValid));
      console.log(Object.values(formValid));
      break;
    case "correo":
      formValid.correo = validacion.validMail(inputValue);
      console.log(Object.keys(formValid));
      console.log(Object.values(formValid));
      break;
    case "edad":
      formValid.edad = validacion.validAge(inputValue);
      console.log(Object.keys(formValid));
      console.log(Object.values(formValid));
      break;
  }
});
