class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        nums.sort((a, b) => Number(b)-Number(a));
        return nums[k-1]
    }
}
