function calcularDias(prestamo) {
    let array=[];

    for (let i=0; i<prestamo.length; i++){
        console.log(prestamo.length);
        console.log(prestamo[i]);
        let dsuma=1;
        const array1=[1];
        let comp=false;
        while (comp==false) {
        // for (let j=0 ; dsuma<prestamo[i] ;j++){
            console.log(array1);
            dsuma=dsuma*2;
            
            array1.push(dsuma);
            console.log(array1);
            comp=dsuma-prestamo[i]>=0;
            console.log(comp);
            
            console.log(dsuma);
        } array.push(array1.length);
        console.log(array);
    }return array;
}
console.log(calcularDias([3,15,16,45,100,200]));