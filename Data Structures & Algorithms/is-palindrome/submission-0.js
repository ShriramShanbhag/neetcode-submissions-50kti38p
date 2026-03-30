class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let t = s.toLowerCase();
        t = t.replace(/[^a-zA-Z0-9]/g, '')
        for(let left = 0, right = t.length - 1; left<=right; left++, right--) {
            if(t[left] !== t[right]) return false;
        }
        return true;
    }
}
