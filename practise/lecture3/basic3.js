// operator is a symble that performed many operation with operand a+b;

// spread operator 
// This is one of the most confusing topics in JavaScript, but it's actually very simple.

// The same syntax (...) is used for two different purposes:

// create a array of numbsers
// spread operator with Array;
// const nums = [10,20,30];
// console.log(...nums); // output 10 20 30

// // without spread opertor
// console.log(nums); //output [ 10, 20, 30 ]

// merge arrays;
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1,...arr2];
// console.log(arr3); // output [ 1, 2, 3, 4, 5, 6 ]   

// Spread with Objects

// const user = {
//     name: "shiva",
//     age: 19
// };
// const student = {
//     ...user,
//     city: " Ghaziabad"
// };
// console.log(student);


// Rest Operator (...)

// function sum(...nums)
// {
//     console.log(nums);
// }
// sum(1,2,3,4);

// function sum(...nums)
// {
//   let total = 0;
//   for(let num of nums){
//         total += num;
//     }

//     return total;
// }
// console.log(sum(1,2,3,4,5));


// if else conditions that is implemrnt in below;

// const age = 8;

// if(age>=18)
//     {
//     console.log("You are eligible to vote");
//     }
//     else
//         {
//             console.log("you are not eligible to vote");
//         }

//switch statment 

// let num = 5;

// switch(num)
// {
//     case 1: console.log("A");
//     break;
//     case 2: console.log("B");
//     break;
//     case 3: console.log("C");
//     break;
//     case 4: console.log("D");
//     break;
//   default: console.log("E");


// }