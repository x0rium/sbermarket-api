### Поиск товара

GET `products?page=1&per_page=20&q=%D0%92%D0%BE%D0%B4%D0%BA%D0%B0&sid={{storeId}}`


```JSON
{
  "products": [
    {
      "id": 251026358,
      "sku": "372092",
      "retailer_sku": "118070",
      "name": "Рюмка для водки Luminarc Domino 65 мл",
      "price": 110.99,
      "original_price": 110.99,
      "discount": 0,
      "human_volume": "1 шт.",
      "volume": 1,
      "volume_type": "items",
      "items_per_pack": 1,
      "discount_ends_at": null,
      "images": []
    }
  ],
  "meta": {
    "current_page": 1,
    "next_page": null,
    "previous_page": null,
    "total_pages": 1,
    "per_page": 20,
    "total_count": 1
  },
  "facets": [
    {
      "key": "discounted",
      "name": "Товары со скидкой",
      "type": "toggle",
      "options": [
        {
          "value": 1,
          "count": 0,
          "active": false
        }
      ]
    },
    {
      "key": "brand",
      "name": "Бренд",
      "type": "select",
      "options": [
        {
          "name": "Luminarc",
          "value": 1998,
          "count": 1,
          "permalink": "luminarc",
          "active": false
        }
      ]
    },
    {
      "key": "country",
      "name": "Страна изготовления",
      "type": "select",
      "options": [
        {
          "name": "Франция",
          "permalink": "frantsiia",
          "value": 20,
          "count": 1,
          "active": false
        }
      ]
    }
  ],
  "sort": [
    {
      "key": "popularity",
      "name": "По популярности",
      "order": "desc",
      "active": true
    },
    {
      "key": "price_asc",
      "name": "Сначала дешевые",
      "order": "asc",
      "active": false
    },
    {
      "key": "price_desc",
      "name": "Сначала дорогие",
      "order": "desc",
      "active": false
    }
  ]
}
```