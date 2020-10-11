# sbermarket-api
Неофициальный nodejs клиент api-клиент для Сбермаркета. Для чего?
- просто по-фану
- очень хочется  накидывать в корзину типовые товары быстро и без боли, прям скриптом)
- поиск наилучших ценовых предложений по магазинам доступным в Сбермаркете

К сожалению, официального публичного api не нашлось. Саппорт тоже ничего по этому поводу не ответил.

*WARNING! Under construction.*

### Использование
0. Установить пакет `npm i sbermarket-api` или `yarn add sbermarket-api`
1. Необходимо передать два параметра `email` и `password`
3. Примеры выполнения кода можно найти в папке `example`

```JavaScript

const sbermarketApi= require("sbermarket-api");
const apiClient = new sbermarketApi({email:"asd.asd@asd.asd",password:"asdasd123"})

// логинимся
apiClient.login().then((isValid) => {
  if (!isValid) return false;

  // получить данные о текущем юзере
  apiClient.getUser().then((data) => {
    console.log(data);
  });

  // получить данные о текущем заказе, оно же корзина
  apiClient.getCurrentOrder().then((data) => {
    console.log(data);
  });

  // получить данные о магазине
  apiClient.getStore(251).then((data) => {
    console.log(data.store.location);
  });

});
```


### Авторизация

POST https://api.sbermarket.ru/v2/sessions HTTP/1.1

Используется классическая Basic авторизация `base64(email:password)` в заголовок

Пример: `Authorization: Basic ZW1haWw6cGFzc3dvcmQ==`

`baseUrl` : `https://api.sbermarket.ru/v2/`


### Получение данных о юзере
GET `users/{{email}}`

Название метода: `getUser()`

Смотри подробнее в [./docs/users.md](./docs/users.md)

### Описание поставщика +
GET `stores/{{storeId}}`

Название метода: `getStore()`


Смотри подробнее в [./docs/stores.md](./docs/stores.md)


### Корзина +
GET `orders/current`

Название метода: `getCurrentOrder()`

Смотри подробнее в [./docs/currentOrder.md](./docs/currentOrder.md)


### Получение категории +
GET `taxons/{{taxonId}}?sid={{storeId}}`

Название метода: `getCategory()`

Смотри подробнее в [./docs/taxons.md](./docs/taxons.md)


### Получение товара +
GET `products/{{productId}}`

Название метода: `getProduct()`

Смотри подробнее в [./docs/product.md](./docs/product.md)


### Добавление товара в корзину +
POST `line_items`

Название метода: `addToOrder(номер заказа, id продукта, количество)`

Смотри подробнее в [./docs/line_items.md](./docs/line_items.md)


### Поиск товара +
GET `products?page=1&per_page=20&q=%D0%92%D0%BE%D0%B4%D0%BA%D0%B0&sid={{storeId}}`

Название метода: `search(id магазина, поисковый запрос, количество продуктов на страницу, номер страницы)`

Смотри подробнее в [./docs/products.md](./docs/products.md)


##TODO:
- [ ] выровнять readme.md
- [ ] получение доступных магазинов
- [ ] кэширование дерева
- [ ] кэширование токена
- [ ] эмуляция гео
- [ ] типизировать все запросы
- [x] поиск товаров и категорий
- [ ] тесты


## Disclaimer
Автор сего кода не несет никакой ответственности.
