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
        let m = new Map();
        let idx = 0;
        while(head != null) {
            if(m.has(head)) {
                return true
            } else {
                m.set(head, idx);
                idx++;
                head = head.next;
            } 
        }

        return false
    }
}
