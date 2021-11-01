// objects store key value pairs and they don't have index
//objects are reference type

const person = {
    name: "arjun",
    age: 23,
    hobbies: ["reading","cycling"],
    "person friends": ["Dwyane","John","Max"]
}

//can access individual properties
person.name; 

 //adding key value pairs if not exists
person.gender = "male";

console.log(person.gender);

//dot vs bracket notation
// -person.person friends is not accessbile as there is a space in between. 
//- here the bracket notation helps you

console.log(person["person friends"]);


//iterate the objects

/* 
Two types
-> for in loop
-> 

*/

for(let key in person){
    console.log(key,':',person[key]);
}
