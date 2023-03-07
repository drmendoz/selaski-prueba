/* Funcion de calculo de tiempo del procesador
para encontrar cifra numerica*/
export const encontrarCifra = (
  tecladoArreglo: number[],
  cifraIngresada: number
) => {
  let tiempo = 0;
  let cursorTeclado = 0;
  const longitudTeclado = tecladoArreglo.length;
  let direccion = true; // Si direccion es true el cursor se desplazara hacia derecha, en caso de false a la izquierda
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
      //Condicion para invertir direccion en caso de llegar al fin o inicio del arreglo
      if (cursorTeclado == longitudTeclado - 1 || cursorTeclado == 0) {
        direccion = !direccion;
      }
      tecla = tecladoArreglo[cursorTeclado];

      tiempo++;
    }
  }
  return tiempo;
};
