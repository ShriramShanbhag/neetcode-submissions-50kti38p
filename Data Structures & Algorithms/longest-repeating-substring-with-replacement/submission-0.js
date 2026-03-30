class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if(s.length === 0) return 0;
        if(s.length === 1) return 1;
        let m = new Map();
        let left = 0;
        let right = 0;
        let max_w = 1;
        m.set(s[0], 1);
        for(right=1; right<s.length; right++) {
            if(m.has(s[right])) m.set(s[right], m.get(s[right])+1);
            else m.set(s[right], 1);
            if(right -left + 1 - Math.max(...m.values()) <= k) {
                max_w = Math.max(max_w, right -left + 1);
            } else {
                m.set(s[left], m.get(s[left])-1)
                left = left + 1;
            }
        }

        return max_w
    }
}
