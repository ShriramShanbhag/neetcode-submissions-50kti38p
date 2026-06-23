class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCnt = 0;
        let prodWithoutZeros = 1;
        for(let i=0; i<nums.length; i++) {
            if(nums[i] === 0) zeroCnt++;
            else prodWithoutZeros *= nums[i];
        }
        if(zeroCnt > 1) return Array(nums.length).fill(0);
        else {
            let r = []
            for(let i =0; i<nums.length; i++) {
                if(nums[i] !== 0) {
                    r.push(prodWithoutZeros/nums[i])
                } else {
                    r = Array(nums.length).fill(0)
                    r[i] = prodWithoutZeros;
                    return r
                }
            }
            return r
        }
    }
}
