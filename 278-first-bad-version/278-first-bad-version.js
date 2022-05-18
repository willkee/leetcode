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
        let r = n;
        let first;
        
        while (l <= r) {
            let mid = Math.floor((l + r)/2);
            
            if (!isBadVersion(mid)) {
                l = mid + 1;
            } else {
                first = mid;
                r = mid - 1;
            }
        }
        return first;
    };
};