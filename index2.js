//Ejemplo 1 Switch

let diaDeLaSemana = "Martes"; // Mostrar si es el primer dia de la semana, laboral, fin de semana o no valido. En este caso labora que es martes

switch (diaDeLaSemana) {
    case "Lunes":
        console.log("Es el primer día de la semana.");
        break;
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
        console.log("Es un día laborable.");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Es fin de semana.");
        break;
    default:
        console.log("Día no válido.");
}

//Ejemplo 2 Switch
let codigoDeProducto = "C789"; // Mostrar el producto dependiendo del código

switch (codigoDeProducto) {
    case "A123":
        console.log("Producto 1: Camiseta");
        break;
    case "B456":
        console.log("Producto 2: Pantalones");
        break;
    case "C789":
        console.log("Producto 3: Zapatos");
        break;
    default:
        console.log("Código de producto no válido.");
}