using System.Collections.Generic;
using System.Linq;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> Items { get; set; } = new();
        //add items to basket
        public void AddItem(Product product, int quantity)
        {
            if (Items.All(item => item.ProductId != product.Id))
            {

                //add item
                Items.Add(new BasketItem()
                {
                    Product = product,
                    Quantity = quantity
                });
            }

            //get existing item
            var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);

            //if exists, increment quantity
            if (existingItem != null) existingItem.Quantity += quantity;
            
        }

        public void RemoveItem(int productid, int quantity)
        {
            var item = Items.FirstOrDefault(item => item.ProductId == productid);

            if (item == null) return;
            item.Quantity -= quantity;
            if(item.Quantity == 0) Items.Remove(item);
        }
    }
}