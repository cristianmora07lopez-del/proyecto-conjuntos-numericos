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
             while (true) {
                console.log("Seleccione M,A,T,E,O o presione Enter para salir");
                let seleccion = prompt();

                if (seleccion === "") break;

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
                } else {
                    console.log("No válido");
                }
            }
            break;

        case 5:
           console.log("Seleccione uno M,A,T,E,O o presione Enter para salir");
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

        case 9: {
            console.log("Mostrar diferencia simétrica");
            console.log("Mostrar diferencia simétrica");
            console.log("--- Seleccione el PRIMER conjunto ---");
            let opA9 = seleccionarConjunto();
            console.log("--- Seleccione el SEGUNDO conjunto ---");
            let opB9 = seleccionarConjunto();
            let nombres = ["M", "A", "T", "E", "O"];
            let nombreA9 = nombres[opA9 - 1];
            let nombreB9 = nombres[opB9 - 1];
            let conjA9 = obtenerConjunto(nombreA9);
            let conjB9 = obtenerConjunto(nombreB9);
            let resultado9 = diferenciaSimetrica(conjA9, conjB9);
            console.log("\nDiferencia Simétrica (" + nombreA9 + " Δ " + nombreB9 + "):");
            mostrarArreglo(resultado9);
            prompt("Presione Enter para volver al menú...");
            break;
        }

        case 10:{
            console.log("Mostrar complemento de conjuntos");
                console.log("Mostrar complemento de conjuntos");
                console.log("--- Seleccione el PRIMER conjunto ---");
                let opA10 = seleccionarConjunto();
                console.log("--- Seleccione el SEGUNDO conjunto ---");
                let opB10 = seleccionarConjunto();
                let nombres = ["M", "A", "T", "E", "O"];
                let nombreA10 = nombres[opA10 - 1];
                let nombreB10 = nombres[opB10 - 1];
                let conjA10 = obtenerConjunto(nombreA10);
                let conjB10 = obtenerConjunto(nombreB10);
                let compA = complemento(conjA10, conjB10);
                let compB = complemento(conjB10, conjA10);
                console.log("\nComplemento de " + nombreA10 + " (" + nombreA10 + "'):");
                mostrarArreglo(compA);
                console.log("\nComplemento de " + nombreB10 + " (" + nombreB10 + "'):");
                mostrarArreglo(compB);
                prompt("Presione Enter para volver al menú...");
                break;
            }

        case 11: {
            console.log("Análisis de conjunto");
            console.log("Análisis de conjunto");
            let op11 = seleccionarConjunto();
            let nombres = ["M", "A", "T", "E", "O"];
            let nombre11 = nombres[op11 - 1];
            let conjunto11 = obtenerConjunto(nombre11);
            analisisConjunto(conjunto11, nombre11);
            prompt("Presione Enter para volver al menú...");
            break;
        }

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


//funciones casos 9-11
function obtenerConjunto(nombre) {
    switch (nombre) {
        case "M": return M;
        case "A": return A;
        case "T": return T;
        case "E": return E;
        case "O": return O;
    }
}

function mostrarArreglo(arr) {
    if (arr.length === 0) {
        console.log("Resultado: { } (conjunto vacío)");
        return;
    }
    console.log("Resultado: { " + arr.join(", ") + " }");
}

function diferencia(conjA, conjB) {
    let resultado = [];
    for (let i = 0; i < conjA.length; i++) {
        if (!conjB.includes(conjA[i])) {
            resultado.push(conjA[i]);
        }
    }
    return resultado;
}

function union(conjA, conjB) {
    let resultado = [...conjA];
    for (let i = 0; i < conjB.length; i++) {
        if (!resultado.includes(conjB[i])) {
            resultado.push(conjB[i]);
        }
    }
    return resultado;
}

function diferenciaSimetrica(conjA, conjB) {
    let aMinusB = diferencia(conjA, conjB);
    let bMinusA = diferencia(conjB, conjA);
    return union(aMinusB, bMinusA);
}

function complemento(conjA, conjB) {
    return diferencia(conjB, conjA);
}

function mostrarConjunto(conjunto, nombre) {
    let viz = "Conjunto (" + nombre + ") ";
    for (let i = 0; i < 15; i++) {
        viz += i < conjunto.length ? "[ " + conjunto[i] + " ]" : "[   ]";
    }
    console.log("\n" + viz);
}

function analisisConjunto(conjunto, nombre) {
    if (conjunto.length === 0) {
        console.log("El conjunto " + nombre + " está vacío.");
        return;
    }
    let suma = 0;
    for (let i = 0; i < conjunto.length; i++) suma += conjunto[i];
    let promedio = suma / conjunto.length;
    let margen = 20;
    let atipicos = [];
    for (let i = 0; i < conjunto.length; i++) {
        if (conjunto[i] > promedio + margen || conjunto[i] < promedio - margen) {
            atipicos.push(conjunto[i]);
        }
    }
    console.log("\n===== Análisis del conjunto " + nombre + " =====");
    mostrarConjunto(conjunto, nombre);
    console.log("Cantidad de elementos : " + conjunto.length);
    console.log("Suma total            : " + suma);
    console.log("Promedio              : " + promedio.toFixed(2));
    console.log("Valores atípicos (±" + margen + "): " + (atipicos.length > 0 ? "{ " + atipicos.join(", ") + " }" : "Ninguno"));
    console.log("==========================================");
}
function conjutoM() {
    while (true) {
        console.log("¿Cuál número deseas buscar? (X para salir)");
        let entrada = prompt();

        if (entrada === "X") {
            console.log("Volviendo al menú");
            break;
        }

        let valor = parseInt(entrada);

        if (isNaN(valor)) {
            console.log("Ingrese un número válido");
            continue;
        }

        let encontrado = false;

        for (let i = 0; i < M.length; i++) {
            if (M[i] === valor) {
                console.log("Encontrado en posición:", i);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("No encontrado");
        }
    }
}
function conjutoA() {
    while (true) {
        console.log("¿Cuál número deseas buscar? (X para salir)");
        let entrada = prompt();

        if (entrada === "X") {
            console.log("Volviendo al menú");
            break;
        }

        let valor = parseInt(entrada);

        if (isNaN(valor)) {
            console.log("Ingrese un número válido");
            continue;
        }

        let encontrado = false;

        for (let i = 0; i < A.length; i++) {
            if (A[i] === valor) {
                console.log("Encontrado en posición:", i);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("No encontrado");
        }
    }
}

function conjutoT() {
    while (true) {
        console.log("¿Cuál número deseas buscar? (X para salir)");
        let entrada = prompt();

        if (entrada === "X") {
            console.log("Volviendo al menú");
            break;
        }

        let valor = parseInt(entrada);

        if (isNaN(valor)) {
            console.log("Ingrese un número válido");
            continue;
        }

        let encontrado = false;

        for (let i = 0; i < A.length; i++) {
            if (A[i] === valor) {
                console.log("Encontrado en posición:", i);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("No encontrado");
        }
    }
}

function conjutoE() {
    while (true) {
        console.log("¿Cuál número deseas buscar? (X para salir)");
        let entrada = prompt();

        if (entrada === "X") {
            console.log("Volviendo al menú");
            break;
        }

        let valor = parseInt(entrada);

        if (isNaN(valor)) {
            console.log("Ingrese un número válido");
            continue;
        }

        let encontrado = false;

        for (let i = 0; i < E.length; i++) {
            if (E[i] === valor) {
                console.log("Encontrado en posición:", i);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("No encontrado");
        }
    }
}

function conjutoO() {
    while (true) {
        console.log("¿Cuál número deseas buscar? (X para salir)");
        let entrada = prompt();

        if (entrada === "X") {
            console.log("Volviendo al menú");
            break;
        }

        let valor = parseInt(entrada);

        if (isNaN(valor)) {
            console.log("Ingrese un número válido");
            continue;
        }

        let encontrado = false;

        for (let i = 0; i < O.length; i++) {
            if (O[i] === valor) {
                console.log("Encontrado en posición:", i);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("No encontrado");
        }
    }
}
function mostrarM(){
    while (true) {
        let resultado = "Conjunto M ";
        for (let i = 0; i < 15; i++) {
            if (i < M.length) {
                resultado += "[" + M[i] + "]";
            } else {
                resultado += "[ ]";
            }
        }
        console.log(resultado);
        let opcion = prompt("0 para volver a elegir conjunto ");
        if (opcion === "0") break;
    }
}
function mostrarA(){
    while (true) {
        let resultado = "Conjunto A ";
        for (let i = 0; i < 15; i++) {
            if (i < A.length) {
                resultado += "[" + A[i] + "]";
            } else {
                resultado += "[ ]";
            }
        }
        console.log(resultado);
        let opcion = prompt("0 para volver a elegir conjunto ");
        if (opcion === "0") break;
    }
}
function mostrarT(){
    while (true) {
        let resultado = "Conjunto T ";
        for (let i = 0; i < 15; i++) {
            if (i < T.length) {
                resultado += "[" + T[i] + "]";
            } else {
                resultado += "[ ]";
            }
        }
        console.log(resultado);
        let opcion = prompt("0 para volver a elegir conjunto ");
        if (opcion === "0") break;
    }
}
function mostrarE(){
    while (true) {
        let resultado = "Conjunto E ";
        for (let i = 0; i < 15; i++) {
            if (i < E.length) {
                resultado += "[" + E[i] + "]";
            } else {
                resultado += "[ ]";
            }
        }
        console.log(resultado);
        let opcion = prompt("0 para volver a elegir conjunto ");
        if (opcion === "0") break;
    }
}
function mostrarO(){
    while (true) {
        let resultado = "Conjunto O ";
        for (let i = 0; i < 15; i++) {
            if (i < O.length) {
                resultado += "[" + O[i] + "]";
            } else {
                resultado += "[ ]";
            }
        }
        console.log(resultado);
        let opcion = prompt("0 para volver a elegir conjunto ");
        if (opcion === "0") break;
    }
}
