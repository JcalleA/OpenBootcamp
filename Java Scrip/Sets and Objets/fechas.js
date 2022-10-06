// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
let fechaHoy = new Date();
console.log(fechaHoy);

// - La fecha de tu nacimiento
let fechaNacimiento = new Date(1991,8,29,4);
console.log(fechaNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let hoyMayorNacimiento = fechaHoy>fechaNacimiento;
console.log(hoyMayorNacimiento);

// - Una variable que contenga el día de tu nacimiento
let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento+1);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);