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
    
    let mid = length % 2 === 1 ? Math.ceil(length/2) : (length/2)+1
    
    let nodeCount = 1;
    while (head) {
        if (nodeCount === mid) return head;
        nodeCount++;
        head = head.next;
    }
};