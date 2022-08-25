// prompt con ciclo FOR da turnos hasta 10 turnos por dias 

for (let i= 1; i <= 4; i++) {
    let ingresarNombre = prompt("ingresar Nombre");
    let ingreseApellido = prompt("Ingrese Apellido");
    alert("Turno N°"+i+" para: "+ingresarNombre + " " + ingreseApellido);
} 

alert ("no quedan mas turnos por el dia de hoy");


// prompt con ciclo While ingresa presion arterial mientras la presion sea anormal la sigue pidiendo sale del ciclo cuando da presion normal

let numero = parseFloat  (prompt ("ingrese su presion arterial"));

while ( numero <10 || numero > 13) {
    alert ("Presion arterial fuera de lo normal.");
    numero = parseFloat  (prompt ("ingrese su presion arterial"));
}

alert ("Presion arterial normal.");