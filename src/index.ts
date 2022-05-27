/*
Cine
•Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay
•Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
•La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
•La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada
*/

let bucatasEstado: boolean[] = [
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  false,
  true,
  false,
  false
];
let contarOcupadas: number = 0;
let contarVacias: number = 0;

for (let i: number = 0; i < bucatasEstado.length; i++) {
  //console.log(bucatasEstado[i]);
  if (bucatasEstado[i] === false) {
    contarVacias = contarVacias + 1;
  } else {
    contarOcupadas = contarOcupadas + 1;
  }
}

console.log(`hay ${contarOcupadas} ocupadas y ${contarVacias} vacias`);
