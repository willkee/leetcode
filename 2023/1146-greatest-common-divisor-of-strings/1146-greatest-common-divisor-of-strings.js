/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 === str2) return str1;
    if (str1 === "" || str2 === "") return "";
    if (str1.length === str2.length && str1 !== str2) return "";

    function isMultipleOf (multiple, string) {
        if (string.length === 0) return true;
        if (!string.startsWith(multiple)) return false;
        return isMultipleOf(multiple, string.slice(multiple.length))
    }

    let result = "";

    for (let i = 1; i <= str1.length; i++) {
        let multiple = str1.slice(0, i);
        if (isMultipleOf(multiple, str1) && isMultipleOf(multiple, str2)) {
            result = multiple;
        }
    }
    return result;
};