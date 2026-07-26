class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let m = {}
        for(let i=0; i<points.length; i++) {
            m[points[i]] = this.distFromOrigin(points[i]);
        }

        let keys = Object.keys(m)
        // console.log(keys)
        keys.sort((a, b) => m[a]-m[b]);
        // console.log()
        return keys.map((s) => s.split(',').map((e) => Number(e))).slice(0, k)
    }

    distFromOrigin(p) {
        return Math.sqrt(p[0]**2 + p[1]**2);
    }
}
