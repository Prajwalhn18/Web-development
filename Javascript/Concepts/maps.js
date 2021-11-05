//map data structure
// order is guarnateed

const person = new Map();
person.set('firstName','Prajwal');
person.set('language','JavaScript');
console.log(person);

for(let [key,value] of person){
    console.log(key,':',value);
}