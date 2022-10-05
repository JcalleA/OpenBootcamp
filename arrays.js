//Listas
let array = [1,2,3,4,5,6];

console.log(array[1]);
array.push("hola",5,7,8);
console.log(array);
array.pop();
console.log(array);
array.splice(2,2,"hola");
console.log(array);

//unir listas

let array2 = [1,2,3,4,5,"Lista 2"]

let array3 = array.concat(array2);
console.log(array3);

console.log(...array3);

let array4 = [...array, ...array2, ...array3];
console.log(...array4);

const array5 = ["cali", "buga","tulua","zarzal"];
array5.forEach(v=>{
    console.log(v);
    return 4
});

const array6= array5.map((v, indice)=> `1 - ${indice+1} - ${v}`);
console.log(array6);

const listaObj =[
    { nombre:"lucas",edad:30},
    { nombre:"luis",edad:25},
    { nombre:"andres",edad:36},
    { nombre:"felipoe",edad:20},
    { nombre:"juan",edad:25},
    { nombre:"laura",edad:38},
];

const personasMayores=listaObj.filter(obj=>obj.edad<30);
console.log(personasMayores);


const arraya=[1,2,3,4,5,6,7,8];

console.log(arraya);

arraya.sort((a,b)=>{
    return 1;
});
console.log(arraya);

listaObj.sort((a,b)=>{
    if (a.edad<b.edad){
        return -1
    }else {
        return 1;
    }
});
console.log(listaObj);

const resultado = arraya.every(valor => valor>0);
console.log(resultado);