/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
    /*
    Prediction for time: O(n);
    Prediction for space: O(1);
    
    We need a "prev" pointer and a current pointer and a "next" pointer
    We start with assigning next to head.next;
    prev is initialized to null;
    
    next = head.next;
    head.next = prev;
    
    prev = head;
    head = next;
    */    
    
    if (!head) return null;
    
    let prev = null;
    let next = head.next;
    
    while (head) {
        next = head.next;
        head.next = prev;
        
        prev = head;
        head = next;
    }
    
    return prev;
    
};