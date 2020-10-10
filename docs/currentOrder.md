## Текущий заказ
GET `orders/current`

Получение текущего заказа

```JSON
{
  "order": {
    "number": "R*********",
    "total": 489.89,
    "item_count": 3,
    "item_total": 489.89,
    "ship_total": 0,
    "adjustment_total": 0,
    "promo_total": 0,
    "shipment_state": null,
    "payment_state": null,
    "special_instructions": null,
    "created_at": "2020-10-10T22:45:58.000+03:00",
    "updated_at": "2020-10-10T23:03:25.757+03:00",
    "completed_at": null,
    "email": "asd@asd.com",
    "uuid": "1fbfb6b6-1234-1234-1234-12345a8c4567",
    "address": {
      "id": 12345678,
      "first_name": null,
      "last_name": null,
      "full_address": "Краснодар, улица Красная, 1",
      "city": "Краснодар",
      "street": "улица Красная",
      "building": "1",
      "block": null,
      "entrance": null,
      "floor": null,
      "apartment": null,
      "comments": null,
      "lat": 41.000002,
      "lon": 31.00001,
      "kind": null,
      "door_phone": null,
      "delivery_to_door": false
    },
    "payment": null,
    "replacement_policy": null,
    "shipments": [
      {
        "id": 12345678,
        "number": "H12345678901",
        "cost": 0,
        "item_total": 149.9,
        "total": 149.9,
        "state": "pending",
        "alerts": [
          {
            "message": "Минимальный заказ 1 000.00 ₽",
            "full_message": "Добавьте товаров на 851 ₽ (мин. заказ 1 000.00 ₽ ₽)",
            "type": "unsufficient_total"
          }
        ],
        "promotions": [],
        "next_deliveries": [
          {
            "id": 2283798,
            "store_id": null,
            "price": 98,
            "summary": "завтра, 10:00-12:00",
            "starts_at": "2020-10-11T10:00:00.000+03:00",
            "ends_at": "2020-10-11T12:00:00.000+03:00",
            "kind": null
          },
          {
            "id": 2283799,
            "store_id": null,
            "price": 98,
            "summary": "завтра, 11:00-13:00",
            "starts_at": "2020-10-11T11:00:00.000+03:00",
            "ends_at": "2020-10-11T13:00:00.000+03:00",
            "kind": null
          },
          {
            "id": 2283800,
            "store_id": null,
            "price": 98,
            "summary": "завтра, 12:00-14:00",
            "starts_at": "2020-10-11T12:00:00.000+03:00",
            "ends_at": "2020-10-11T14:00:00.000+03:00",
            "kind": null
          }
        ],
        "driver_name": null,
        "driver_phone": null,
        "line_items": [
          {
            "id": 193322744,
            "quantity": 1,
            "packs": 1,
            "price": 149.9,
            "total": 149.9,
            "discount": 0,
            "customer_comment": null,
            "product_in_stock": true,
            "product": {
              "id": 116040551,
              "sku": "184568",
              "retailer_sku": "64141",
              "name": "Салатная смесь Белая Дача Айсберг-Мангольд-Горчичный лист 125 г",
              "price": 149.9,
              "original_price": 149.9,
              "discount": 0,
              "human_volume": "125 г.",
              "volume": 125,
              "volume_type": "g",
              "items_per_pack": 1,
              "discount_ends_at": null,
              "images": [
                {
                  "mini_url": "https://sbermarket.ru/spree/products/247240/mini/184568.png?1585928465",
                  "small_url": "https://sbermarket.ru/spree/products/247240/small/184568.png?1585928465",
                  "product_url": "https://sbermarket.ru/spree/products/247240/product/184568.png?1585928465",
                  "preview_url": "https://sbermarket.ru/spree/products/247240/preview/184568.png?1585928465",
                  "original_url": "https://sbermarket.ru/spree/products/247240/original/184568.png?1585928465"
                }
              ]
            }
          }
        ],
        "shipping_team_members": [],
        "delivery_window": null,
        "retailer": {
          "id": 1,
          "name": "METRO",
          "slug": "metro",
          "color": "#002d72",
          "logo_background_color": "#002d72",
          "logo": "https://sbermarket.ru/spree/retailer_logos/97198/default/metro_logo.png?1524229580",
          "available": true,
          "environment": "production",
          "retailer_agreement": {
            "id": 2,
            "agreement_type": "oferta_b",
            "url": "/oferta_b"
          }
        },
        "external_partners_service": null
      },
      {
        "id": 1234556,
        "number": "H12345675444",
        "cost": 0,
        "item_total": 339.99,
        "total": 339.99,
        "state": "pending",
        "alerts": [
          {
            "message": "Минимальный заказ 1 000.00 ₽",
            "full_message": "Добавьте товаров на 661 ₽ (мин. заказ 1 000.00 ₽ ₽)",
            "type": "unsufficient_total"
          }
        ],
        "promotions": [],
        "next_deliveries": [
          {
            "id": 2286141,
            "store_id": null,
            "price": 98,
            "summary": "завтра, 09:00-11:00",
            "starts_at": "2020-10-11T09:00:00.000+03:00",
            "ends_at": "2020-10-11T11:00:00.000+03:00",
            "kind": null
          },
          {
            "id": 2286142,
            "store_id": null,
            "price": 98,
            "summary": "завтра, 10:00-12:00",
            "starts_at": "2020-10-11T10:00:00.000+03:00",
            "ends_at": "2020-10-11T12:00:00.000+03:00",
            "kind": null
          },
          {
            "id": 2286143,
            "store_id": null,
            "price": 98,
            "summary": "завтра, 11:00-13:00",
            "starts_at": "2020-10-11T11:00:00.000+03:00",
            "ends_at": "2020-10-11T13:00:00.000+03:00",
            "kind": null
          }
        ],
        "driver_name": null,
        "driver_phone": null,
        "line_items": [
          {
            "id": 193322746,
            "quantity": 1,
            "packs": 1,
            "price": 280,
            "total": 280,
            "discount": 0,
            "customer_comment": null,
            "product_in_stock": true,
            "product": {
              "id": 251065140,
              "sku": "659241",
              "retailer_sku": "462357",
              "name": "Сухари-гренки ржаные Auchan с чесноком",
              "price": 280,
              "original_price": 280,
              "discount": 0,
              "human_volume": "1 кг.",
              "volume": 1,
              "volume_type": "kg",
              "items_per_pack": 1,
              "discount_ends_at": null,
              "images": []
            }
          },
          {
            "id": 193322747,
            "quantity": 1,
            "packs": 1,
            "price": 59.99,
            "total": 59.99,
            "discount": 0,
            "customer_comment": null,
            "product_in_stock": true,
            "product": {
              "id": 251006340,
              "sku": "116234",
              "retailer_sku": "596981",
              "name": "Шампиньоны белые Мое лето мини 250 г",
              "price": 59.99,
              "original_price": 59.99,
              "discount": 0,
              "human_volume": "250 г.",
              "volume": 250,
              "volume_type": "g",
              "items_per_pack": 1,
              "discount_ends_at": null,
              "images": [
                {
                  "mini_url": "https://sbermarket.ru/spree/products/288575/mini/116234.jpeg?1591034445",
                  "small_url": "https://sbermarket.ru/spree/products/288575/small/116234.jpeg?1591034445",
                  "product_url": "https://sbermarket.ru/spree/products/288575/product/116234.jpeg?1591034445",
                  "preview_url": "https://sbermarket.ru/spree/products/288575/preview/116234.jpeg?1591034445",
                  "original_url": "https://sbermarket.ru/spree/products/288575/original/116234.jpeg?1591034445"
                }
              ]
            }
          }
        ],
        "shipping_team_members": [],
        "delivery_window": null,
        "retailer": {
          "id": 15,
          "name": "Ашан",
          "slug": "auchan",
          "color": "#d32c22",
          "logo_background_color": "#ffffff",
          "logo": "https://sbermarket.ru/spree/retailer_logos/110302/default/auchan-logo.png?1539666604",
          "available": true,
          "environment": null,
          "retailer_agreement": {
            "id": 1,
            "agreement_type": "oferta_a",
            "url": "/oferta_a"
          }
        },
        "external_partners_service": null
      }
    ],
    "promotion_codes": []
  }
}
```

Судя по всему заказ формируется для каждого магазина свой. Параметры:
- number - номер заказа 
- total - сумма заказа в рублях вместе с доставкой и всем остальным
- item_count - количество товаров в заказе
- item_total - сумма за товар в рублях
- ship_total - цена доставки в рублях
- adjustment_total - цена сборки заказа
- promo_total - хз что оно такое
- shipment_state - состояние доставки, по дефолту null
- payment_state - состояние оплаты, по дефолту null
- special_instructions - комментарии к заказу
- created_at - дата создания заказа
- updated_at - дата последнего редактирования заказа
- updated_at - дата последнего редактирования заказа