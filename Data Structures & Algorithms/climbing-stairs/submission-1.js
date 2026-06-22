class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    // n - 1 or 2 -> meaning, we have to find number of ways to get to n by adding
    // 1 or 2 -> 1x + 2y = n. We need to find how many combinations of (x, y) exist
    // Lets say we have f(x) -> f(x+1) = f(x) + 1 and f(x+2) = f(x) + 2
    // 4 -> (0, 2)(2, 1)(4, 0) | 5 -> (5, 0)(3, 1)(1, 2) | 6 
    climbStairs(n, m) {
        if(!m) m = new Map();
        if(m.get(n) != null) return m.get(n)
        if(n === 1) {
            m.set(n, 1);
            return m.get(n)
        }
        if(n === 2) {
            m.set(n, 2);
            return m.get(n)
        }
        m.set(n, this.climbStairs(n-1, m) + this.climbStairs(n-2, m))
        return m.get(n)
    }
}
