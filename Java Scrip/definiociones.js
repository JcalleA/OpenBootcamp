//Listas

const lista = [1,5,8,"hola",true];
console.log(lista);

//Objetos

const movil = {
    name: "Movil",
    age: 20,
    anchura: 35,
    isandroid: true,
    friends:[lista]
}
movil.anio=2022;

console.log(movil.anio);

//Fechas

const ahora = new Date();
console.log(ahora);

const ahora2 = new Date(10);
console.log(ahora2);

const ahora3 = new Date("march 26 2020");
console.log(ahora3);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anyo = ahora.getFullYear();
console.log(dia, mes, anyo);