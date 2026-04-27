const prompt=require("prompt-sync")();
let opUsuario = -1;
let llenador,ordenador;
let M=[];let A=[];let T=[];let E=[];let O=[];
do {
    menu();
    opUsuario = parseInt(prompt(""));
    console.clear();
    if (opUsuario < 0 || opUsuario > 11) {
        opcionInvalida();
        opUsuario=-1;
    } else {
        switch (opUsuario) {
            case 1:
                elegir()
                let opUsuarioI=prompt("eliga con cual arreglo quire trabajar: ").toLowerCase();
                console.clear()
                switch(opUsuarioI){
                    case "m":
                        llenador=M
                        CrearManualmente(llenador)
                        break;
                    case "a":
                        llenador=A
                        CrearManualmente(llenador)
                        break;
                    case "t":
                        llenador=T
                        CrearManualmente(llenador)
                        break;
                    case "e":
                        llenador=E
                        CrearManualmente(llenador)
                        break;
                    case "o":
                        llenador=O
                        CrearManualmente(llenador)
                        break;
                }
                break;
            case 2:
                elegir()
                let opUsuarioT=prompt("eliga con cual arreglo quire trabajar: ").toLowerCase();

                switch(opUsuarioT){
                    case "m":
                        llenador=M
                        crearAleatorio(llenador)
                        console.log(M)
                        break;
                    case "a":
                        llenador=A
                        CrearManualmente(llenador)
                        break;
                    case "t":
                        llenador=T
                        CrearManualmente(llenador)
                        break;
                    case "e":
                        llenador=E
                        CrearManualmente(llenador)
                        break;
                    case "o":
                        llenador=O
                        CrearManualmente(llenador)
                        break;
                }
                break;
            case 3:
                elegir()
                let opUsuarioK=prompt("eliga con cual arreglo quire trabajar: ").toLowerCase();
                switch (opUsuarioK){
                    case "m":
                        ordenador=M
                        selectionSort(ordenador)
                        break;
                    case "a":
                        ordenador=A
                        selectionSort(ordenador)
                        break;
                    case "t":
                        ordenador=T
                        selectionSort(ordenador)
                        break;
                    case "e":
                        ordenador=E
                        selectionSort(ordenador)
                        break;
                    case "o":
                        ordenador=O
                        selectionSort(ordenador)
                        break;
                }
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            case 11:
                break;
            case 0:
                let opUsuario6=0;
                console.log("Estas seguro que deseas salir? ");
                console.log("1-Si salir. ");
                console.log("2-No volver al menu principal. ");
                opUsuario6 = parseInt(prompt(''));
                console.clear();
                if (opUsuario6 == 1) {
                    console.log("Nos vemos...")
                    opUsuario=0;
                }else if (opUsuario6 == 2) {
                    console.log("Volviendo...");
                    opUsuario=-1;
                }else{
                    opcionInvalida();
                }
                break;
        }
    }

} while (opUsuario !== 0);







function menu(){
    console.log("----------------- MENU PRINCIPAL -----------------");
    console.log("*   1-Crear Conjunto Manualmente                 *");
    console.log("*   2-Crear Conjunto Aleatorio                   *");
    console.log("*   3-Ordenar Conjunto (Asc/Desce)               *");
    console.log("*   4-Buscar en Conjunto                         *");
    console.log("*   5-Mostrar Conjunto                           *");
    console.log("*   6-Mostrar Union de conjuntos                 *");
    console.log("*   7-Mostrar Interseccion de Conjuntos          *");
    console.log("*   8-Mostrar Diferencia de Conjuntos            *");
    console.log("*   9-Mostrar Difrencia Simetrica de Conjuntos   *");
    console.log("*   10-Mostrar Complemento de Conjuntos          *");
    console.log("*   11-Analisis de Conjunto                      *");
    console.log("*   0-Salir                                      *");
    separar()
}
function separar(){
    console.log("-----------------------------");
}
function opcionInvalida(){
    console.log("la opcion ingresada no es valida. ")
}
function ArribaAbajo(){
    console.log("1 para Ascendente / 2 para Descendente")
}

function elegir(){
    console.log("*Seleccione el conjunto*")
    console.log("*    M - Conjunto M    *")
    console.log("*    A - Conjunto A    *")
    console.log("*    T - Conjunto T    *")
    console.log("*    E - Conjunto E    *")
    console.log("*    O - Conjunto O    *")
}
function CrearManualmente(llenador){
    for (let i = 0; i <= 14; i++) {
        let valor
        let repetido
        do {
            valor = parseInt(prompt("ingrese el valor " + (i+1) + " de su arreglo"));
            repetido = 0
            for (let j = 0; j < i; j++) {
                if (llenador[j]=== valor) {
                    repetido=1;
                    console.log("el valor ya esta en el arreglo")
                    break;
                }
            }

        }while(repetido!==0)
        llenador[i]=valor
    }
}
function crearAleatorio(llenador){
    for (let i = 0; i <= 14; i++) {
        let valor
        let repetido
        do {
            valor =Math.floor(Math.random()*99+1);
            repetido = 0
            for (let j = 0; j < i; j++) {
                if (llenador[j]=== valor) {
                    repetido=1;
                    console.log("el valor ya esta en el arreglo")
                    break;
                }
            }
        }while(repetido!==0)
        llenador[i]=valor
    }
}
function selectionSort(ordenador) {
    let n = ordenador.length;
    let AsDes=parseInt(prompt("1 para ascendente, 2 para decendente: "))
    if (AsDes===1) {
        for (let i = 0; i < n - 1; i++) {
            let min = i;
            for (let j = i + 1; j < n; j++) {
                if (ordenador[j] < ordenador[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                [ordenador[i], ordenador[min]] = [ordenador[min], ordenador[i]];
            }
        }
    }else if(AsDes===2){
        for (let i = 0; i < n - 1; i++) {
            let max = i;
            for (let j = i + 1; j < n; j++) {
                if (ordenador[j] > ordenador[max]) {
                    max = j;
                }
            }
            if (max !== i) {
                [ordenador[i], ordenador[max]] = [ordenador[max], ordenador[i]];
            }
        }
    }
    return ordenador;
}