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
    
    let current = head;
    let length = 0;
    
    while (current) {
        length++;
        current = current.next;
    }
    
    let target = length - n;
    let new_current = head;
    let new_count = 0;
    
    if (target === 0) {
        head = head.next;
        return head;
    }
    
    while (new_current) {
        if (new_count + 1 === target) {
            new_current.next = new_current.next.next;
            return head;
        }
        new_count++;
        new_current = new_current.next;
    }
};