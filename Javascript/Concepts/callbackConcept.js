function wish(name, callback) {
    console.log("Hello" + "" + name);
    callback();
}

//callback function
function callbackFunction() {
    console.log("Callback function is called.");
}

wish("Prajs", callbackFunction);

//

function wish2(name) {
    console.log("Hello" + "" + name);
}

//callback function
function exampleFunction() {
    console.log("This function is called after 2 Seconds!");
}

// wish("Prajs", callbackFunction);

setTimeout(exampleFunction, 2000);
wish2("Prajs");
