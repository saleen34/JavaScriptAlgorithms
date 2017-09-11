function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function AddNode(tree, node) {
  if (tree) {
    if (node.value > tree.value) {
      if (tree.right) {
        AddNode(tree.right, node);
      } else {
        tree.right = node;
      }
    } else if (node.value < tree.value) {
      if (tree.left) {
        AddNode(tree.left, node);
      } else {
        tree.left = node;
      }
    }
  } else {
    tree = node;
  }
  return tree;
}

function findHeight(node) {
  if (!node) {
    return 0;
  } else {
    var left = 1 + findHeight(node.left);
    var right = 1 + findHeight(node.right);
    return (Math.max(left, right));
  }
}

function FindByValue(node, val) {
  if (val < node.value) {
    if (node.left) {
      FindByValue(node.left, val);
    } else {
      return null;
    }
  } else if (val > node.value) {
    if (node.right) {
      FindByValue(node.right, val);
    } else {
      return null;
    }
  }
  return node;
}

function InOrder(node) {
  if (node) {
    InOrder(node.left);
    console.log(node.value);
    InOrder(node.right);
  }
}

function PreOrder(node) {
  if (node) {
    console.log(node.value);
    PreOrder(node.left);
    PreOrder(node.right);
  }
}

function PreOrder(node) {
  if (node) {
    PreOrder(node.left);
    PreOrder(node.right);
    console.log(node.value);
  }
}

var tree = AddNode(tree, new Node(200));
tree = AddNode(tree, new Node(100));
tree = AddNode(tree, new Node(300));
tree = AddNode(tree, new Node(700));
tree = AddNode(tree, new Node(800));
tree = AddNode(tree, new Node(500));
tree = AddNode(tree, new Node(100000));

//var h = findHeight(tree);
console.log(FindByValue(tree, 303430));
//InOrder(tree);
//PreOrder(tree);

//console.log(n);
//console.log(h);
//console.log(tree);