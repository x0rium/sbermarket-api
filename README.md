# sbermarket-tools
Неофициальный nodejs клиент api-клиент для Сбермаркета. Для чего?
- просто по-фану
- очень хочется  накидывать в корзину типовые товары быстро и без боли, прям скриптом)
- поиск наилучших ценовых предложений по магазинам доступным в Сбермаркете

К сожалению официального публичного api не нашлось.


### Авторизация

POST https://api.sbermarket.ru/v2/sessions HTTP/1.1

Используется классическая Basic авторизация `base64(email:password)` в заголовок

Пример: `Authorization: Basic dHV4ZXJhQGdtYWlsLmNvbTo0MzE1MjU4Ng==`

`baseUrl` : `https://api.sbermarket.ru/v2/`

### Получение данных о юзере +
GET `users/{{email}}`

`getUser()`

Смотри подробнее в [./docs/users.md](./docs/users.md)

### Описание поставщика +
GET `stores/{{storeId}}`

`getStore()`


Смотри подробнее в [./docs/stores.md](./docs/stores.md)


### Корзина +
GET `orders/current`

`getCurrentOrder()`

Смотри подробнее в [./docs/currentOrder.md](./docs/currentOrder.md)


### Получение категории +
GET `taxons/{{taxonId}}?sid={{storeId}}`

`getCategory()`

Смотри подробнее в [./docs/taxons.md](./docs/taxons.md)


### Получение товара +
GET `products/{{productId}}`

`getProduct()`

Смотри подробнее в [./docs/product.md](./docs/product.md)


### Добавление товара в корзину
POST `line_items`

addToOrder(номер заказа, id продукта, количество)

Смотри подробнее в [./docs/line_items.md](./docs/line_items.md)


### Поиск товара
GET `products?page=1&per_page=20&q=%D0%92%D0%BE%D0%B4%D0%BA%D0%B0&sid={{storeId}}`

Смотри подробнее в [./docs/products.md](./docs/products.md)


##TODO:
- [ ] выровнять readme.md
- [ ] получение доступных магазинов
- [ ] кэшировавние дерева
- [ ] кэшировавние токена
- [ ] эмуляция гео
- [x] поиск товаров и категорий


## Disclaimer
Автор сего кода не несет никакой ответственности.
