### Получение товаров в категории
GET https://api.sbermarket.ru/v2/products?sid=251&tid=6334&page=1 HTTP/1.1
-  sid - store Id, id поставщика (на данный момент 251 - Ашан)
-  tid - taxon Id, id категории
-  page - номер страницы

Ответ:
```JSON
{
  "products": [
    {
      "id": 251002168,
      "sku": "128528",
      "retailer_sku": "318944",
      "name": "Яйца куриные Желток Солнца С0 10 шт",
      "price": 64.49,
      "original_price": 64.49,
      "discount": 0,
      "human_volume": "10 шт.",
      "volume": 10,
      "volume_type": "items",
      "items_per_pack": 1,
      "discount_ends_at": null,
      "images": [
        {
          "mini_url": "https://sbermarket.ru/spree/products/192111/mini/128528.jpg?1567066337",
          "small_url": "https://sbermarket.ru/spree/products/192111/small/128528.jpg?1567066337",
          "product_url": "https://sbermarket.ru/spree/products/192111/product/128528.jpg?1567066337",
          "preview_url": "https://sbermarket.ru/spree/products/192111/preview/128528.jpg?1567066337",
          "original_url": "https://sbermarket.ru/spree/products/192111/original/128528.jpg?1567066337"
        }
      ]
    },
    {
      "id": 251003086,
      "sku": "128514",
      "retailer_sku": "301119",
      "name": "Яйцо куриное Птицефабрика Таганрогская С0 15 шт",
      "price": 95.49,
      "original_price": 95.49,
      "discount": 0,
      "human_volume": "15 шт.",
      "volume": 15,
      "volume_type": "items",
      "items_per_pack": 1,
      "discount_ends_at": null,
      "images": []
    },
    {
      "id": 251004734,
      "sku": "128522",
      "retailer_sku": "786970",
      "name": "Яйцо куриное Птицефабрика Таганрогская С0 30 шт",
      "price": 237.99,
      "original_price": 237.99,
      "discount": 0,
      "human_volume": "30 шт.",
      "volume": 30,
      "volume_type": "items",
      "items_per_pack": 1,
      "discount_ends_at": null,
      "images": []
    },
    {
      "id": 251004603,
      "sku": "200337",
      "retailer_sku": "318952",
      "name": "Яйцо куриное Желток солнца Йодированное С1 10 шт",
      "price": 71.99,
      "original_price": 71.99,
      "discount": 0,
      "human_volume": "10 шт.",
      "volume": 10,
      "volume_type": "items",
      "items_per_pack": 1,
      "discount_ends_at": null,
      "images": [
        {
          "mini_url": "https://sbermarket.ru/spree/products/225758/mini/200337.jpg?1588007198",
          "small_url": "https://sbermarket.ru/spree/products/225758/small/200337.jpg?1588007198",
          "product_url": "https://sbermarket.ru/spree/products/225758/product/200337.jpg?1588007198",
          "preview_url": "https://sbermarket.ru/spree/products/225758/preview/200337.jpg?1588007198",
          "original_url": "https://sbermarket.ru/spree/products/225758/original/200337.jpg?1588007198"
        },
        {
          "mini_url": "https://sbermarket.ru/spree/products/262803/mini/200337_2.jpg?1588007198",
          "small_url": "https://sbermarket.ru/spree/products/262803/small/200337_2.jpg?1588007198",
          "product_url": "https://sbermarket.ru/spree/products/262803/product/200337_2.jpg?1588007198",
          "preview_url": "https://sbermarket.ru/spree/products/262803/preview/200337_2.jpg?1588007198",
          "original_url": "https://sbermarket.ru/spree/products/262803/original/200337_2.jpg?1588007198"
        }
      ]
    },
    {
      "id": 251004733,
      "sku": "128521",
      "retailer_sku": "786967",
      "name": "Яйцо куриное Птицефабрика Таганрогская С1 30 шт",
      "price": 267.99,
      "original_price": 267.99,
      "discount": 0,
      "human_volume": "30 шт.",
      "volume": 30,
      "volume_type": "items",
      "items_per_pack": 1,
      "discount_ends_at": null,
      "images": []
    },
    {
      "id": 251004645,
      "sku": "128512",
      "retailer_sku": "301124",
      "name": "Яйцо куриное Птицефабрика Таганрогская С2 10 шт",
      "price": 53.49,
      "original_price": 53.49,
      "discount": 0,
      "human_volume": "10 шт.",
      "volume": 10,
      "volume_type": "items",
      "items_per_pack": 1,
      "discount_ends_at": null,
      "images": []
    },
    {
      "id": 251004598,
      "sku": "660220",
      "retailer_sku": "318961",
      "name": "Яйцо куриное Аксайская птицефабрика Желток солнца С2 30 шт 1500 г",
      "price": 154.49,
      "original_price": 154.49,
      "discount": 0,
      "human_volume": "1.5 кг.",
      "volume": 1.5,
      "volume_type": "kg",
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
    "per_page": 24,
    "total_count": 7
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
          "name": "Птицефабрика Таганрогская",
          "value": 8912,
          "count": 4,
          "permalink": "ptitsefabrika-taganrogskaya",
          "active": false
        },
        {
          "name": "Желток Солнца",
          "value": 8913,
          "count": 2,
          "permalink": "zheltok-solntsa",
          "active": false
        },
        {
          "name": "Аксайская птицефабрика",
          "value": 35713,
          "count": 1,
          "permalink": "aksayskaya-ptitsefabrika",
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
          "name": " Россия ",
          "permalink": "rosiiya",
          "value": 97,
          "count": 7,
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


