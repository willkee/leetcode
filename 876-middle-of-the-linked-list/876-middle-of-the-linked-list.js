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
    let length = 0;
    let curr = head;
    
    while (curr) {
        length++;
        curr = curr.next;
    }
    
    let mid;
    if (length % 2 === 1) {
        mid = Math.floor(length / 2);
    } else {
        mid = (length / 2);
    }
    
    let idx = 0;
    while (head) {
        if (idx === mid) return head;
        idx++;
        head = head.next;
    }
};