class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    // at any point, 
    generateParenthesis(n) {
        let res = [];

        function backtrack(str, openCnt, closeCnt) {
            if(str.length === 2*n) {
                res.push(str);
                return;
            }

            if(openCnt < n) {
                backtrack(str + '(', openCnt+1, closeCnt)
            }
            if(closeCnt < openCnt) {
                backtrack(str + ')', openCnt, closeCnt+1)
            }
        }

        backtrack("", 0, 0)
        return res
    }
}
