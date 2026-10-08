//Copia la lectura del ejercicio 4. Mostrar el día con mayor venta, el día con menor venta y la
//diferencia entre ambos.

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let ventas = [];

function leerVentas(dias) {
  for (let i = 0; i < dias.length; i++) {
    ventas.push(Number(prompt("Venta del " + dias[i] + ":")));
  }
}

function buscarPosicionMayor(numeros) {
  let pos = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[pos]) pos = i;
  }
  return pos;
}

function buscarPosicionMenor(numeros) {
  let pos = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < numeros[pos]) pos = i;
  }
  return pos;
}

leerVentas(dias);
let mayor = buscarPosicionMayor(ventas);
let menor = buscarPosicionMenor(ventas);

console.log("Mejor día: " + dias[mayor] + " ($" + ventas[mayor] + ")");
console.log("Peor día: " + dias[menor] + " ($" + ventas[menor] + ")");
console.log("Diferencia: $" + (ventas[mayor] - ventas[menor]));