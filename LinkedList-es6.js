class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  getNode(value) {
    return {
      value: value,
      next: null
    };
  }

  add(value) {

    var newNode = this.getNode(value);
    this.count++;
    if (!this.head) {
      this.head = newNode;
      return;
    }

    var current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  find(value) {
    if (!this.head) {
      return false;
    }

    var current = this.head;
    while (current) {
      if (value === current.value) {
        return current;
      }
      current = current.next;
    }
  }

  findMiddle() {
    if (!this.head) {
      return false;
    }

    //There is no middle
    if (this.count % 2 === 0) {
      return false;
    }

    if (this.count < 3) {
      return false;
    }

    var current = this.head;
    var prev = current;

    while (current) {
      if (!current.next) {
        return prev;
      }
      prev = prev.next;
      current = current.next.next;
    }
  }
}

var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(7);
ll.add(8);
ll.add(9);
ll.add(10);
ll.add(11);
ll.add(12);
ll.add(13);

//console.log(ll.find(2));
console.log('FINAL-- ', ll.findMiddle());
//console.log(ll);
