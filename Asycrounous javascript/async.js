// that is syncronous js
function checkInventory()
{
  console.log('checking the inventory ...');
}
function CreateOrder()
{
  console.log('creating an order ...');
}
function chargePayment()
{
  console.log('charging the payment ...');
}
function sendInvoice()
{
  console.log('send invoice ...');
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
