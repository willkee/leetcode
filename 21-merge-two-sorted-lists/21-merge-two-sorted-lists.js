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
        tail = head;
    } else {
        head = list1;
        other = list2;
        tail = head;
    }
    
    let current1 = head.next;
    let current2 = other;
    
    while (current1 && current2) {
        if (current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        tail = tail.next;
    }
    
    if (!current1) tail.next = current2;
    if (!current2) tail.next = current1;
    
    return head;
    
};