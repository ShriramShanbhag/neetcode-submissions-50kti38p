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
        let len = 0;
        let reqIdx = -1;
        let ptr = head;
        while(ptr !== null) {
            len++;
            ptr = ptr.next;
        }
        if (len === n) {
        return head.next;
    }
    
    // Step 3: Traverse to the node just BEFORE the one we want to delete
    let targetIdx = len - n;
    ptr = head;
    
    for (let i = 0; i < targetIdx - 1; i++) {
        ptr = ptr.next; // Correctly traverse forward
    } 
    
    // Step 4: Bypass the target node to remove it
    ptr.next = ptr.next.next;
    
    return head;
    }
}
