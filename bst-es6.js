class BST {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }

  AddNode(tree, node) {
    if (tree) {
      if (node.value > tree.value) {
        if (tree.right) {
          this.AddNode(tree.right, node);
        } else {
          tree.right = node;
        }
      } else if (node.value < tree.value) {
        if (tree.left) {
          this.AddNode(tree.left, node);
        } else {
          tree.left = node;
        }
      } else {
        tree = node;
      }
    }
  }

  FindHeight(tree) {
    if (!tree) {
      return false;
    }
    var left = 1 + this.FindHeight(tree.left);
    var right = 1 + this.FindHeight(tree.right);
    return Math.max(left, right);
  }

  FindByValue(node, value) {

    var found = false;
    console.log('value ', value);
    console.log('node.value ', node.value);
    if (value === node.value) {
      found = true;
    } else if (value < node.value && node.left) {
      console.log('left');
      this.FindByValue(node.left, value);
    } else if (value > node.value && node.right) {
      console.log('right');
       this.FindByValue(node.right, value);
    }
    return found;
  }
}

var b = new BST();
b.AddNode(b, new BST(500));
b.AddNode(b, new BST(700));
b.AddNode(b, new BST(400));
b.AddNode(b, new BST(900));

//console.log(b.FindHeight(b));
//console.log(b);
console.log(b.FindByValue(b, 700));
