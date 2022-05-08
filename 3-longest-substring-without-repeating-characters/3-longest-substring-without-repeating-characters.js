const lengthOfLongestSubstring = s => {    
    let curr = "";
    let longest = "";
    
    for (let i = 0; i < s.length; i++) {
        let j = curr.indexOf(s[i]);
        
        if (j === -1) {
            // Letter does not exist in the current string--add to string.
            curr += s[i];
        } else {
            // Letter exists:
            if (curr.length > longest.length) {
                // If the length of current string is longer than length of "longest" string,
                // replace longest string with current string.
                longest = curr;
            }
            // Since there is a duplicate, start again one letter ahead of previous dup value
            // then add letter to end of string.
            curr = curr.slice(j + 1) + s[i];
        }

    }

    if (curr.length > longest.length) longest = curr;
    return longest.length;
};