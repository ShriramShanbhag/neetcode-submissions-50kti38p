class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let mjs = Array(nums.length).fill(nums.length);
        let maxCover = 0
        mjs[0] = 0
        for(let i=0; i<nums.length; i++) {
            maxCover = Math.max(maxCover, i+nums[i]);
            for(let j=i+1; j<=maxCover; j++){
                mjs[j] = Math.min(mjs[i]+1, mjs[j]);
            }
        }
        return mjs[nums.length - 1]
    }
}
