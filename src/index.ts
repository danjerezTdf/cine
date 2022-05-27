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
