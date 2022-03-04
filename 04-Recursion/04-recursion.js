// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10
// producto([7, 2, 5]) devuelve 70
const producto = function (array) {
  //escribe aqui tu codigo
  let product = 0;
  if (array.length === 1) {
    product = array.shift()
  }
    while (array.length) {
      product = array.shift() * producto(array)
    }
  return product;
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
const isThere = function (obj, value) {
  //escribe aqui tu codigo
  let aux = 0;
  let test = Object.keys(obj)

  if (typeof obj[test[0]] === 'object') {
    aux = isThere(obj[test], value)
  }else{
    
    for (let i = 0; i < test.length; i++){
      if (obj[test[i]] == value) {
        aux = true;
        return aux}
      } 
      if (aux === 0) {
        aux = false;
        return false
      }
  } 
  return aux
}


module.exports = { producto, isThere };
