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
var deleteDuplicates = function(head) {
    /*
    Time complexity: O(3n) ~> O(n)
    Space complexity: O(n)
    */
    const hashMap = {};
    
    let curr1 = head;
    while (curr1) {
        const val = curr1.val;
        hashMap[val] ? hashMap[val]++ : hashMap[val] = 1;
        curr1 = curr1.next;
    }
    
    while (head) {
        if (hashMap[head.val] > 1) {
            head = head.next;  
            continue;
        }
        break;
    }
    
    let curr2 = head;
    while (curr2 && curr2.next) {
        const nextVal = curr2.next.val;
        
        if (hashMap[nextVal] > 1) curr2.next = curr2.next.next;
        else curr2 = curr2.next
    }
    return head;
};