class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        // console.log("nums: ", nums)
        if(nums.length === 0) return [[]];
        let e = nums[0];
        let s = this.subsets(nums.slice(1))
        let l = s.length;
       for(let i = 0; i<l; i++) {
            let x = s[i];
            s.push([...x, e])
            // console.log("s inside for: ", s)
        }
        // console.log("returning s:", s)
        return s
    }
}
