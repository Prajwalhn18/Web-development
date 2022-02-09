//Below code explains the concepts of memoization
// memoization with closures

const memoizeAdd = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {
            console.log('Tha value is in cache:');
            return cache[value];
        } else {
            console.log('Calculating the value:');
            let res = value + 20;
            cache[value] = res;
            return res;
        }
    };
};

const addition = memoizeAdd();
// using addition is important as only one cache is going to be created. But, if you are using memoizeAdd() everytime, then it is going to create multiple caches which is definitely not required.

console.log(addition(20));
console.log(addition(20));
