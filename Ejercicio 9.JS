//Leer N palabras. Crear una función que retorne un array nuevo con las palabras en orden
//inverso, sin modificar el original y sin usar reverse. Mostrar ambos arrays para demostrar que
//el original quedó igual.https://doramaswow.com/ver/jinnys-kitchen-capitulo-4

function leerPalabras(cantidad) {
  let palabras = [];
  for (let i = 0; i < cantidad; i++) {
    palabras.push(prompt("Palabra " + (i + 1) + ":"));
  }
  return palabras;
}

function invertir(lista) {
  let nuevo = [];
  for (let i = lista.length - 1; i >= 0; i--) {
    nuevo.push(lista[i]);
  }
  return nuevo;
}

function unirConComas(lista) {
  let texto = "";
  for (let i = 0; i < lista.length; i++) {
    texto = texto + lista[i];
    if (i < lista.length - 1) {
      texto = texto + ", ";
    }
  }
  return texto;
}

let cantidad = Number(prompt("¿Cuántas palabras?"));
let original = leerPalabras(cantidad);
let invertido = invertir(original);

console.log("Original: " + unirConComas(original));
console.log("Invertido: " + unirConComas(invertido));