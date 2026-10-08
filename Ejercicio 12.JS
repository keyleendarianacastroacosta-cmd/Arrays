//En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al inicio.
//Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor que N:
//rotar 7 en una fila de 5 es lo mismo que rotar 2.

function leerElementos(cantidad) {
  let lista = [];
  for (let i = 0; i < cantidad; i++) {
    lista.push(Number(prompt("Número " + (i + 1) + ":")));
  }
  return lista;
}

function buscarElemento(lista, valorBuscado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == valorBuscado) {
      return i;
    }
  }
  return -1;
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
let numeros = leerElementos(cantidad);
let buscar = Number(prompt("¿Qué número deseas buscar?"));
let posicion = buscarElemento(numeros, buscar);

console.log("Lista: " + unirConComas(numeros));
if (posicion != -1) {
  console.log("El número " + buscar + " se encuentra en la posición: " + posicion);
} else {
  console.log("El número " + buscar + " no está en la lista.");
}