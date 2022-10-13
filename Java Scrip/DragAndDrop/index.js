const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.seccion')
const seccion_papelera = document.querySelector('.seccion_papelera')
parrafos.forEach(parrofo =>{
    parrofo.addEventListener("dragstart", event => {
        console.log("ok");
        parrofo.classList.add("dragging")
        event.dataTransfer.setData("id", parrofo.id)
    })

    parrofo.addEventListener("dragend", () => {
        console.log("ok");
        parrofo.classList.remove("dragging");
        
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
    })


    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
        
    })
})

seccion_papelera.addEventListener("dragover", event => {
    event.preventDefault();
    })
seccion_papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    parrafo.remove()
})