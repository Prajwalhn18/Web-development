// There are three types of edits that can be performed on strings:insert,delete, and replace . Give two strings write a function to check if they are one edit away.

/*
pale -> ple, true
pales -> pale, true
pale ->  bake, false
*/

function oneEditAway(string1, string2) {
    if (string1.length == string2.length) {
        return oneEditReplace(string1, string2);
    } else if (string1.length + 1 == string2.length) {
        return oneEditInsert(string1, string2);
    } else if (string1.length - 1 == string2.length) {
        return oneEditInsert(string2, string1);
    }
    return false;
}

function oneEditReplace(s1, s2) {
    let foundDifference = false;
    for (let i = 0; i < s1.lenght; i++) {
        if (s1.charAt(i) !== s2.charAt(i)) {
            if (foundDifference) {
                return false;
            }
            foundDifference = true;
        }
    }
    return true;
}

function oneEditInsert(s1, s2) {
    let index1 = 0;
    let index2 = 0;
    while (index2 < s1.length && index1 < s1.length) {
        if (s1.charAt(index1) != s2.charAt(index2)) {
            if (index1 != index2) {
                return false;
            }
            index2++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}

let s1 = "pale";
let s2 = "bake";

console.log(oneEditAway(s1, s2));
