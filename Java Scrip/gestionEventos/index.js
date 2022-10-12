

const btn1=document.getElementById('btn1');

btn1.addEventListener('click', () => {
    alert("has echo Click en el boton")
    console.log("listo");
})

const btn2=document.querySelector("#btn2");

btn2.addEventListener('click', () => {
    console.log("Hola, estoy utilizando jQuery");
});
