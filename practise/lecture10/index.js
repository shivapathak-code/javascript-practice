//object cloning kya hota hain ye ham sekhte hain 

// sabse skeekte hain ki spered operator se 

const src = 
{
    name:"shiva",
    age : 19,
    color: "red"
};

let dest = {...src};
 dest.name = "mayank";
 dest.age = 20;
 dest.color = "blue";

 console.log("src" , src);

 console.log("dest" ,dest);
