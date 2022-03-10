'use strict'

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //       [5, 1, 4, 2, 8]
  //        i
  //          i+1 
  //aux = 5
  let flag = true;

  while (flag){
    flag = false;
    for (let i = 0; i < array.length - 1; i++){
      if (array[i] > array[i+1]) {
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        flag = true;
      }
    }
  }
 return array; 
};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //       [1, 2, 4, 5, 8]
  //                 i
  //       j 
  //aux = 2

  for ( let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];

    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
 return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //       [5, 1, 4, 2, 8]
  //        i
  //          j 
  //min = 0
   for( var i = 0; i < array.length-1; i++){
    var min = i;
    for( var j = i + 1; j < array.length; j++){
      if(array[j] < array[min]){
        min = j;
      }
    }
    var aux = array[i]
    array[i] = array[min]
    array[min] = aux;
   }
   return array;
}


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //[5, 1, 4, 2, 8]
  //if (array.length === 1)return array;
  if (array.length === 0 || array.length === 1) return array;
  let pivot = array[0]
  let left = [];
  let right = [];
  let newArr = [];

  for ( let i = 1; i < array.length; i++){
    if (array[i] <= pivot){
      left.push(array[i])
    }else{
      right.push(array[i])
    }
  }

  
   return newArr.concat(quickSort(left),pivot,quickSort(right))

}


// [9,13,15] [35,88]
//       i    j
//[9,13]

function merge (arr1, arr2) {
let i = 0;
let j = 0;
var result = [];

while (i < arr1.length && j < arr2.length){
  //comparo y pusheo a result
  if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
  }else{
    result.push(arr2[j])
      j++
  }
}
return result.concat(arr1.slice(i)).concat(arr2.slice(j))
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //[5, 1, 4, 2, 8]
  //[5,1] [4,2,8]
  //[1,5][2,4,8]
  //CASO BASE: 
  if ( array.length === 1) return array;

  let middle = Math.floor((array.length)/2)
  let left = array.slice(0,middle)
  let right = array.slice(middle)

return merge(mergeSort(left), mergeSort(right)) 
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};

//--------------------------------------------------------------------------------------------------------------------------
/*
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0;i<array.length;i++){      
    for(let j=0;j<array.length-1;j++){
      if(array[j]>array[j+1]){
        let bubble=array[j];
        array[j]=array[j+1];
        array[j+1]=bubble;
      };
    };
  } ;
  return array;
};

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i=1;i<array.length;i++){ 
    var aux=array[i]
    for(let j=0; j<i;j++){
      if(aux<array[j]){
        aux=array[j]
        array[j]=array[i]
        array[i]=aux;
      }
    }
    
  } ;
  return array;

}




*/