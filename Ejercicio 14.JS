//Leer los precios de N productos sin IVA. Generar con map un array nuevo con el precio más
//IVA del 19%, redondeado a pesos con Math.round. Mostrar ambos arrays y el total con IVA.
//Escribe también la versión con for en otra función y comprueba que las dos den el mismo
//resultado.
function leerElementos(cantidad) {
  let lista = [];
  for (let i = 0; i < cantidad; i++) {
    lista.push(Number(prompt("Elemento " + (i + 1) + ":")));
  }
  return lista;
}

function encontrarComunes(lista1, lista2) {
  let comunes = [];
  for (let i = 0; i < lista1.length; i++) {
    for (let j = 0; j < lista2.length; j++) {
      if (lista1[i] == lista2[j]) {
        let yaExiste = false;
        for (let k = 0; k < comunes.length; k++) {
          if (comunes[k] == lista1[i]) {
            yaExiste = true;
          }
        }
        if (!yaExiste) {
          comunes.push(lista1[i]);
        }
      }
    }
  }
  return comunes;
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

let resultado = encontrarComunes(listaA, listaB);

console.log("Lista 1: " + unirConComas(listaA));
console.log("Lista 2: " + unirConComas(listaB));
console.log("Elementos en común: " + unirConComas(resultado));