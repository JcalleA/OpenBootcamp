function fiboNum(numero){
    let array =[1]
    let num =1;
    for (var i=0; i<numero-1;i++){
        array.push(num)
        num=array[i]+num;
        
    }return array;
    
}console.log(fiboNum(10));