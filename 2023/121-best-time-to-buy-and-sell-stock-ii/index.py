class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2: return 0

        buy_price = prices[0]
        total_profit = 0

        for i in range(1, len(prices)):
            current = prices[i]

            try:
                next = prices[i + 1]
            except IndexError:
                next = None

            if current < buy_price:
                buy_price = current
            elif next and next > current:
                continue
            else:
                total_profit += current - buy_price

                if next:
                    buy_price = next

        return total_profit
