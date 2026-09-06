// sbse pahle import kero file system ko;
const fs = require("fs");
const { request } = require("http");


// syncronous file;
// fs.writeFileSync("./hello.txt" , "hey there");

// Asysncronous file;
// fs.writeFile("./hello.txt" ,"hey there that is a file" ,(err)=>{});

// ab file ko read kerte hain 

// sysncronouslly....

// const result = fs.readFileSync("./hello.txt" , "utf-8");
// console.log(result);


// Asynchronouslly file;

// fs.readFile("./hello.txt" , "utf-8", (err ,result)=>
// {
//     if(err)
//     {
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });


// append a file that add a extra content in file ;

// fs.appendFileSync("./hello.txt","/n ange chal /n");

//always when you use Asynchronous file sp always you pass a error metod with each file jahan error bi handle hoti hain;


