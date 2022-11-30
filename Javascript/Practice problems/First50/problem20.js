// caesar cipher

function rot13(str) {
    var sol = '';

    for (var i = 0; i < str.length; i++) {
        var ascii = str[i].charCodeAt();

        if (ascii >= 65 && ascii <= 77) {
            sol += String.fromCharCode(ascii + 13);
        } else if (ascii >= 78 && ascii <= 90) {
            sol += String.fromCharCode(ascii - 13);
        } else {
            sol += str[i];
        }
    }
    return sol;
}

console.log(rot13('SERR PBQR PNZC'));
