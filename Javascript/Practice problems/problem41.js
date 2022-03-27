// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.Each letter in magazine can only be used once in ransomNote.

var canConstruct = function (ransomNote, magazine) {
    let a = [];
    let b = [];

    for (let val of ransomNote) {
        a[val] = (a[val] || 0) + 1;
    }
    console.log(a);

    for (let val of magazine) {
        b[val] = (b[val] || 0) + 1;
    }
    console.log(b);

    for (var key in a) {
        if (!(key in b)) {
            return false;
        }
        if (a[key] > b[key]) return false;
    }
    return true;
};

let ransomNote = 'aa';
let magazine = 'aabbz';

console.log(canConstruct(ransomNote, magazine));
