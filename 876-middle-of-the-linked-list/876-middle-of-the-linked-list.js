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
    
    const mid = length % 2 === 1 ? Math.floor(length/2) : (length/2)
    
    let nodeCount = 0;
    while (head) {
        if (nodeCount === mid) return head;
        nodeCount++;
        head = head.next;
    }
    return null;
};