let ordenComidaSeleccionada;
let ordenBebidaSeleccionada;

alert("Bienvenido!\nA continuación te muestro el menú de desayuno disponible, elije una opción");

do {
    let ordenComida = prompt("Ingresa la letra según lo que deseas ordenar:\n S-sandwich \n C-criollos \n M-medialunas \n X-nada");
    ordenComidaSeleccionada = obtenerOpcionComida(ordenComida)
} while (ordenComidaSeleccionada == null);

let deseaBebida = prompt("Desea ordenar algo de bebida? si/no");

if (deseaBebida == "si") {
    alert("Te muestro el menú de bebidas disponibles, elije una opción");
    do {
        ordenBebida = prompt("Ingresa la letra según lo que deseas ordenar:\n C-cafe con leche \n L-limonada \n A-agua \n X-nada");
        ordenBebidaSeleccionada = obtenerOpcionBebida(ordenBebida)
    } while (ordenBebidaSeleccionada == null);
} else {
    ordenBebidaSeleccionada = "X"
}

if (ordenComidaSeleccionada != "X" && ordenBebidaSeleccionada != "X") {
    alert("Gracias por su compra!\nA continuación le muestro el total a pagar por su pedido");
} else if (ordenComidaSeleccionada != "X") {
    alert("Usted solo ha pedido una comida!\nA continuación le muestro el total a pagar por su pedido");
} else if (ordenBebidaSeleccionada != "X") {
    alert("Usted solo ha pedido una bebida!\nA continuación le muestro el total a pagar por su pedido");
} else {
    alert("No ha seleccionado ningun producto para comprar \n Hasta luego!");
}

function obtenerOpcionComida(opcion) {
    let opcionInterna = opcion.trim().toUpperCase()
    let esValida = opcionInterna == "S" || opcionInterna == "C" || opcionInterna == "M" || opcionInterna == "X";
    if (esValida) {
        return opcionInterna
    } else {
        return null;
    }
}

function obtenerOpcionBebida(opcion) {
    let opcionInterna = opcion.trim().toUpperCase()
    let esValida = opcionInterna == "C" || opcionInterna == "L" || opcionInterna == "A" || opcionInterna == "X";
    if (esValida) {
        return opcionInterna
    } else {
        return null;
    }
}