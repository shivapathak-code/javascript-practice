/// isme ham sure kerne ja rahe node.js kye hota hain complete node.js padenge 

/// what is npm  that is called node package manager 
///init = Naya Node project initialize karo.
// package.json is a identicard of project;

//
////
//////
// NODE.JS REPOSITRY BASIC TO ADVANCE ;

// node .js is runtime environment that is allow to run javascript in outside the browser thta is called javascript;

// window object is not available so prgrom not excute in terminal which is related to like obejects and DOM manupulation method but that is run in browser console window;

/// first program 

// console.log("that is node.js");

// jab kabi bhi hame kisi ek file ko dusri file main use kerna hota hain to ham use import kerte hain or import kerne
// ke liye ek built in function hota hain jiska name   // " require()"// hota hainn


// const value = require("./math");  // us file ka path add karene jise hame use kerna hain ;

// console.log(value.add(2 ,3) , value.sub(2,3));

// isi ko module kahte hain ;


// NODEJS ARECHETECTURE  HOW WORK NODEJS;

// CLIENT--------->request-------->{NODEJS( EventQueue(store) -------->
// ------->EventLoop(where check request((Asysnchronous(non blocking operation))------>response------->client
// --------->(Sysnchronous(blocking operation)------->(threadpool main(jahan us request ko process kerte hain using varoius metod and asgin a worker )
// -------->reponse--------------> CLIENT)))))};

//blocking request rook jati apne request main uske baad ange ka code excute kerti hain ;
//non blocking request vo nhi rookti jab tak usme kaam chalta hain vo ange ka code excute ker deti hain;


// create a server ;

// const http = require("http");

// const myServer = http.createServer((req, res)=>
// {
//     console.log("hello bhaiiii");
//     res.end("welcome back to the server");
// });

// myServer.listen(3000,()=>
// {
// console.log("server runing in port",3000);
// });

//URL that stands for UNIFORM RESOURCE LOCATOR;

///// HTTP METHODS;
/////////// POST      --------------------> when you want to send  and mutate some data in server;

////// GET    ----------------> when you want some date from server;

/////////////////// DELETE                 ----------> when you want to delete some data from server;

/// PUT          -----------> when you want to put any data in server ;

/////////////////////// PATCH           ---------> when you want to udate some date from server ;

/// that si called RESTFULL APIS like { GET , POST , DELETE , PUT , PATCH}::;



// ab ham yahan apni express libraray srur kerte hain or kya kya ham ker skate hain exprees.js hain aj dekkte hain okk ye bahat hi acchi libraray hain 
// for creating a web server 
//
//
/// EXPRESS .JS;

// import kero library ko

// const express = require("express");

// // ek appliction that is use for express;

// const app = express();

// // port define kero 

// const port = 5000;

// // route banate hain ;

// app.get("/" , (req ,res)=>
// {
//    return res.send("welcome to home page");
// });
// app.get("/about" ,(req ,res)=>
// {
//  return res.send("welcome to about page");
// });

// app.listen(port,(req ,res)=>
// {
//    console.log(`server runing in port ${port}`);
// });



// aj ka topic hain ki middleware kya hota hain kaise work kerta hainn ///

/// middleware is like work as a Bearer that is check all request and send process to other  in project;

// client -----> req  ------------>  middleware  -------> (check req that is right so send req to server) -------->req -------------> server;

// that contain all process middlware like a heart of project ok    

// also that is take access from all req and res and next middlware like   

///////////////////////////////////////////// middleware //////////////////////////////////////////////////// 
////////////// request                            /                           ////////////////////// response 
//////////////////////////////////////// next middleware  ////////////////////////////////////////

// that is diagram of accesss of middlware 


// what is headers in node js ok

// so like think a person send a invalope to other person with  the help of postman and the detail is showing outside the invalope and main data
// inside the invalope 

/// so like in technical term  one person is client and and postman is server complete invalope is reqyest ans detail is outside that is header and data is inside that is called 
// data 



/// express ja ek readymade sever provide kerti hain because express js is one framework of node.js and node.js is a runtime environment that 
// is run javascript outside the brower and also one term that is the hurt of node.js that is called NPM that is stads for Node Package Manager 
// that is install the readymad libraray that is use in node.js okk  that is install with node and thats work is more important in node.js okk


//Important Status Codes
//200	OK	Data successfully mil gaya
//201	Created	Naya resource create hua (POST)
//400	Bad Request	User ne galat data bheja
//401	Unauthorized	Login/token missing ya invalid
//403	Forbidden	Permission nahi hai
//404	Not Found	Data ya route nahi mila
//500	Internal Server Error	Server ke andar error

// infomational response (100 --199);
// Successfull response (200 ---299);
// Redirection response (300 --399);
// client error response (400 --499);
// Server error response(500 -- 599);


//app.use(express.json()) JSON parser middleware hai.

//Iska kaam hai:

//"Request body me jo JSON aaya hai, usko JavaScript object me convert karke req.body me rakh do."

// | Array Method                              | MongoDB (Mongoose) Method                               | Use                                                    |
// | ----------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------ |
// | `notes.push(newNote)`                     | `await Note.create(newNote)`                            | Naya note/database document create karta hai.          |
// | `notes`                                   | `await Note.find()`                                     | Sare notes/documents laata hai.                        |
// | `notes.find(note => note.id === id)`      | `await Note.findById(id)`                               | Ek note uski ID se dhoondta hai.                       |
// | `notes.findIndex(note => note.id === id)` | `await Note.findById(id)`                               | Pehle check karta hai ki note exist karta hai ya nahi. |
// | `notes[index] = {...}`                    | `await Note.findByIdAndUpdate(id, data, { new: true })` | Existing note ko update karta hai.                     |
// | `notes.splice(index, 1)`                  | `await Note.findByIdAndDelete(id)`                      | Note delete karta hai.                                 |


//JavaScript kabhi timer count nahi karti.
//Timer Browser ya Node.js Runtime count karta hai.


/// when any promise main koi problem resolve hoti hain to use ham .then()  se handle kerte hain lekin jab reject hoti hain koi problem to use .catch se handle kerte hain ;

/// resolve()  →  .then()

/// reject()   →  .catch()



//async/await me try...catch, Promise ke .then().catch() ka replacement hai.
