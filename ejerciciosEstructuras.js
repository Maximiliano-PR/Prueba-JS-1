//Ejercicio 1 notas de los alumnos; 0-3: Muy deficiente 3-5: Insuficiente 5-6: Suficiente 6-7: Bien 7-9: Notable 9-10: Sobresaliente

function notasAlumnos(){
    let entrada = prompt("Ingrese la nota del alumno");

    switch(true){

        case entrada >= 0 && entrada < 3:
            alert("Nota insuficiente");
            break;
        case entrada >= 3 && entrada < 5:
            alert("Nota muy deficiente");
            break;
        case entrada >= 5 && entrada < 6:
            alert("Nota Insuficiente");
            break;
        case entrada >= 6 && entrada < 7:
            alert("Nota Suficiente");
            break;
        case entrada >= 7 && entrada < 9:
            alert("Buena Nota");
            break;
        case entrada >= 9 && entrada <= 10:
            alert("Nota Sobresaliente");
            break;
        default:
            alert("La nota ingresada no entra en el rango de evaluación");

    }

}

//Ejercicio 2 Los días de los meses; indique si el mes tiene 30 o 31 dias

function cantidadMeses(){
    let entrada = prompt("introduzca el mes utilizando su número correspodiente y le dire la cantidad de dias que posee: ");
    entrada = parseInt(entrada);
    switch(entrada){
        case 1:
            alert("El mes de Enero tiene 31 días");
            break;
        case 2:
            alert("El mes de Febrero tiene 29 días");
            break;
        case 3:
            alert("El mes de Marzo tiene 31 días");
            break;
        case 4:
            alert("El mes de Abril tiene 30 días");
            break;
        case 5:
            alert("El mes de Mayo tiene 31 días");
            break;
        case 6:
            alert("el mes de Junio tiene 30 días");
            break;
        case 7:
            alert("El mes de Julio tiene 31 días");
            break;
        case 8:
            alert("El mes de Agosto tiene 31 días");
            break;
        case 9:
            alert("El mes de Septiembre tiene 30 días");
            break;
        case 10:
            alert("El mes de Octubre tiene 31 días");
            break;
        case 11:
            alert("El mes de Noviembre tiene 30 días");
            break;
        case 12:
            alert("El mes de Diciembre tiene 31 días");
            break;
        default:
            alert("No es una entrada valida");
    }

}

//ejercicio 3 script que indique si un numero es positivo o negativo, debe terminar si el numero ingresado es 0

function buclePostivoNegativo(){
    let entrada = prompt("Ingrese un número y la página indicara si es positivo o negativo, si ingresa 0 el programa finaliza");
    while(entrada != 0){

        if(entrada > 0){
            alert("El núnero es postivo");
        }
        else if(entrada < 0){
            alert("El número es negativo");
        }
        else{
            alert("El valor ingresado no es un número, intente de nuevo");
        }

        entrada = prompt("Ingrese un número y la página indicara si es positivo o negativo");
    }

    if(entrada == 0){
        alert("Se ingreso 0, fin del programa");
    }
}



