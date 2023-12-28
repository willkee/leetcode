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
var sortList = function(head) {
    /*
    
    Edge cases: 
        head = null, return null
        head.next = null, return head; 
    
    First traversal of the linked list:
        Add the values into another array
    
    Sort the array
    
    Second traversal of the linked list:
        Plug the values in to the linked list in the same order as the array
    
        counter variable to keep track of which index of the array to use
    
    Time complexity: O(n log n)
    Space complexity: O(n)
    
    */
    
    if (!head) return null;
    if (!head.next) return head;
    
    const values = [];
    
    let curr1 = head;
    while (curr1) {
        values.push(curr1.val);
        curr1 = curr1.next;
    }
    
    values.sort((a, b) => a - b);
    
    let curr2 = head;
    let nodeIndex = 0;
    
    while (curr2) {
        curr2.val = values[nodeIndex];
        
        nodeIndex++;
        curr2 = curr2.next;
    }
    
    return head;
};