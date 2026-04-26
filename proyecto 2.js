const prompt = require("prompt-sync")();

let salir = false;
let opcion;
let conjuntoLlenado;
let conjuntoActual;
let M = [];
let A = [];
let T = [];
let E = [];
let O = [];

while (!salir) {

    do {
        console.log("========== MENÚ PRINCIPAL ==========");
        console.log("1. Crear conjunto manualmente");
        console.log("2. Crear conjunto aleatorio");
        console.log("3. Ordenar conjunto (Ascendente/Descendente)");
        console.log("4. Buscar en conjunto");
        console.log("5. Mostrar conjunto");
        console.log("6. Mostrar unión de conjuntos");
        console.log("7. Mostrar intersección de conjuntos");
        console.log("8. Mostrar diferencia de conjuntos");
        console.log("9. Mostrar diferencia simétrica de conjuntos");
        console.log("10. Mostrar complemento de conjuntos");
        console.log("11. Análisis de conjunto");
        console.log("12. Salir");
        console.log("====================================");

        opcion = Number(prompt("Seleccione una opción: "));

        if (isNaN(opcion) || opcion < 1 || opcion > 12) {
            console.log("ERROR: debe ingresar una opción válida entre 1 y 12");
            prompt("Presione Enter para intentar de nuevo...");
        }

    } while (isNaN(opcion) || opcion < 1 || opcion > 12);

    switch (opcion) {
        case 1:
            conjuntoLlenado = seleccionarConjunto();

            switch (conjuntoLlenado) {
                case 1:
                    conjuntoActual = M;
                    break;
                case 2:
                    conjuntoActual = A;
                    break;
                case 3:
                    conjuntoActual = T;
                    break;
                case 4:
                    conjuntoActual = E;
                    break;
                case 5:
                    conjuntoActual = O;
                    break;
            }

            conjuntoActual.length = 0;

            let contadorManual = 0;

            while (contadorManual < 15) {
                let numero = Number(prompt("Ingrese el número: " + (contadorManual + 1) +  ": "));
                let repetido = false;

                if (isNaN(numero)) {
                    console.log("ERROR: debe ingresar un número válido");
                } else {
                    for (let i = 0; i < contadorManual; i++) {
                        if (conjuntoActual[i] === numero) {
                            repetido = true;
                        }
                    }

                    if (repetido === true) {
                        console.log("ERROR: ese número ya existe en el conjunto");
                    } else {
                        conjuntoActual[contadorManual] = numero;
                        contadorManual++;
                    }
                }
            }
            console.log("Conjunto creado manualmente:");
            console.log("[" + conjuntoActual + "]");


            prompt("Presione Enter para volver al menú...");
            break;

        case 2:
            conjuntoLlenado = seleccionarConjunto();
            switch (conjuntoLlenado) {
                case 1:
                    conjuntoActual = M;
                    break;
                case 2:
                    conjuntoActual = A;
                    break;
                case 3:
                    conjuntoActual = T;
                    break;
                case 4:
                    conjuntoActual = E;
                    break;
                case 5:
                    conjuntoActual = O;
                    break;
            }
            console.log("Este conjunto se reemplazará con nuevos valores ¿Desea continuar?");
            let confirmacion = Number(prompt("1 = Sí | 0 = No: "));
            if (isNaN(confirmacion) || (confirmacion !== 1 && confirmacion !== 0)) {
                console.log("ERROR: Debe ingresar una opción válida");
            }
            else if (confirmacion === 1){
                conjuntoActual.length = 0;

                let contador = 0;

                while (contador < 10) {
                    let numeroAleatorio = Math.floor(Math.random()*100) + 1;
                    let repetido = false;

                    for (let i = 0; i < contador; i++) {
                        if (conjuntoActual[i] === numeroAleatorio) {
                            repetido = true;
                        }
                    }

                    if (repetido === false) {
                        conjuntoActual[contador] = numeroAleatorio;
                        contador++;
                    }
                }

                console.log("Conjunto aleatorio creado correctamente:");
                console.log("[" + conjuntoActual + "]");


            } else{
                console.log("Cancelando...")
            }
            prompt("Presione Enter para volver al menú...");
            break;

        case 3:
            conjuntoLlenado = seleccionarConjunto();

            switch (conjuntoLlenado) {
                case 1:
                    conjuntoActual = M;
                    break;
                case 2:
                    conjuntoActual = A;
                    break;
                case 3:
                    conjuntoActual = T;
                    break;
                case 4:
                    conjuntoActual = E;
                    break;
                case 5:
                    conjuntoActual = O;
                    break;
            }
            let tipoOrden;
            do {
                console.log("1 = Orden ascendente");
                console.log("2 = Orden descendente");

                tipoOrden = Number(prompt("Seleccione que tipo de orden quiere realizar: "));

                if (isNaN(tipoOrden) || (tipoOrden !== 1 && tipoOrden !== 2)) {
                    console.log("ERROR: debe ingresar una opción válida");
                }

            } while (isNaN(tipoOrden) || (tipoOrden !== 1 && tipoOrden !== 2));
            for (let i = 1; i < conjuntoActual.length; i++) {
                let valorActual = conjuntoActual[i];
                let j = i - 1;

                if (tipoOrden === 1) {
                    while (j >= 0 && conjuntoActual[j] > valorActual) {
                        conjuntoActual[j + 1] = conjuntoActual[j];
                        j--;
                    }
                } else {
                    while (j >= 0 && conjuntoActual[j] < valorActual) {
                        conjuntoActual[j + 1] = conjuntoActual[j];
                        j--;
                    }
                }

                conjuntoActual[j + 1] = valorActual;
            }

            console.log("Conjunto ordenado:");
            console.log("[" + conjuntoActual + "]");

            prompt("Presione Enter para volver al menú...");
            break;

        case 4:
            console.log("Buscar en conjunto");
            let seleccion = prompt("Presione Enter para volver al menú...");
            do {
                if (seleccion === "M") {
                    conjutoM();
                } else if (seleccion === "A") {
                    conjutoA();
                } else if (seleccion === "T") {
                    conjutoT();
                } else if (seleccion === "E") {
                    conjutoE();
                } else if (seleccion === "O") {
                    conjutoO();
                } else if (seleccion !== " ") {
                    break;
                }
            } while (seleccion !== " ");
            break;

        case 5:
            console.log("Seleccione uno M,A,T,E,O o Enter para salir ");
            let seleccionMostrar = prompt();

            if (seleccionMostrar === "M") {
                mostrarM()
            } else if (seleccionMostrar === "A") {
                mostrarA()
            } else if (seleccionMostrar === "T") {
                mostrarT()
            } else if (seleccionMostrar === "E") {
                mostrarE()
            } else if (seleccionMostrar === "O") {
                mostrarO()
            } else {
                console.log("No válido");
            }
            break;

        case 6:
            console.log("Mostrar unión de conjuntos");
            prompt("Presione Enter para volver al menú...");
            break;

        case 7:
            console.log("Seleccione el primer conjunto");
            conjuntoLlenado = seleccionarConjunto();
            switch (conjuntoLlenado) {
                case 1:
                    conjuntoActual = M;
                    break;
                case 2:
                    conjuntoActual = A;
                    break;
                case 3:
                    conjuntoActual = T;
                    break;
                case 4:
                    conjuntoActual = E;
                    break;
                case 5:
                    conjuntoActual = O;
                    break;
            }
            console.log("Seleccione el segundo conjunto:");
            let segundoConjunto = seleccionarConjunto();
            let conjuntoComparar;

            switch (segundoConjunto) {
                case 1:
                    conjuntoComparar = M;
                    break;
                case 2:
                    conjuntoComparar = A;
                    break;
                case 3:
                    conjuntoComparar = T;
                    break;
                case 4:
                    conjuntoComparar = E;
                    break;
                case 5:
                    conjuntoComparar = O;
                    break;
            }
            if (conjuntoActual.length < 15 || conjuntoComparar.length < 15) {
                console.log("ERROR: Ambos conjuntos deben estar completos antes de hacer la intersección.");
            } else {
                let resultado = interseccion(conjuntoActual, conjuntoComparar);

                console.log("Resultado de la intersección:");
                console.log("[" + resultado + "]");
            }
            prompt("Presione Enter para volver al menú...");
            break;

        case 8:
            console.log("Mostrar diferencia de conjuntos");
            prompt("Presione Enter para volver al menú...");
            break;

        case 9:
            console.log("Mostrar diferencia simétrica");
            prompt("Presione Enter para volver al menú...");
            break;

        case 10:
            console.log("Mostrar complemento de conjuntos");
            prompt("Presione Enter para volver al menú...");
            break;

        case 11:
            console.log("Análisis de conjunto");
            prompt("Presione Enter para volver al menú...");
            break;

        case 12:
            console.log("Saliendo del sistema...");
            salir = true;
            break;
    }
}

function seleccionarConjunto() {
    let opcionConjunto;

    do {
        console.log("Seleccione el conjunto:");
        console.log("1 = M");
        console.log("2 = A");
        console.log("3 = T");
        console.log("4 = E");
        console.log("5 = O");

        opcionConjunto = Number(prompt("Seleccione una opción: "));

        if (isNaN(opcionConjunto) || opcionConjunto < 1 || opcionConjunto > 5) {
            console.log("ERROR: debe seleccionar un conjunto válido");
            prompt("Presione enter para repetir");
        }

    } while (isNaN(opcionConjunto) || opcionConjunto < 1 || opcionConjunto > 5);

    return opcionConjunto;
}

function interseccion(conjunto1, conjunto2) {
    let resultado = [];

    for (let i = 0; i < conjunto1.length; i++) {
        for (let j = 0; j < conjunto2.length; j++) {
            if (conjunto1[i] === conjunto2[j]) {
                resultado[resultado.length] = conjunto1[i];
            }
        }
    }

    return resultado;
}