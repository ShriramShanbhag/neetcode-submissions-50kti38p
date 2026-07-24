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
     * @return {ListNode}
     */
    reverseList(head) {
        if(head === null) return null
        let stack = [];
        let p = head
        let retHead = null;
        let retP = null
        while(p !== null) {
            stack.push(p);
            p = p.next;
        }
        // console.log(stack)
        retHead = stack.pop();
        retP = retHead;
        while(stack.length >= 1) {
            let node = stack.pop();
            retP.next = node;
            retP = node
        }

        retP.next = null;

        return retHead
    }
}
