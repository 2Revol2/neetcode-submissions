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
    removeNthFromEnd(head, n) {
        const arr = [];
        let curr = head;

        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }

        arr.splice(arr.length - n, 1);
        let newList = null;
        let current = null;

        for (let i = 0; i < arr.length; i++) {
            const node = new ListNode(arr[i]);

            if (!newList) {
                newList = node;
                current = node;
            } else {
                current.next = node;
                current = node;
            }
        }

        return newList
    }
}
