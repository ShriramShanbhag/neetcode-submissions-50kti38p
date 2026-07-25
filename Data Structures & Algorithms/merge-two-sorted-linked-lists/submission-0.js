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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let retHead = {};
        let retPtr = retHead;
        let ptrL1 = list1;
        let ptrL2 = list2;
        while(ptrL1 !== null && ptrL2 !== null) {
            if(ptrL1.val > ptrL2.val) {
                retPtr.next = ptrL2;
                retPtr = retPtr.next;
                ptrL2 = ptrL2.next;
            } else {
                retPtr.next = ptrL1;
                retPtr = retPtr.next;
                ptrL1 = ptrL1.next;
            }
        }
        if(ptrL1 === null) {
           retPtr.next = ptrL2
        } else {
            retPtr.next = ptrL1
        }

        return retHead.next
    }
}
