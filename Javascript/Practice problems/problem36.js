//count the frequency of each character

const str = 'hellohi hhhh';

const objmap = {};

for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (!objmap[ch]) objmap[ch] = 0;
    objmap[ch]++;
}
console.log(objmap);
