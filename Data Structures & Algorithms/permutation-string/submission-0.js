class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let mapS1 = new Map();
        let w = s1.length;
        for(let i=0; i<s1.length; i++) {
            if(mapS1.has(s1[i])) mapS1.set(s1[i], mapS1.get(s1[i])+1);
            else mapS1.set(s1[i], 1);
        }

        let left = 0;
        let right = w-1;
        let mapS2 = new Map();
        for(let i=0; i<w; i++) {
            if(mapS2.has(s2[i])) mapS2.set(s2[i], mapS2.get(s2[i])+1);
            else mapS2.set(s2[i], 1);
        }
        if(this.isMapEqual(mapS1, mapS2)) return true
        while(right < s2.length) {
            mapS2.set(s2[left], mapS2.get(s2[left])-1);
            left = left + 1;
            right = right + 1;
            if(!mapS2.has(s2[right])) mapS2.set(s2[right], 1)
            else mapS2.set(s2[right], mapS2.get(s2[right])+1);
            if(this.isMapEqual(mapS1, mapS2)) return true
        }

        return false;
       

    }

    isMapEqual(m1, m2) {
        for(const [k, v] of m1) {
            if(!m2.has(k) || m2.get(k) !== v) return false;
        }
        return true;
    }
}
