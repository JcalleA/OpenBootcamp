// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function allTrue() {
    return true;
}
console.log(allTrue());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asicrona() {
    setTimeout(() => {
        console.log("Hola soy una promesa");
    }, 5000);
}  

// - Una función generadora de índices pares automáticos

function* generadoraIndices() {
    let ind=0;
    while(true){
        ind+=2;
        if (ind===20){
            return ind;
        }
        yield ind
    }
}
const gen = generadoraIndices();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
