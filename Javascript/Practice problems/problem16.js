//Merge two sorted arrays

/*
- take two arrays, append both of them. And sort them.
-this code works for only one digit.
*/
function mergeLists(list1,list2){
    list1.sort();
    list2.sort();
    let mergedList = list1.concat(list2);
    mergedList.sort();
    console.log(mergedList);
}

list1 = [5,3,2,7];
list2 = [4,1,8,6];
mergeLists(list1,list2);