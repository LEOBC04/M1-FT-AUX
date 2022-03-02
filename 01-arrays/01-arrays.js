
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
   /* let reverse = []
    for (let i = 0; i < array.length; i++) {
        if ( array[i] < 10) {reverse.unshift(array[i])}
    }
    return reverse; */
    let newArray =[];

    array.forEach(element => {
        if (element <10) 
        newArray.unshift(element)
    })
    
    return newArray;
}
    


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    /*let common = 0;
   for ( let i = 0; i < array1.length; i++) {
       for ( let j = 0; j < array2.length; j++ ) {
            if (array1[i] === array2[j]) {
                common = array1[i]
                return common;
            }
       }
   }

   let smaller1 = array1[0];
   let smaller2 = array2[0];

   for (let i = 1; i < array1.length; i++) {
        if (array1[i] < smaller1) {
            smaller1 = array1[i]
        }
   }

   for (let i = 1; i < array2.length; i++) {
    if (array2[i] < smaller2) {
        smaller2 = array2[i]
    }
}

    if (smaller1 < smaller2) {
        return smaller1;
    } else {return smaller2} */

    let aux;
    let current =0;

    array1.forEach(element1 => {
        if (element1 < current || current ===0) {
            current = element1
        }
        array2.forEach (element2 =>{
            if (element1 === element2) {
                aux = element1
            }
            if (element2 < current) {
                current = element2
            }
        });
    });
    if (!aux) return current
    return aux
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
   /*let newArray = [];

   array.forEach(element => {
       if (Array.isArray(element)) {
           let suma = 0;

           element.forEach(e => {
               suma += e
           });

           newArray.push(suma)
       } else {
           newArray.push(element)
       }
   });
   return newArray
}*/
   
    let newArray = [];
   let sum = 0;

   for (let i = 0; i < array.length; i++) {
       if (typeof array[i] === "object") {
           sum = 0;
           array[i].forEach(suma);
           function suma (item) {
                sum += item;
           }
           newArray.push(sum)
       } else {
           newArray.push(array[i])
       }
   }
   return newArray;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
   let newArray = [];

   if (numero % divisor != 0) {
       return false;
   } else {
       for (let i = 1; i <= divisor; i++) {
       newArray.push(numero/divisor)}
   }
   return newArray;
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    let newArray = [];
    let smaller = array[0];
    let higher = array[0];

    for (let i = 1; i < array.length; i++) {
       if (array[i] < smaller) {
           smaller = array[i]
       } 
    }

    newArray.push(smaller);

    for (let j = 1; j < array.length; j++) {
        if (array[j] > higher) {
            higher = array[j]
        } 
     }

    newArray.push(higher);
    return newArray; 
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};