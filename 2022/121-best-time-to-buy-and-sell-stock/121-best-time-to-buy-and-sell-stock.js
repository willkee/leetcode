/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let sell = prices[1];
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        let currentNum = prices[i];
        
        if (currentNum < buy) {
            buy = currentNum;
        } else if (currentNum - buy > maxProfit) {
            sell = currentNum;
            maxProfit = sell - buy;
        }
        
    }
    
    return maxProfit;
};