//  aj ham sekhte hain ki nonprimitive data type with implemention like tree type most ;
//  1  object  2 Arrays 3 function;

//object  that is store the data in key value pair;

// let obj = {
//     name : "shiva Pathak",
//     age : 18,
//     action : "student",
//     "full name" : "shiva pathak",// key store in double inverted because one space in between two strings so use this 
//      greet : function()
//      {
//         console.log("kya haal chal hain ");
//      }

// };

// that is for in loop use to easy because that sysntax is very normal and understadable 

// for(let key in obj)
// {
//     console.log(key," " ,obj[key]);
// }

// console.log(obj);
// obj.greet();

//  arrays is the collection of items

// let arr = [1,2,"shiva",true];
// console.log(arr);

// let brr = new Array(1,"shiva" );// array constructor;
// brr.push("pathak");//add in the end
// console.log(brr);
// brr.pop();    // remove from the end
// console.log(brr);
// brr.shift();    //remove from first 
// console.log(brr);
// brr.unshift("jane honsam"); // add in the first
// console.log(brr);
// brr.push(10);
// brr.push(20);
// brr.push(30);
// brr.push(40);
// console.log(brr);
// console.log(brr.slice(1,4));// slice that is give me a part of array ;
// brr.splice(1,2,"mayank"); // splice update the value in array;
// console.log(brr);


// let arr = [11, 20 ,31,40,51,60];

//  let ansArray = arr.map((Number)=>
// {
//     return Number*Number;
// })
// console.log(ansArray); // that is a map function 

// arr.map((Number , index) =>
// {
//     console.log(Number+1);
//     console.log(index);
// })

//  let arr = [1, 2, 3, 4, 5, 6];

// let ansArray = arr.filter((number) => {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(ansArray);

// let arr = [10,20,30,40];

// let ans = arr.reduce((accu , curr)=>
// {
//     return accu+curr;

// } ,0);

// console.log(ans);  that is the method of reduce to that prform multiple operation without use anylogic;

// let arr = [3,4,7,10,1,20,2,5];

// arr.sort();
// console.log(arr);
// console.log(arr.indexOf(5));


//for each loop 

// let arr = [1,2,3,4];

// arr.forEach((value) =>
// {
//     console.log("value", value);
// })



/// that is for of loop ;
// let arr = [10 ,20,30,40];

// for(let value of arr)
// {
//     console.log(value);
// }
// let ans = "shiva";

// for(let value of ans)
// {
//     console.log(value);
// }


