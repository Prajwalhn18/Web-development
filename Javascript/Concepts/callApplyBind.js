//call

/*
call can help you to call the function from an object which is present in the other object.

*/

function about(hobby, favBook){
console.log(this.Name,this.Age,hobby,favBook);
}
const user1 = {
    Name: "Arjun",
    Age: 21,
    // About: function(){
    //     console.log(this.Name,this.Age);
    // }
}

const user2 = {
    Name: "Abhimanyu",
    Age: 21
}

// user1.About.call(user2);

// The about function can also be declared outside. 
//Both call and apply are almost same, but when sending the parameter send as an array 

about.call(user1,"Reading","Wings of fire");
console.log("------------");

about.apply(user2,["Reading","wings of fire"]);
console.log("------------");


//bind
const func = about.bind(user1,"reading","wings of fire");
func();