/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    
    isSameTree(node1, node2) {
        if(!node1 && !node2) {
            return true
        }else if(!node1 && node2) {
            return false
        }else if(!node2 &&  node1) {
            return false
        }

        if (node1.val !== node2.val) {
            return false;
        }

        const left =  this.isSameTree(node1.left, node2.left)
        const right =  this.isSameTree(node1.right, node2.right) 

        return left && right
    }

    search(node, subTree) {
        if (!node) {
            return false;
        }

        if(node.val === subTree.val) {
            if (this.isSameTree(node, subTree)) {
                return true;
            }
        }
        return this.search(node.left, subTree) || this.search(node.right, subTree)
    }

    isSubtree(root, subRoot) {
        return this.search(root, subRoot)
    }
}
