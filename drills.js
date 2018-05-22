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

console.log(main());