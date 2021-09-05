let n = 5;
let s = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1) {
      s += "*";
    } else if (j === 0 || j === n - 1) {
      s += "*";
    } else {
      s += " ";
    }
  }
  s += "\n";
}

console.log(s);
