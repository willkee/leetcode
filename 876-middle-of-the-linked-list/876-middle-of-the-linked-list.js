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
        mid = Math.ceil(length / 2)
    } else {
        mid = (length / 2) + 1;
    }
    
    let nodeCount = 1;
    let currNode = head;
    while (currNode) {
        if (nodeCount === mid) return currNode;
        nodeCount++;
        currNode = currNode.next;
    }
};