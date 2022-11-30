// Find the length of the last world

function findLength(str) {
    var a;
    let x = str.split(' ');
    let y = x[x.length - 1];
    var word = y.split('');
    let wordLength = word.length;
    console.log(wordLength);
}

testString = 'This is the Longeststring';
findLength(testString);
