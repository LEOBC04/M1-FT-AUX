const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
      
    var curr = this.head;
    var count = this.len;

    if ( curr === null) return 0;

    return count;
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
    // Tu código aca:
    let current = this.head;
    let newArr = []
    while (current) {
      newArr.push(current.value);
      current = current.next
    }
    newArr = newArr.sort((a,b)=>b-a);
    current = this.head;

    for (let i = 0; i < newArr.length; i++) {
      current.value = newArr[i];
      current = current.next
    }
 
  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 0
   
  // 1-->2-->3-->2.5-->4   2.5 pos=1  newnodo= 2.5-->4   curr=3   
 LinkedList.prototype.insert = function(data,pos) {

  if (this.len < pos) return this.add(data)
  let newNode = new Node(data)

    if (pos ==1) {
      newNode.next = this.head
      this.head = newNode
    }

    let current = this.head
    while (pos>1) {
      pos--;
      current = current.next
    }

    newNode.next = current.next;
    current.next = newNode;
    this.len++
  }
	

  




module.exports={
  LinkedList
}
/*let counter = 1;
        let current = this.head;
        let aux = current.next;
        var newNode = new Node(data)
        //Si pos= 0
    
        if (pos === 0) {
          this.head = newNode;
          newNode.next = current;
        }

        //Si pos es diferente de cero 

        while (current.next) {
            if (counter === pos){
                current.next = newNode;
                newNode.next = aux;
                return;
            }
            current =current.next;
            aux= aux.next
        }
        this.len++ */


