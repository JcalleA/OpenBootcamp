const logger = require('./logger');

logger.info('Starting servers');
logger.error('Starting servers failed');

const myFunc = val => {
    if (typeof val === 'number'){
        return 2*val;
    }
    throw new Error ("El valor debe ser tipo numero")
};
let numero="hola";
try {
    const prueba = myFunc(numero)
    console.log(prueba);
}catch (e) {
    console.log(e);
}