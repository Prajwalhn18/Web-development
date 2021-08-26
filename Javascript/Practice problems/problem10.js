//convert roman number to integer

/*
1) create a map of characters to the integer like I:1,V:5,X:10 etc
2) Then check for the string in map and then add or subtract integers.

For example IV = 4. V = 5 and I = 1. So 5-1=4; similarly, VIII = 5+1+1+1 = 8;

Depending on the strings decide to add or subtract.

*/

var romanToInt = function(s){
    const map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };

    let res = 0;
    s.split('').forEach((num,i) => {
        if(map[num] < map[s[i+1]]){
                res -= map[num];
        }
        else{
            res += map[num];
        }
    });
    console.log(res);
return res;
};

romanToInt("IV");