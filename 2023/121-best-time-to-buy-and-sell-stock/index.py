class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        lowest_buy_price = prices[0]
        max_profit = 0

        # Solution:
            # Time complexity: O(n)
            # Space complexity: O(1)

        for i in range(1, len(prices)):
            current = prices[i]

            if current < lowest_buy_price:
                lowest_buy_price = current

            elif current > lowest_buy_price:

                profit = current - lowest_buy_price

                if profit > max_profit:
                    max_profit = profit


        return max_profit
