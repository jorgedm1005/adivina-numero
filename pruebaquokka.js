console.log('kkk');

// el DOM devuelve texto!!!

const numIntentos = '5';
let intentosRestantes = '5'
console.log('LLevas ',numIntentos,' intentos')
console.log('LLevas '+numIntentos+' intentos')

//ES6
// LITERAL STRINGS
console.log(`LLevas ${numIntentos} intentos`)
// variable tipo texto pero permite la resta -> tyoe coarcing
console.log(`Te quedan ${numIntentos -1} intentos`)
// type-coarcing es propenso a errores:
console.log(`Te quedan ${numIntentos +1} intentos`)


// linter --> visualiza errores
// instalamos extension + herramienta de linea de comandos --> esLint extension
// instalamos el paquete esLint de npm
// npm install -g eslint (global)
// npm init
// eslint --init
// herramienta formateo --> cambia formato del codigo --> instalamos extension prettier
