// AGUILA O SOL
// En un solo objeto, crea una versión del juego de lanzar una moneda (🦅 o 🌞)

/*
    La salida del programa debería ser:
    "Cae águila 🦅"
        o 
    "Cae sol 🌞"
*/

/*
    1. Completa la propiedad/función `tirarMoneda` del objeto `juegos`
    2. Una vez completo, descomenta la línea `juegos.tirarMoneda()`
*/

// Consejos
// * Recuerda que los objetos pueden guardar cualquier tipo de valor en la clave 
//      + Eso quiere decir que incluso una función puede ser un valor en una clave
// * Investiga sobre la libreria Math de javascript, te permitirá crear un valor aleatorio 0 o 1

const juegos = {
    aguila: 0,
    sol: 1,
    tirarMoneda: Math.random()
}

for (let tiros = 0; tiros < 10; tiros++) {
   let t= juegos.tirarMoneda;
  { if(t<.5)
    console.log("Cae águila 🦅");
   else 
   console.log("Cae sol 🌞");}
}
