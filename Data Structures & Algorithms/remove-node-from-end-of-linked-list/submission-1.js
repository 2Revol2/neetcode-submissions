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
     * @param {number} n
     * @return {ListNode}
     */
    getLength(node) {
        if (!node) {
            return 0;
        }

        let length = 0;
        let curr = node;

        while (curr) {
            curr = curr.next;
            length++;
        }
        return length;
    }

    removeNthFromEnd(head, n) {
        const length = this.getLength(head);
        let curr = head;
        let prev = null;
        let level = 0;

        while (curr) {
            if (length - level === n) {
                if (!prev) {
                    return head.next; 
                }
                prev.next = curr.next;
                break;
            }
            prev = curr;
            curr = curr.next;
            level++;
        }

        return head;
    }
}
