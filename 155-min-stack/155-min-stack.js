class MinStack {
    constructor() {
        this.stack = [];
    }
    
    push(val) {
        this.stack.push(val);
    }
    
    pop() {
        this.stack.pop();
    }
    
    top() {
        return this.stack[this.stack.length - 1]
    }
    
    getMin() {
        return Math.min(...this.stack)
    }
}

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// // MinStack.prototype.push = function(val) {
    
// };

// /**
//  * @return {void}
//  */
// // MinStack.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// // MinStack.prototype.top = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
    
// };

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */