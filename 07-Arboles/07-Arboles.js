const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
BinarySearchTree.prototype.search= function(value){
    //Si el valor a buscar corresponde al primer nodo 
    if (value === this.value) return value;
    //Luego, comparo el valor de parametro con los hijos del nodo
    //Si el valor es mayor
    if ( value > this.value && this.right){//Buscamos por derecha
        return this.right.search(value);
    }
    //Si el valor es menor 
    if ( value < this.value && this.left){//Buscamos por izquierda
        return this.left.search(value);
    }

    return 'no se encontró el valor'
    }


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)  (9)  (11)  (15)   ----> nivel 2

BinarySearchTree.prototype.height= function(){
    let countLeft = 0;
    let countRight = 0;

    //primero recorro la derecha
    if (this.right){
        countRight = 1 + this.right.height()
    }
    //recorro la izquierda
    if (this.left){
        countLeft = 1 + this.left.height()
    }
    //Si no hay derecha ni izquierda
    if (!this.right && this.left ) return 0;

    if (countLeft > countRight){
        return countLeft
    } else { return countRight}

}

module.exports={
    BinarySearchTree
}