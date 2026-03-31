class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        // can I get to point i?
        let maxCover = 0;
        for(let i=0; i<nums.length; i++) {
            maxCover = Math.max(maxCover, i+nums[i]);
            if(maxCover >= nums.length -1) return true
            if(maxCover <= i) return false
        }
        return true
    }
}
