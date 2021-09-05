let n = 5;
let s = "";

for(let i = 1;i <= 5;i++){
    for(let j = 0;j < n-i; j++){
        s += " ";
    }
    for(let k =0; k < i;k++){
        s += "*";
    }
    s += "\n";
}

console.log(s);