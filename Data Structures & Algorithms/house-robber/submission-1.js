class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // f(3) -> 
    f(i, nums, m) {
        if(!m) m = new Map();
        if(i >= nums.length) return 0;
        if(m.get(i) != null) return m.get(i);
        m.set(i, Math.max(this.f(i+1, nums, m), nums[i]+this.f(i+2, nums, m)))
        return m.get(i);
    }
    rob(nums) {
        return this.f(0, nums)
    }

}
