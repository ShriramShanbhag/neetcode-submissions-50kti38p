class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length === 1) return 0;
        let min_price = prices[0];
        let max_profit = 0;
        let today_profit = 0;
        for(let i=1; i< prices.length; i++) {
            today_profit = prices[i] - min_price;
            if(today_profit > max_profit){
                max_profit = today_profit;
            }
            if(min_price > prices[i]) {
                min_price = prices[i];
            }
        }
     return max_profit
     }
}
