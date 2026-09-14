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
function checkInventory(callback)
{
  setTimeout(()=>
  {
      console.log('checking the inventory ...');
      callback();
  } , 2000);
  
  
}
function CreateOrder(callback)
{
  setTimeout(()=>
  {
      console.log('creating an order ...');
      const error = new Error('order creation error');
      callback(error);
  } , 1000);
  
}
function chargePayment(callback)
{
  setTimeout(()=>
  {
      console.log('charging the payment ...');
      const error = null;
      const chargePayment = 300;
      callback(error , chargePayment);
  } , 2000);
  
}
function sendInvoice(callback)
{
   setTimeout(()=>
  {
      console.log('send invoice ...');
      callback();
  } , 1000);
  
}
function main()
{
  checkInventory(()=>
  {
    CreateOrder((error)=>
    {
      if(error)
      {
        console.log(error);
      }
      chargePayment((err , chargePayment)=>
      {
        if(err)
        {
          console.log(err);
          return;
        }
        console.log(chargePayment);

        sendInvoice(()=>
        {
          console.log("All Done!");
        });
      });
    });
  });
  // CreateOrder();
  // chargePayment();
  // sendInvoice();
 console.log("other process is working");
}
main();