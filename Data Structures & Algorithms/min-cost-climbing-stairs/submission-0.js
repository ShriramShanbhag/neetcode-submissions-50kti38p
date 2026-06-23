class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    // totalCost(i) = Math.min(totalCost(i-1)+cost[i-1], totalCost(i-2)+cost[i-2])
    // totalcost(0) = 0, totalcost(1) = 0
    minCostClimbingStairs(cost) {
        let t = new Map();
        t.set(0 , 0); 
        t.set(1 , 0); 
        for(let i=2; i<=cost.length; i++) {
            t.set(i, Math.min(t.get(i-1)+cost[i-1], t.get(i-2)+cost[i-2]))
        }

        return t.get(cost.length);

    }
}
