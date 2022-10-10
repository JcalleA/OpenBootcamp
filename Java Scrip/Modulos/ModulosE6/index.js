// Crea un nuevo proyecto de Node

// - Configura el proyecto para utilizar los módulos de ES6
// - En el entrypoint index.js, importa el módulo controller.js
import {suma2, multiplica  } from './controller.js';

// - El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
const sum = suma2(12,8)
console.log(sum);

const mult = multiplica(5,5);
console.log(chalk.green(mult));
// - Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
import chalk from 'chalk';
// - Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log(chalk.blue('Hello world!'));

