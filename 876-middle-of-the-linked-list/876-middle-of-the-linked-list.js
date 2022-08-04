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
    let len = 0;
    let curr = head;
    
    while (curr) {
        len++;
        curr = curr.next;
    }
    
    let mid = Math.floor(len / 2);
    
    while (head) {
        if (!mid) return head;
        mid--;
        head = head.next;
    }
};