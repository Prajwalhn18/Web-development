//Below code explains the concepts of memoization

const memoizeAdd = () => {
    let cache = {};
    return (value) => {
        if(value in cache){
            console.log("Tha value is in cache:");
            return cache[value];
        }
        else{
            console.log("Calculating the value:");
            let res = value + 20;
            cache[value] = res;
            return res;
        }
    }
}

const addition = memoizeAdd();
console.log(addition(20));
console.log(addition(20));