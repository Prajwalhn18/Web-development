// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

const findSingleNumber = function(nums) {
    const checkedNumbers = {};
    nums.forEach(elem => {
        if (!checkedNumbers[elem]) {
            checkedNumbers[elem] = true;
        } else {
            delete checkedNumbers[elem];
        }
    });
    return Object.keys(checkedNumbers)[0];
};

const arr = [2,2,3,4,3,1,4,3];
console.log(findSingleNumber(arr))