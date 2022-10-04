
let nombre = "Jhonatan";
let apellido = "Calle";

let estudiante= nombre.concat(" "+apellido)
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let estudianteLenght = estudiante.length;
console.log(estudianteLenght);

let estudianteFirtsWorld = estudiante.slice(0,1);
console.log(estudianteFirtsWorld);

let estudianteEndsWorld = estudiante.slice(13,14);
console.log(estudianteEndsWorld);

let estudianteEspacios= estudiante.replace(/ /g,"");
console.log(estudianteEspacios);

let estudianteFindNombre= estudiante.includes(`${nombre}`);
console.log(estudianteFindNombre);
