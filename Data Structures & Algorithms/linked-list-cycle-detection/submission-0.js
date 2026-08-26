/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const hash = new Set()

        let currentNode = head
   


        while(currentNode) {
            if(!currentNode){
                break
            }
            if(hash.has(currentNode.val)) {
                return true
            }

            hash.add(currentNode.val)
            currentNode = currentNode.next

        }

        return false
    }
}
