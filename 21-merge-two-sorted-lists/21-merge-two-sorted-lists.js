/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1) return list2;
    if (!list2) return list1;
    
    let head;
    let other;
    let tail;
    
    if (list1.val > list2.val) {
        head = list2;
        other = list1;
    } else {
        head = list1;
        other = list2;
    }
    
    tail = head;
    
    let c1 = head.next;
    let c2 = other;
    
    while (c1 && c2) {
        
        // While we still have values left in both lists
        
        if (c1.val < c2.val) {
            tail.next = c1;
            c1 = c1.next;
        } else {
            tail.next = c2;
            c2 = c2.next;
        }
        tail = tail.next;
    }
    
    if (!c1) tail.next = c2;
    if (!c2) tail.next = c1;
    
    return head;
    
};