//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function esParOImpar (numero){

}

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " Es un número es par.");
    } else {
        console.log(numero + " Es un número es impar.");
    }
}

esParOImpar(36)
esParOImpar (77)


//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function CualesMayorOMenor (numero1, numero2){

}

function  CualesMayorOMenor (numero1, numero2){
    if (numero1 < numero2){
        console.log (numero1 + " Es menor que " + numero2);
    }
    else if (numero1 > numero2){
        console.log (numero1 + " Es mayor que " + numero2);
    }
    else if (numero1 === numero2){
        console.log (numero1 + " Es igual a " + numero2 + " che")
    }
}

CualesMayorOMenor (3,5);
CualesMayorOMenor (7, 33);
CualesMayorOMenor (55,2);
CualesMayorOMenor (2,2);
CualesMayorOMenor (10,10)

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function EsMultiplode5 (numero){

}

function EsMultiplode5 (numero){
    if (numero % 5 === 0){
        return true;
    } else{
        return false;
    }
}

console.log (EsMultiplode5(15))
console.log (EsMultiplode5(9))


//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function Sumando (numero){

}

function Sumando (numero){
    for (let i = 0; i <= numero; i ++){
        console.log(i)
    }
}

Sumando (13);



//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function PalabraAndNumber (palabra, veces){

}

function PalabraAndNumber (palabra,veces){
    for (let i = 0; i < veces; i++){
        console.log (palabra)
    }

}

PalabraAndNumber ("NUCBA", 7)
PalabraAndNumber ("Arranca o no Arranca?", 3)
PalabraAndNumber ("SISISISISISIIIIIEEEEMPRE ARRANCA", 4)



//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.


function AverQueHayAca (array) {
    for (let i = 0;  i < array.length; i++) 
    console.log (array[i]);
}

AverQueHayAca (["María", "Pato", "Paco"])

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function TodosLosValores (array) {
    for (let i=0; i<11; i++){
        if (i === 5){
            continue
        }
        console.log (i)
    }
    
}

TodosLosValores ([0,1,2,3,4,5,6,7,8,9,10])

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function Multipliqueishon (array, numMultiplicar){
    for (let i =0; i<array.length;i++){
        console.log (array [i] * numMultiplicar)
    }

}

let array = [2,4,5];
let numMultiplicar = 2;
Multipliqueishon (array, numMultiplicar);


