// Return the length of the longest word in the provided sentence.

function countWords(sentence) {
    let x = sentence.split(' ');
    let maxLength = 0;

    for (var i = 0; i < x.length - 1; i++) {
        x[i] += '';
    }

    for (var i = 0; i < x.length; i++) {
        if (x[i].length > maxLength) {
            maxLength = x[i].length;
        }
    }
    console.log(x);
    console.log(maxLength);
    return x;
}

countWords('This is a program to count length of a longest word');
