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

console.log(JSON.stringify(main()));


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
const tree={'key':0,'value':0,'left':{'key':1,'value':1,'left':null,'right':{'key':2,'value':2,'left':null,'right':null}}};
// console.log(doYouEvenBST(main()));


// function find3rdLargest1(tree){
//   let temporaryBST = new BinarySearchTree();
//   let next;
//   if(tree){
//     temporaryBST.insert(tree.key, tree.value);
//     find3rdLargest1(tree.left);
//     find3rdLargest1(tree.right);
//   }
//   while(temporaryBST.right!==null){
//     next=temporaryBST.right;
//     console.log('nexxxxtttt', next);
//     if(next.parent && next.parent.parent)
//   }
  
 

// }
// console.log(find3rdLargest1(main()));

function findSmallestBranch(tree){
  if (!tree) return 0;
  if(!tree.left && !tree.right) return 1;

  let leftHeight = findSmallestBranch(tree.left);
  let rightHeight = findSmallestBranch(tree.right);
      
  return Math.min(leftHeight, rightHeight) + 1;
}

function balancedBST (tree){
  let max= height(tree);
  let min= findSmallestBranch(tree);

  if(max-1 > min){
    return false;
  }
  else{
    return true;
  }
}
console.log(balancedBST(tree));