// so hello i am practise the basic concept of javascript

// print any thing

// let name = "shiva Pathak"
// console.log(name);

// take a function where implement basic calculator

// function calculator(a , b)
// {
//    console.log(a+b);
//    console.log(a-b);
//    console.log(a*b);
//    console.log(a/b);

// }
// calculator(4 ,2); // that is also return the value but first of all store the value thats by that is return the value not print okk

// let sum = function(a , b)
// {
//     return a+b;
// }
// let ans = sum( 2 , 3);
// console.log(ans);// that is type of function that is store tha function


// let exponatinal = (a , b) =>
// {
//     return a**b;
// }

// console.log(exponatinal(2 , 10));// that is type of function that is called arrow function in js;


//object ki practice


// with for in loop that perform that operation

// const student = {
//     name: "Ajay",
//     age: 20,
//     course: "B.Tech CSE"
// };

// for(let key in student)
// {
//     console.log(student[key]);
// }
// console.log(student);

// const student = {
//     name: "Ajay",
//     marks: [80, 90, 70, 95]
// };
// let totalLength = student.marks.length;
// let sum = 0;
// for(let i = 0;i<student.marks.length;i++)
// {
//     sum = sum+student.marks[i];
// }
// let avg = sum/totalLength;
// console.log(avg);


// task of object ;
// task 1;
// Name : Ajay
// Total :
// Average :
// Highest :
// Lowest :

// const student = {
//     name: "Ajay",
//     marks: [45, 80, 65, 90, 75]
// };
// console.log(student.name);
//  let total = 0;
// for(let i = 0;i<student.marks.length;i++)
// {
//     total+=student.marks[i];
// }
// console.log(total);
// let avg = total/student.marks.length;
// console.log(avg);

// // highest and lowest
// let highest = student.marks[0];
// let lowlest = student.marks[0];
// for(let i = 0;i<student.marks.length;i++)
// {
//     if(student.marks[i]>highest)
//     {
//         highest = student.marks[i];
//     }
//     if(student.marks[i]<lowlest)
//     {
//         lowlest = student.marks[i];
//     }
// }
// console.log(" highest value",highest);
// console.log("lowest value" , lowlest);


// task 2;
// const students = [
//     { name: "Ajay", marks: 80 },
//     { name: "Rahul", marks: 35 },
//     { name: "Amit", marks: 90 },
//     { name: "Shiva", marks: 25 },
//     { name: "Rohit", marks: 70 }
// ];

//count passed student whch conatain above of 40 marks;
// let count = 0;
// for(let i = 0;i<students.length;i++)
// {
//     if(students[i].marks>=40)
//     {
//         console.log(students[i].name);
//         count++;
//     }
// }
// console.log("count of passed student",count);

// task 3;

// const students = [
//     { name: "Ajay", marks: 80 },
//     { name: "Rahul", marks: 95 },
//     { name: "Amit", marks: 90 }
// ];

// let max = students[0].marks;

// for(let i =0;i<students.length;i++)
// {
//     if(students[i].marks>max)
//     {
//         max = students[i].marks;
//     }
// }
// console.log("highest marks",max);
// for(let i = 0;i<students.length;i++)
//     {
//         if(students[i].marks ==max)
//         {
//             console.log("name" ,students[i].name);
//         }
//     }

// task 4;

// const employees = [
//     { name: "A", salary: 25000 },
//     { name: "B", salary: 30000 },
//     { name: "C", salary: 45000 }
// ];
// let totalsalary = 0;
// for(let i =0;i<employees.length;i++)
//     {
//         totalsalary+=employees[i].salary;
//     }
//     console.log("totalsalary",totalsalary);


// task 5;

// const students = [
//     { name: "Ajay", age: 20 },
//     { name: "Rahul", age: 21 },
//     { name: "Amit", age: 19 }
// ];
// let name = "Rahul";
// for(let i = 0;i<students.length;i++)
// {
//     if(students[i].name ==name )
//     {
//         console.log("name of student",students[i].name);
//         console.log("age of student",students[i].age);

//     }
// }

// let result = students.find(student => student.name === "Rahul");
// console.log(result);

// task 6

// const users = [
//     {
//         id: 1,
//         name: "Ajay",
//         email:"ajay@example.com",
//         isVerified: true
//     },
//     {
//         id: 2,
//         name: "Rahul",
//         email:"rahul@example.com",
//         isVerified: false
//     },
//     {
//         id: 1,
//         name: "Amit",
//         email:"amit@example.com",
//         isVerified: true
//     }
// ];
// for(let i = 0;i<users.length;i++)
//     {
//         if(users[i].isVerified == true)
//             {
//                 console.log("name of users");
//                 console.log(users[i].name);
//             }
//     }

// filter method

// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Keyboard", price: 2000 },
//     { name: "Phone", price: 25000 }
// ];

// let expensive = products.filter(product =>product.price>2000);
// console.log(expensive);


// Nested Destructuring
// const user = {
//     name: "Ajay",
//     address: {
//         city: "Delhi",
//         state: "UP"
//     }
// };

// console.log(user.address.state);

// 5. Object Rest
// const user = {
//     name: "Ajay",
//     age: 20,
//     city: "Delhi"
// };

// const { name, ...details } = user;

// console.log(name);
// console.log(details);

// const employee = {
//     id:101,
//     name:"Rahul"
// };

// const {name ,salary = 0} = employee;

// console.log(name ,salary);


// const student = {
//     name:"Ajay",
//     age:20
// };

// const {name : newName ,age : newAge} = student;
// console.log(newName , newAge);









// ab ham a gaye hain ki nodde.js kya hota hain or kis liye use kerte hain 
//
////
// node .js is runtime environment that is allow to run javascript in outside the browser thta is called javascript;








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
