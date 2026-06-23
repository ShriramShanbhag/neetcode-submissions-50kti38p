class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let m = {};
        for(let i=0; i<nums.length; i++) {
           if(!(nums[i] in m))m[nums[i]] = 1;
           else m[nums[i]]++; 
        }

        let sorted = Object.keys(m).sort((a, b) => m[b] - m[a]);
        return sorted.slice(0, k)
    }
}
