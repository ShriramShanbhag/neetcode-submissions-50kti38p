class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let m = new Map()
        return this.f(0, s, m);
    }

    f(i, s, m) {
        if(i >= s.length) return 1;
        if(m.get(i) != null) return m.get(i)
        let ways = 0
        if(i+1 <= s.length) {
            let o = s.slice(i, i+1);
            if(this.isKeyValid(o)) {
                ways = ways + this.f(i+1, s, m)
            }
        }
        if(i+2 <= s.length) {
            let o = s.slice(i, i+2);
            if(this.isKeyValid(o)) {
                ways = ways + this.f(i+2, s, m)
            }
        }
        m.set(i, ways)
        return ways;
        
    }

    isKeyValid(k) {
        if(k.length === 1 && Number(k) > 0) return true;
        if(k.length === 2 && Number(k) > 9 && Number(k) <= 26) return true;
        return false
    }
}
