function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let pinguino = document.getElementById("pinguino");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    pinguino.src = "./img/encriptado.jpg";
  } else {
    pinguino.src = "./img/pinguino.jpg";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let pinguino = document.getElementById("pinguino");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      pinguino.src = "./img/desencriptado.jpg";
    } else {
      pinguino.src = "./img/pinguino.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function copiarTexto() {
  let textoEncriptado = document.getElementById("texto").value;
  if (textoEncriptado) {
    navigator.clipboard.writeText(textoEncriptado)
      .then(() => {
        swal("¡Texto copiado!", "El texto encriptado se ha copiado al portapapeles.", "success");
      })
      .catch((error) => {
        console.error("Error al copiar el texto:", error);
      });
  } else {
    swal("Ooops!", "Ningún mensaje fue encontrado", "warning");
  }
}

