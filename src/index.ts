/* Funcion de calculo de tiempo del procesador
para encontrar cifra numerica*/
export const encontrarCifra = (
  tecladoArreglo: number[],
  cifraIngresada: number
) => {
  let tiempo = 0;
  let cursorTeclado = 0;
  const longitudTeclado = tecladoArreglo.length;
  let direccion = true;
  const digitosIngresados = cifraIngresada.toString().split("");
  for (let digito of digitosIngresados) {
    const num = parseInt(digito);
    let tecla: number = null;
    tecla = tecladoArreglo[cursorTeclado];
    while (num != tecla) {
      if (direccion) {
        cursorTeclado++;
      } else {
        cursorTeclado--;
      }
      if (cursorTeclado == longitudTeclado - 1 || cursorTeclado == 0) {
        direccion = !direccion;
      }
      tecla = tecladoArreglo[cursorTeclado];

      tiempo++;
    }
  }
  return tiempo;
};
