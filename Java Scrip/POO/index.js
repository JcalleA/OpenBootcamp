
// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una clase llamada "Estudiante" que tenga:
// - Una variable llamada nombre
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
class Estudiante{
    nombre;
    asignaturas=['Javascript', 'HTML', 'CSS'];
    constructor(nombre,asignaturas){
        this.nombre=nombre;
        this.asignaturas=asignaturas;
    }
    obtenDatos=function(){
        return new Estudiante(this.nombre,this.asignaturas);
    }
}
// - Crea una nueva instancia de "Estudiante"
const estudiante1=new Estudiante("Carlos",["java","Reac"])
console.log(estudiante1);

// - Haz la llamada al método obtenDatos

console.log(estudiante1.obtenDatos());
