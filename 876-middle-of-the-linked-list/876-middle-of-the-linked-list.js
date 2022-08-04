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
    
    let mid = Math.floor(length / 2)
    // if (length % 2 === 1) {
    //     mid = Math.floor(length / 2);
    // } else {
    //     mid = (length / 2);
    // }
    
    while (head) {
        if (!mid) return head;
        mid--;
        head = head.next;
    }
};