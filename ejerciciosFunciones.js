//ejercicio 1 ingresado por el usuario o declarado anteriormente, y mostrar por consola el tipo de dato que es

function tipoDato(){
    let entrada = prompt("ingrese el tipo de dato a analizar");

    if(entrada <= 0 || entrada >= 0){
        if(entrada % 2 == 0){
            entrada = parseInt(entrada);
            console.log(typeof(entrada));
            alert(typeof(entrada));
        }else{
            entrada = parseFloat(entrada);
            console.log(typeof(entrada));
            alert(typeof(entrada));
        }
    }
    else{
        console.log(typeof(entrada));
        alert(typeof(entrada));
    }

}

//ejercio 2 función que devuelva la resta de 2 puntos

function funcionResta(){
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    let Resultado = (num1 - num2); 
    alert(Resultado);
}

//ejercio 3 función que convierte grados Celsius

function conversionCaF(){
    let entrada = prompt("ingrese la temperatura en Celsius a transformar a Farenheit");
    entrada = ((entrada * (9/5)) + 32);
    alert(entrada);
}

