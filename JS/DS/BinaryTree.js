class TreeNode {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

class BinaryTree {
  constructor (val) {
    this.root = new TreeNode(val);
  }

  add(value){
    const addData = (node) => {
      if(!node.left){
        node.left = new TreeNode(value);
      }else if(!node.right){
        node.right = new TreeNode(value);
      }
    }
    addData(this.root);
  }
}
