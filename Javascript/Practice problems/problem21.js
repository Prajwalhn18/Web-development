// length of the last word

function lengthOfLastWord(str){
    let words = str.split(" ");
    let n = words.length;
    console.log(words[n-1]);

    let lastWord = words[n-1].split("");
    console.log(lastWord.length);

}

let str = "This is the last word";
lengthOfLastWord(str);