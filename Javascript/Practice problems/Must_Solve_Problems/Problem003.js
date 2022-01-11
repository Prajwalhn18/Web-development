//Write a method to replace all spaces in a string with '%20'

function countNoOfCharacter(sentence) {
    sentence.trim();
    let regex = new RegExp("\\s", "g");
    let replaceChar = "%20";
    let replaced = sentence.replace(regex, replaceChar);
    console.log(replaced);
}
let sentence = "This is the test sentence";
countNoOfCharacter(sentence);
