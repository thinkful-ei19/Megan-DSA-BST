'use strict';
const BinarySearchTree= require('./binary-serach-tree');

function main(){
  const BST = new BinarySearchTree();

  BST.insert(3,3);
  BST.insert(1,1);
  BST.insert(4,4);
  BST.insert(6,6);
  BST.insert(9,9);
  BST.insert(2,2);
  BST.insert(5,5);
  BST.insert(7,7);

  return BST;
}

// console.log(JSON.stringify(main()));


function height(tree) {
  if (!tree) return 0;
  if(!tree.left && !tree.right) return 1;

  let leftHeight = height(tree.left);
  let rightHeight = height(tree.right);
      
  return Math.max(leftHeight, rightHeight) + 1;
      
}
// console.log(height(main()));

function doYouEvenBST(tree){ 
  if(!tree){
    return false;
  }

  if(tree.left && tree.right){
    if(tree.left.value>tree.value || tree.right.value < tree.value){
      return false;
    }
    else{
      return doYouEvenBST(tree.left) && doYouEvenBST(tree.right);
    }
  }

  if(!tree.left){
    if(!tree.right){
      return true;
    }
    if(tree.right){
      if(tree.right.value < tree.value){
        return false;
      }
      else{
        return doYouEvenBST(tree.right);
      }
    }
    
  }

  if(!tree.right){
    if(!tree.left){
      return true;
    }
    if(tree.left){
      if(tree.left.value > tree.value){
        return false;
      }
      else{
        return doYouEvenBST(tree.left);
      }
    }
  }

}
const tree={'key':0,'value':0,'left':{'key':1,'value':1,'left':null,'right':{'key':2,'value':2,'left':null,'right':null}},'right':{'key':4,'value':4,'left':null,'right':null}};
console.log(doYouEvenBST(main()));

