const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufet"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    // Reemplazar cada carácter en la cadena con el carácter correspondiente en
    // la matriz de código
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

//DESENCRIPTADO

function btnDesEncriptar() {
  const textoEncriptado = desEncriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
//   mensaje.style.backgroundImage = "none";
}

function desEncriptar(stringDesEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufet"],
  ];
  stringDesEncriptado = stringDesEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesEncriptado.includes(matrizCodigo[i][1])) {
        stringDesEncriptado = stringDesEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesEncriptado;
}

//agregamos la funcion de copiar 
 function copiarTexto() {
   const mensaje = document.querySelector(".mensaje");
   mensaje.select();
   document.execCommand("copy");
   alert("Texto copiado al portapapeles");
 }