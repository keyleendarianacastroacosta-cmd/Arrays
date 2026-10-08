//Leer las distancias en kilómetros de N pedidos del día. El envío es gratis hasta 3 km y la
//cobertura máxima es de 10 km. Con filter, obtener los pedidos con envío gratis. Con find, el
//primer pedido fuera de cobertura. Mostrar también cuántos pedidos pagan envío (más de 3 km
//y hasta 10 km). Si ningún pedido está fuera de cobertura, mostrar "Todos los pedidos están en
//cobertura".

function leerElementos(cantidad) {
  let lista = [];
  for (let i = 0; i < cantidad; i++) {
    lista.push(Number(prompt("Elemento " + (i + 1) + ":")));
  }
  return lista;
}

function unirSinDuplicados(lista1, lista2) {
  let resultado = [];
  for (let i = 0; i < lista1.length; i++) {
    let yaExiste = false;
    for (let j = 0; j < resultado.length; j++) {
      if (lista1[i] == resultado[j]) {
        yaExiste = true;
      }
    }
    if (!yaExiste) {
      resultado.push(lista1[i]);
    }
  }
  for (let i = 0; i < lista2.length; i++) {
    let yaExiste = false;
    for (let j = 0; j < resultado.length; j++) {
      if (lista2[i] == resultado[j]) {
        yaExiste = true;
      }
    }
    if (!yaExiste) {
      resultado.push(lista2[i]);
    }
  }
  return resultado;
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

let cant1 = Number(prompt("¿Cuántos números tendrá la primera lista?"));
let listaA = leerElementos(cant1);

let cant2 = Number(prompt("¿Cuántos números tendrá la segunda lista?"));
let listaB = leerElementos(cant2);

let resultado = unirSinDuplicados(listaA, listaB);

console.log("Lista 1: " + unirConComas(listaA));
console.log("Lista 2: " + unirConComas(listaB));
console.log("Unión sin duplicados: " + unirConComas(resultado));