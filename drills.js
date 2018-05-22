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
// console.log(doYouEvenBST(main()));


function findLargest(tree){
  if(!tree.right){
    return tree;
  }
  return findLargest(tree.right);
}

function find3rdLargest(tree, second=0){
  const largest=findLargest(tree);
  let surrounding= tree.find(largest.key);

  if(second!==0){
    let secondLargest=tree.find(second);
    let largestLeft= surrounding.left;

    if(second.right && second.left && second.parent){
      let parent=second.parent;
      let left= surrounding.left;
      let right= surrounding.right;

      let biggestAround2nd=Math.max(parent.value, left.value, right.value);
      return Math.max(biggestAround2nd, largestLeft);
    }

    if(!second.right && second.left && second.parent){
      let parent=second.parent;
      let left= surrounding.left;

      let biggestAround2nd=Math.max(parent.value, left.value);
      return Math.max(biggestAround2nd, largestLeft);
    }

    if(second.right && !second.left && second.parent){
      let parent=second.parent;
      let right= surrounding.right;
  
      let biggestAround2nd=Math.max(parent.value, right.value);
      return Math.max(biggestAround2nd, largestLeft);
    }


  }
  if(surrounding.parent && surrounding.left){
    let parent= surrounding.parent;
    let left= surrounding.left;

    let bigger= Math.max(parent, left);
    return find3rdLargest(tree, second+=bigger);
  }

}
console.log(find3rdLargest(main()));

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
// console.log(balancedBST(tree));