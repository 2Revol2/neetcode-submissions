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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {


        const dfs = (node1, node2) => {
            if(!node1 && !node2) {
                return true 
            }else if(!node1 && node2) {
                return false
            }else if(node1 && !node2) {
                return false
            }

            if(node1.val !== node2.val) {
                return false
            }

           let left = dfs(node1.left, node2.left) 
           let right =  dfs(node1.right, node2.right);

          return left && right
        }

        return dfs(p, q)
    }
}
