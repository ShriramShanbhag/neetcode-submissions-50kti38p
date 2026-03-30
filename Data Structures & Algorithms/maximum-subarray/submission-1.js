class Solution {
    /**
     * @param {number[]} nums
     * @return {nmber}
     */
    sum(i, j, map, nums) {
        if(map.get(`${i},${j}`) != null) return map.get(`${i},${j}`)
        if(i==j) {            
            map.set(`${i},${j}`, nums[i])
            return map.get(`${i},${j}`);
        }
        map.set(`${i},${j}`, this.sum(i, j-1, map, nums) + nums[j]);
        return map.get(`${i},${j}`)
        
    }
    maxSubArray(nums) {
        let m = new Map();
        let r = -Infinity
        if(nums.length === 1) return nums[0];
        for(let i=0; i<nums.length; i++) {
            for(let j=i; j<nums.length; j++)
                r = Math.max(r, this.sum(i, j, m, nums))
        }
        return r

    }
}
