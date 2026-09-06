  // ek function lekte hain jisko kisi dusri file main use kerna hain okk

  function add(a,b)
  {
    return a+b;
  }

  //console.log(add(2 ,3));// yahan se to is file main hi use ho raha hain lekin isko hame dusri file main use kerna hain to vo deke;


  // file ko ager use kerna hain dusri file main to use export bi kerna padega ;

  function sub(a,b)
  {
    return a-b;
  }

  module.exports = // ab isme object pass karenge kyoki ek se jayda function hain isliye;
  {
    add,
    sub
  };