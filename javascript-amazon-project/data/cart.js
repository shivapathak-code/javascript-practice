export const cart = [];

export function addtocart(productId)
{
    let machingItem;
      cart.forEach((item)=>{
        if(productId === item.productId)
        {
          machingItem = item;
        }
      });
      if(machingItem)
      {
        machingItem.quantity+=1;
      }
      else
      {
        cart.push({
        productId:productId,
        quantity:1
      });
      }
}