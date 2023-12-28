/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newWord = "";
    let cursor1 = 0;
    let cursor2 = 0;

    while (newWord.length < (word1.length + word2.length)) {
        if (cursor1 < word1.length) {
            newWord += word1[cursor1];
            cursor1++;
        } else {
            newWord += word2.slice(cursor2);
            break;
        }

        if (cursor2 < word2.length) {
            newWord += word2[cursor2];
            cursor2++;
        } else {
            newWord += word1.slice(cursor1);
            break;
        }
    }

    return newWord;
};