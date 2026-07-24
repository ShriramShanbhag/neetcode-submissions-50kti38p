/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// 1 -> 2 -> 3 -> 4 -> 5 -> null
// f(5) -> 5
// Inside f(4) -> node = 5
// 5.next = 4
// 4.next = null
// return 5 -> 4 -> null
// 

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
       if (head === null || head.next === null) {
            return head;
        }
       let newHead = this.reverseList(head.next);
       head.next.next = head;
       head.next = null
       return newHead
    }
}
