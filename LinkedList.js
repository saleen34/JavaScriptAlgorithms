function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(data) {
  var newNode = {
    data: data,
    next: null
  };

  if (!this.head) {
    this.head = newNode;
    return;
  }

  var currentNode = this.head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
};


LinkedList.prototype.find = function(data) {
  if (!this.head) {
    return false;
  }

  var currentNode = this.head;
  while (currentNode) {
    if (data === currentNode.data) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return false;
};

LinkedList.prototype.findMiddle = function() {
  if (!this.head) {
    return false;
  }

  var currentNode = this.head;
  var twoUp = null;
  var previousNode = null;
  while (currentNode) {
    if (!currentNode.next.next.next) {
      return previousNode;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
};

LinkedList.prototype.delete = function(data) {
  if (!this.head) {
    return false;
  }

  var currentNode = this.head;
  var previousNode = null;

  while (currentNode) {
    if (data === currentNode.data) {
      //we have a next/next element
      if (previousNode && currentNode.next) {
        previousNode.next = currentNode.next;
      } else if(currentNode.next) {
        this.head = currentNode.next;
      } else {
        previousNode.next = null;
      }

      currentNode = null;
      return;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
};

var list = new LinkedList();
list.add('node 1');
list.add('node 2');
list.add('node 3');
list.add('node 4');
list.add('node 5');
list.add('node 6');
list.add('node 7');
list.add('node 8');

//list.delete('node 4');
console.log(list.findMiddle());

//console.log(list);

