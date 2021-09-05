let n = 5;
let s = "";
for (let i = 0; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
