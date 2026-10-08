//Reescribe mostrarLista del ejercicio 1 usando forEach en lugar de for. La salida debe ser
//idéntica. Al final del archivo, responde en un comentario: ¿se puede detener un forEach a la
//mitad, como hiciste en existeEnLista? ¿Qué te dice eso sobre cuándo usarlo y cuándo no?

function leerElementos(cantidad) {
  let lista = [];
  for (let i = 0; i < cantidad; i++) {
    lista.push(Number(prompt("Número " + (i + 1) + ":")));
  }
  return lista;
}

function eliminarDuplicados(lista) {
  let sinDuplicados = [];
  for (let i = 0; i < lista.length; i++) {
    let encontrado = false;
    for (let j = 0; j < sinDuplicados.length; j++) {
      if (lista[i] == sinDuplicados[j]) {
        encontrado = true;
      }
    }
    if (!encontrado) {
      sinDuplicados.push(lista[i]);
    }
  }
  return sinDuplicados;
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

let cantidad = Number(prompt("¿Cuántos números tendrá la lista?"));
let original = leerElementos(cantidad);
let limpio = eliminarDuplicados(original);

console.log("Original: " + unirConComas(original));
console.log("Sin duplicados: " + unirConComas(limpio));