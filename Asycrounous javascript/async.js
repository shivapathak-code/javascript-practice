// that is syncronous js
// function checkInventory()
// {
//   console.log('checking the inventory ...');
// }
// function CreateOrder()
// {
//   console.log('creating an order ...');
// }
// function chargePayment()
// {
//   console.log('charging the payment ...');
// }
// function sendInvoice()
// {
//   console.log('send invoice ...');
// }
// function main()
// {
//   checkInventory();
//   CreateOrder();
//   chargePayment();
//   sendInvoice();
//  console.log("other process is working");
// }
// main();

// Asycrounous javascript
function checkInventory()
{
  setTimeout(()=>
  {
      console.log('checking the inventory ...');
  } , 2000);
  
}
function CreateOrder()
{
  setTimeout(()=>
  {
      console.log('creating an order ...');
      
  } , 1000);
  
}
function chargePayment()
{
  setTimeout(()=>
  {
      console.log('charging the payment ...');

  } , 2000);
  
}
function sendInvoice()
{
   setTimeout(()=>
  {
      console.log('send invoice ...');

  } , 1000);
  
}
function main()
{
  checkInventory();
  CreateOrder();
  chargePayment();
  sendInvoice();
 console.log("other process is working");
}
main();