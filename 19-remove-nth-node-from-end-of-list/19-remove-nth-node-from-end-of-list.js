/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next) return null;
    
    let len = 0;
    let curr = head;
    while (curr) {
        len++;
        curr = curr.next;
    }
    
    let fromStart = len - n;
    if (fromStart === 0) return head.next;
    
    let curr2 = head;
    
    while (curr2) {
        if (fromStart === 1) {
            curr2.next = curr2.next.next;
        }
        fromStart--;
        curr2 = curr2.next;
    }
    return head;
};