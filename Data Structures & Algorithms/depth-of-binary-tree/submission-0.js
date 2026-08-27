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
     * @return {number}
     */
    maxDepth(root) {
        if(!root) {
            return 0
        }

        let maxLength = 1;
        const stack = [[root, 1]];

        while(stack.length) {
           const [node, depth] = stack.pop()

            if(!node.left && !node.right) {
                maxLength = Math.max(maxLength, depth)
            }

            if(node.left) {
                stack.push([node.left, depth+1])
            }

            if(node.right) {
                stack.push([node.right, depth+1])
            }

        }

        return maxLength
    }
}
