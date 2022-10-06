//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let i=1;
let factorial =1;

while (i<11){
    if (i < 11){
        factorial = factorial * i;
    i++;
    console.log(factorial);
        }
    if (i > 11){
        break;
    }
}
