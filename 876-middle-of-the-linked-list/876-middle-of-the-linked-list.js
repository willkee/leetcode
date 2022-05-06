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
var middleNode = function(head) {
    let current = head;
    let count = 1;
    
    while (current) {
        count++;
        current = current.next;
    }
    
    let mid;
    if (count % 2 === 1) {
        mid = Math.ceil(count/2)
    } else {
        mid = (count/2) + 1
    }
    
    let newCurrent = head;
    while (count) {
        if (count === mid) {
            return newCurrent;
        }
        newCurrent = newCurrent.next;
        count--;
    }
};