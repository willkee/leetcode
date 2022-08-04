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
    
    const fromStart = len - n;
    
    let currIdx = 0;
    let curr2 = head;
    
    while (curr2) {
        console.log(curr2, fromStart)
        if (fromStart === 0) {
            return head.next;
        }
        if (currIdx + 1 === fromStart) {
            curr2.next = curr2.next.next;
        }
        currIdx++;
        curr2 = curr2.next;
    }
    return head;
};