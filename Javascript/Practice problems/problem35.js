// Longest substring without repeating the characters

function lengthOfLongestSubstring(s) {
    if (!s.length) return 0;

    let end = 0;
    let begin = 0;
    let maxLen = 0;

    const map = new Map();

    while (end < s.length) {
        let char = s[end];
        if (map.has(char)) {
            while (map.has(char)) {
                const beginChar = s[begin];
                map.delete(beginChar);
                begin++;
            }
        } else {
            map.set(char, 1);
            const len = end - begin + 1;
            if (len > maxLen) maxLen = len;
            end++;
        }
    }
    return maxLen;
}

var string = 'abcabcbb';
console.log(lengthOfLongestSubstring(string));
