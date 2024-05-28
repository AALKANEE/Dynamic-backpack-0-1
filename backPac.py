def knapsack_01(values, weights, capacity):
    n = len(values)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] > w:
                dp[i][w] = dp[i - 1][w]
            else:
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])

    return dp[n][capacity]

# مثال استفاده از تابع
values = [1, 2, 99]
weights = [10, 20, 30]
capacity = 50
result = knapsack_01(values, weights, capacity)
print("   value of pack:", result)

# Belong to aryan Alkane