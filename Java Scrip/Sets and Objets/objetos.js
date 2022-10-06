// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const myObj ={
    nombre:"Jhonatan",
    apellido:"Calle",
    edad:31,
    altura:172,
    eresDesarrollador:true
};

// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = myObj.edad;
console.log(edad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [myObj,{
    nombre:"Juan",
    apellido:"Calle",
    edad:52,
    altura:172,
    eresDesarrollador:true

},{
    nombre:"Andres",
    apellido:"Calle",
    edad:25,
    altura:172,
    eresDesarrollador:true
}
];

console.log(lista);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const lista2 = lista.sort((a,b)=>a.edad - b.edad);
console.log(lista2);