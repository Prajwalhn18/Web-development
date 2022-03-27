//count the number of character in a string

function countCharacter(s, target) {
    let count = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        if (s.charAt(i) == target) count++;
    }
    return count;
}

var strr = 'competitive';
var t = 't';
console.log(countCharacter(strr, t));
