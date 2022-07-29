/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0;
        let first;
        
        while (l <= n) {
            let mid = Math.floor((l+n)/2);
            if (isBadVersion(mid)) {
                first = mid;
                n = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return first
    };
};