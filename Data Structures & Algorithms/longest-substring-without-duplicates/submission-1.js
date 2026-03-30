class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0) return 0;
        const charMap = new Map()
        let left = 0;
        let right = 0;
        let max = 1;
        charMap.set(s[0], 0)
        for(right=1; right < s.length; right++) {
            if(charMap.has(s[right]) && charMap.get(s[right]) >= left) {
                left = charMap.get(s[right]) + 1;
            } 
            charMap.set(s[right], right);
            if(right-left+1 > max) max = right - left+1;
        }
        return max
    }
}
