### Добавление товара в корзину
POST `line_items`

Body:
```
line_item[order_number]=R*********
line_item[product_id]=251061935
line_item[quantity]=1
```

```JSON 
{
  "line_item": {
    "id": 193341307,
    "quantity": 1,
    "packs": 1,
    "price": 473,
    "total": 473,
    "discount": 0,
    "customer_comment": null,
    "product_in_stock": true,
    "product": {
      "id": 251061935,
      "sku": "659543",
      "retailer_sku": "54142",
      "name": "Рулька свиная",
      "price": 473,
      "original_price": 473,
      "discount": 0,
      "human_volume": "1 кг.",
      "volume": 1,
      "volume_type": "kg",
      "items_per_pack": 1,
      "discount_ends_at": null,
      "images": []
    }
  }
}
```