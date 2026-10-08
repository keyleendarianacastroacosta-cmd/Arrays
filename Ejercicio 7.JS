//Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones
//validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no
//cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más
//frecuente.

function leerCalificaciones() {
  let calificaciones = [];
  for (let i = 0; i < 10; i++) {
    let nota = Number(prompt("Calificación " + (i + 1) + ":"));
    while (nota < 1 || nota > 5) {
      nota = Number(prompt("Nota inválida, debe estar entre 1 y 5:"));
    }
    calificaciones.push(nota);
  }
  return calificaciones;
}

function contarPorEstrellas(calificaciones) {
  let contadores = [0, 0, 0, 0, 0];
  for (let i = 0; i < calificaciones.length; i++) {
    let estrella = calificaciones[i];
    contadores[estrella - 1] = contadores[estrella - 1] + 1;
  }
  return contadores;
}

function repetirCaracter(caracter, veces) {
  let texto = "";
  for (let i = 0; i < veces; i++) {
    texto = texto + caracter;
  }
  return texto;
}

function buscarPosicionMayor(numeros) {
  let pos = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[pos]) {
      pos = i;
    }
  }
  return pos;
}

let calificaciones = leerCalificaciones();
let conteo = contarPorEstrellas(calificaciones);

for (let i = 0; i < conteo.length; i++) {
  let asteriscos = repetirCaracter("*", conteo[i]);
  console.log("Estrellas " + (i + 1) + ": " + asteriscos + " (" + conteo[i] + ")");
}

let mayor = buscarPosicionMayor(conteo);
console.log("Más frecuente: " + (mayor + 1) + " estrellas");