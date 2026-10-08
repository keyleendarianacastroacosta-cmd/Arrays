//Leer 10 números. Construir un array nuevo sin repetidos que conserve el orden en que
// apareció cada número por primera vez. Mostrar cuántos repetidos se eliminaron. Prohibido
//includes, indexOf y Set.

function leerPrecios(cantidad) {
  let precios = [];
  for (let i = 0; i < cantidad; i++) {
    precios.push(Number(prompt("Precio " + (i + 1) + ":")));
  }
  return precios;
}

function ordenarDescendente(lista) {
  let copia = [];
  for (let i = 0; i < lista.length; i++) {
    copia.push(lista[i]);
  }
  
  for (let i = 0; i < copia.length - 1; i++) {
    for (let j = 0; j < copia.length - 1 - i; j++) {
      if (copia[j] < copia[j + 1]) {
        let temp = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temp;
      }
    }
  }
  return copia;
}

function unirConComas(lista) {
  let texto = "";
  for (let i = 0; i < lista.length; i++) {
    texto = texto + "$" + lista[i];
    if (i < lista.length - 1) {
      texto = texto + ", ";
    }
  }
  return texto;
}

let cantidad = Number(prompt("¿Cuántos productos?"));
let original = leerPrecios(cantidad);
let ordenados = ordenarDescendente(original);

console.log("Original: " + unirConComas(original));
console.log("Ordenado descendente: " + unirConComas(ordenados));