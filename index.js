//------------------------- PRÁCTICA BUCLES FOR---------------------------------//

// SINTAXIS BÁSICA: for (expresion inicial; condición, expresión final){
                            //lo que quiero que haga dentro del bucle
                            //}
//} SE USA CUANDO YO YA SE CUANTAS VECES SE VA A REPETIR ALGO

//E1: imprimir los números del 1  al 5  

/* for (let i = 1; i <=  5; i ++){
    console.log(i)
} */

//E2: imprimir los números del 0 al 10



// E3: imprimir los números pares del 2 al 10


/* for (let i = 2; i <= 10; i += 2) {
    console.log(i);
} */

// E4: imprimir los números del 1 al  10

/* for (let  i = 1;  i <=  10; i ++){
    console.log(i)
} */

//E5: imprimir los números del 10 al 1

/* for (let i=10; i  >= 1; i-- ){
    console.log (i)
} */

// E6: imprima los números del 9 al 0 y que consoloee  "Despegue"

/* for (let  i =9; i >= 0; i --){
    console.log (i)
    if  (i=== 9){
        console.log ('Despegueeeeee');
    }
}
*/

// E7:  imprima los números de 5 a 10 y que consolee "Aguantaaa" en el 10 y "soy un 7 pá"  en 7  

/* for (let i=5; i <=  10; i++){
    console.log(i);
    if (i === 7){
        console.log('Soy un 7 pá')
    } else if (i  === 10){ // "else if guarda el resultado en una variable"
        console.log ('Aguantaaa')
    }

} */

// E8:  Sumar números del 1 al 6

/* let suma = 0; //Defino desde cuando va a comenzar suma, en este caso vale 0. 

for (let i = 1; i <= 6; i++){
    suma += i;
}
  
console.log(suma) */  // Consoleo la let  suma para imprimir resultado. 

//E9: Sumar los números del 1 al 4

/* let suma = 0;

for (let i =1;  i <= 4; i++){
    suma  += i;
}
console.log(suma) */

//E10: Imprimir elementos de  un array

/* let animales = ['vaca', 'caballo', 'zorro']

for (let i=0; i < animales.length; i++){
    console.log(animales[i]) //Si quiero que consolee todo pongo i, si quiero que imprima solo  1 paso índice 0=vaca 2=zorro. 
} */

//E11: Imprimir los primeros 3 elementos de un array  

//let elementsCocina = ['cuchara', 'taza', 'sartén', 'Olla',  'tetera']

//for ( let i = 0; i < elementsCocina.length; i ++){
//    console.log (elementsCocina.slice (0,3))   UTILIZO.SLICE PARA PODER ACCEDER A MOSTRAR LO QUE YO QUIERO DE ESE ARRAY, EN ESTE CASO, LOS PRIMEROS 3 ELEMENTS
//} 


// E12: interrumpir un ciclo evitando que el contador llegue a 9


/* for (let i = 0; i < 10; i++){
    if (i === 9){
        break
    }
    console.log (i)
} */

// E13: saltear todos los números pares del o al 20

//for (let i = 0; i <= 20; i++){
//    if (i % 2 === 0){
//        continue
//    }
//    console.log (i)
//}

// E14: saltear todos los numeros impares del 0 al 30

//for (let i = 0; i <= 30; i++){
//    if (i % 3 === 0){
//        continue
//    }
//    console.log(i)
//}

// E15: imprimir tabla de multiplicar de 3

//const numero = 2;

//for (let i = 0; i <= 10; i++){
//    console.log (`${numero} x ${i} = ${numero * i}`) 
//}

// E16: imprimir tabla de multiplicar de 5

//const numero =5;

//for (let i =0; i <= 10; i++){
//    console.log (`${numero} x ${i} da como resultado ${numero * i} `)
//}

// E17: invertir una cadena de texto

//const texto = `Hola Mundaso`;
//let textoInvertido = "";

//for (let i = texto.length -1; i >= 0; i--){
    //textoInvertido += texto [i];
//}
//console.log(textoInvertido);







//------------------------- PRÁCTICA BUCLES WHILE---------------------------------//

// SINTAXIS wile(condition){ hace tal cosa} SE USA CUANDO NO SABEMOS LA CANTIDAD REAL DE REPETICIONES DE UN PROCESO. 


//E1: imprimir numeros del 1 al 20

//let i= 1;

//while  ( i <= 20){ // ACA PONER I Y EL NUMERO COMO CONDICION, como quiero que sea haasta 20 pongo menor e igual, si pongo menor imprime hasta el 19. 
//    console.log (i);
//    i ++; 
//}


// E2: imprimir cuenta atrás hasta 10 y que se rompa en 3

//let i = 10;

//while ( i >= 0){
//    console.log (i);
//    i --
//    if (i === 3){
//        break
//    }
//}

// E3: imprimir cuenta atras hasta 20 y que en 3 diga "se está por romper"

//let i = 20;

//while ( i >= 0){
//    console.log (i);
//    i --
//    if (i === 3){
//        console.log `Se estpa por romeeer`
//    }
//}

// E4: imprimir tabla de multiplicar del número dado

//const numero = 10;
//let i = 1;

//while (i <= 10){
//    console.log (`${numero} X ${i} = ${numero * i}`)
//    i ++
//}




//--------------------------   PRIMER ENTREGA FUNCTIONS -------------------------------//  

//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

//function esParOImpar (numero){

//}

//function esParOImpar(numero) {
//  if (numero % 2 === 0) {
//        console.log(numero + " Es un número es par.");
//    } else {
//        console.log(numero + " Es un número es impar.");
//    }
//} 

//esParOImpar(20)
//esParOImpar (3017)


//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

//function CualesMayorOMenor (numero1, numero2){

//}

/* function  CualesMayorOMenor (numero1, numero2){
    if (numero1 < numero2){
        console.log (numero1 + " Es menor que " + numero2);
    }
    else if (numero1 > numero2){
        console.log (numero1 + " Es mayor que " + numero2);
    }
    else if (numero1 === numero2){
        console.log (numero1 + " Es igual a " + numero2 + " che")
    }
} */

/* CualesMayorOMenor (3,5);
CualesMayorOMenor (7, 33);
CualesMayorOMenor (55,2);
CualesMayorOMenor (2,2);
CualesMayorOMenor (10,10) */


//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

/* function EsMultiplode5 (numero){

}

function EsMultiplode5 (numero){
    if (numero % 5 === 0){
        return true;
    } else{
        return false;
    }
} */
/* 
console.log (EsMultiplode5(15))
console.log (EsMultiplode5(9)) */


//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

/* function Sumando (numero){

}

function Sumando (numero){
    for (let i = 0; i <= numero; i ++){
        console.log(i)
    }
}

Sumando (13); */



//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

/* function PalabraAndNumber (palabra, veces){

}

function PalabraAndNumber (palabra,veces){
    for (let i = 0; i < veces; i++){
        console.log (palabra)
    }

}

PalabraAndNumber ("NUCBA", 7)
PalabraAndNumber ("Arranca o no Arranca?", 3)
PalabraAndNumber ("SISISISISISIIIIIEEEEMPRE ARRANCA", 4) */



//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.


/* function AverQueHayAca (array) {
    for (let i = 0;  i < array.length; i++) 
    console.log (array[i]);
}

AverQueHayAca (["María", "Pato", "Paco"]) */

 //7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

/* function TodosLosValores (array) {
    for (let i=0; i<11; i++){
        if (i === 5){
            continue
        }
        console.log (i)
    }
    
}

TodosLosValores ([0,1,2,3,4,5,6,7,8,9,10])  */

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

/* function Multipliqueishon (array, numMultiplicar){
    for (let i =0; i<array.length;i++){
        console.log (array [i] * numMultiplicar)
    }

}

let array = [2,4,5];
let numMultiplicar = 2;
Multipliqueishon (array, numMultiplicar);
*/

//const AlertHola = (nombre) =>{
//    return alert (`hola ${nombre}`)
//}

//nombre = "Juan"




//--------------------------   PRÁCTICA CREACIÓN DE OBJETS -------------------------------//

//let persona = {
//    nombre: "Micaela",
//    edad: 26,
//    comida: "sorrentinos de jyq",
//    cursos : ["desarrollo web", "diseño UX/UI", "ProgramaciónFull Stack"]
//}
//console.log(persona.cursos); // el console debe hacerse por fuera de {} del objet

//persona.apodo = "gordini" // así puedoa gregar datos
//persona.computadora = "mac" 

//console.log(persona);

// -------------------------------- METODOS DE OBJETOS -----------------------------------//

//////////////////////////// Object.entries //////////////////// SI QUIERO QUE ME MUESTRE TODOS LOS     ELEMENTOS

//let entradas = Object.entries (persona);
//console.log(entradas);

//////////////////////////// Object.values ////////////////////   SI QUIERO QUE ME MUESTRE SOLO LOS    VALORES     DEL ARRAY

//let valores = Object.values (persona);
//console.log (valores);


//////////////////////////// Object.keys ////////////////////   SI QUIERO QUE ME MUESTRE SOLO LAS     PROPIEDADES      DEL ARRAY

//let propiedades = Object.keys (persona);
//console.log (propiedades);

//////////////////////////// Spread Operator (...) ////////////////////  PARA COPIAR OBJETOS sin agregar valores nuevos

//let numeros1 = [1,2,3]
//let numeros2 = [...numeros1, 4, 5, 6]  /// Utilizo los ... para llamar a la variable deginida anteriormente. 
//console.log(numeros2);

//let recetaTorta = ["harina", "Huevos", "Azucar"]
//let ingredientesFaltantes = [...recetaTorta, "chips choco", "esencia de vainilla"]

//console.log (ingredientesFaltantes);

//let numeros1 = [1,2,3];
//let numeros2 = [4,5,6];
//let numeros3 = [222,444,67]
//let todosLosNumeros = [...numeros1,...numeros2,...numeros3];
//console.log (todosLosNumeros);

//////////////////////////// Desestructuración //////////////////// obtener de manera simple los valores de los elementos

// Con Arrays

//let numeros = [1,2,4]
//let [primerNumero, segundoNumero, tercerNumero] = numeros
//console.log(tercerNumero)

// con objetos

//let persona = {nombre: "Juan", edad: 30};
//let {nombre, edad} = persona
//console.log (nombre)

//let pajaros = ["ornero", "tucan", "pechito colorado"]
//let [primerPajaro, segundoPajaro, tercerPajaro] = pajaros

//console.log (tercerPajaro)



// -------------------------------- METODOS DE STRING -----------------------------------//

//////////////////////////// LENGTH ////////////////////  permite sabel el largo total de un string

//let miAuto = "Volkswagen"
//console.log (miAuto.length); 

//let miGato = "Blacky"
//console.log (miGato.length);

//let miPerra = "Satituuuuu"
//console.log(miPerra.length);

//////////////////////////// REPLACE    //////////////////// reemplazar la primer ocurrenciua de un caracter o de un grupo de caracteres por otros. 

//const texto = `Messi es el mejor jugador du MONNNDO`;
//console.log (texto);

//const nuevoTexto = texto.replace ("Messi" , "Pelé");
//console.log (nuevoTexto);

//const perros = `Los perros son los mejores amigos de la persona WEY`
//console.log (perros);

//const perrosNo = perros.replace ("perros", "gatos");
//console.log(perrosNo);

//const milanesas = `Las milanesas son lo mejor del mundo bro!`;
//console.log (milanesas);

//const milasNo = milanesas.replace (`son`, `ni ahí son `);
//console.log(milasNo);

//////////////////////////// REPLACE  ALL  //////////////////// permite reemplazar TODAS las ocurrencias que se repitan en el string

//const repito = `A veces cuando hablo repito yo repito y repito cada vez que hablo repito`;
//console.log (repito);

//const grito = repito.replaceAll (`repito`, `grito`);
//console.log (grito);

//onst salto = `Cuando salto salto para todos lados, no paro de saltar, de tanto salto salto`;
//console.log (salto);

//const viajo = salto.replaceAll (`salto`, `viajo`);
//console.log (viajo)

//////////////////////////// INDEX OF //////////////////// devuelve la posición donde estpá el elemento 
 

//const nombresPerros = ["Tobi", "Marquito", "Azu", "Toribio"]
//console.log (nombresPerros);

//const indiceMarquito = nombresPerros.indexOf ("Marquito")  // Recordá que Js es CaseSensitive. 
//console.log (indiceMarquito);



//////////////////////////// INDEX OF //////////////////// devuelve dónde está ubicado 1 elemento, siempre la primer ocurrencia


//////////////////////////// TRIM //////////////////// quitar los espacios ubicados  al principio y final del string

//////////////////////////// SPLIT //////////////////// dividir un String en un Array, separandolo con un caracter que enviamos

//let texto = "Hola*Mundaso";
//
//let textoDividido = texto.split (" ");
//
//console.log = (textoDividido);

//////////////////////////// TYPE OF //////////////////// detectar tipos de datos 

//let numeros = [1,2,3,4,]
//let nombre = ("Calos")
//let color = ("Azul")
//let casado = (true)
//
//console.log (typeof numeros); // ENTRE EL TYPEOF Y EL NOMBRE DE LA VARIABLE TIENE QUE  HABER UN ESPACIO, NO UN PUNTO.
//console.log (typeof casado);

//////////////////////////// REPEAT //////////////////// repetir un string la cantidad de veces que quiera

//let nombre = ("Tucho ") // acá tengo que dejar un espacio o una coma porque sino me imprime todo junto. 
//console.log (nombre.repeat(8));

//////////////////////////// CHAR AT //////////////////// permite obtener e caracter de la posicion index dentro del string

//const nombre = (`Macarena`);
//
//console.log (nombre chartAt (3));

//////////////////////////// CONCAT //////////////////// permite concatenar dos o más cadenas de string o arrays

//let numeros = [1,2,3,4]
//console.log (numeros.concat ([5,6,7])); // el nombre del array "numeros". concat
//
//console.log (numeros.concat ("Alta cuenta pá")); // se le puede sumar un string a la variable original. 

//////////////////////////// STARTS WITH //////////////////// detectar si la cadena string comienza con el string pasado como parámetro retorna V o F

//let texto = "Hola Mundo ";
//console.log (texto.startsWith ("Hola"));
//console.log (texto.startsWith("h")); // Js es casesensitive
//console.log (texto.startsWith("M"));

//////////////////////////// ENDS WITH //////////////////// para detectar si termina con lo que paso como parámetro

//let texto = ("Terminará así")
//console.log (texto.endsWith("í"));

//////////////////////////// INCLUDES VALUE //////////////////// Para ver si incluye algo que quiero valdidar

//const nombre = ("Toribio")
//const nums =  [1,2,3,4]
//
//console.log (nombre.includes("T"));
//console.log (nombre.includes("O")); // casesensitive
//console.log (nums.includes (5));

//////////////////////////// SLICE //////////////////// extraemos una porcion del string y nos devuelve un string nuevo

//const textoSlice = ("Veamos la consoleitor ")
//console.log (textoSlice.length);
//console.log (textoSlice.slice(0,7)); // "Veamos"
//console.log (textoSlice.slice(0,9)) //"Veamos la"



// crear una funcion que incluya 2 parametros 
// un parametro será un string y otro va a ser un string a buscar dentro del primer string
// el string debe buscarse, independientemente si es mayus o min
//si lo encuentra que diga "lo encontre"
// si no lo encuentra "no lo encontré"

//const checkList = ("String", "StringABuscar") => {
//    const stringMinus = (String.toLowerCase ());
//    const StringABuscar = (StringABuscar.toLowerCase);
//
//    const estaEnElString = (stringMinus.includes (StringABuscar));
//
//    if(estaEnElString){
//        console.log ("lo encontre")
//    }else {
//        console.log (`no ta ${StringABuscar}`)
//    }
//}
//
//console.log (checkList (`Hola soy Messi`, `string`));

// -------------------------------- METODOS DE ARRAYS-----------------------------------// indexOf - length - toString - concat  también se utilizan

//////////////////////////// JOIN //////////////////// podemos juntar todos los elementos de un array en un solo string

//const animalitos = ("gato", "pez", "buho")
//console.log (animalitos.join (" "));

//////////////////////////// REVERSE //////////////////// retorna un mismo array pero con los elementos invertidos

const animales = ["perro", "gato", "pez"];
console.log (animales.reverse());
console.log(animales);