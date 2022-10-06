// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["arroz","agua","matequilla","sal"];


// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de girasol");
console.log(listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const thorPelicula = [{
    Titulo:"Thor",
    Director:"Thomas",
    Fecha : new Date("january 15 2005")
}
];
const ramboPelicula = [{
    Titulo:"Rambo",
    Director:"Felipe",
    Fecha : new Date("october 15 2025")
}
];
const depredadorPelicula = [{
    Titulo:"Depredador",
    Director:"Andres",
    Fecha : new Date("july 1 2020")
}
];

const peliculas = [...thorPelicula, ...depredadorPelicula, ...ramboPelicula];
console.log(peliculas);
Dat = new Date("january 1 2010")

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosteriores = peliculas.filter(obj => obj.Fecha > Dat);
console.log(peliculasPosteriores);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores =peliculas.map(obj => obj.Director);
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos =peliculas.map(obj => obj.Titulo);
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const peliculasDirectores = directores.concat(titulos);
console.log(peliculasDirectores);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directoresPeliculas = [...directores, ...titulos];
console.log(...directoresPeliculas);