# sbermarket-api
Неофициальный nodejs api-клиент для Сбермаркета, полностью на typescript. Для чего?
- просто по-фану;
- очень хочется  накидывать в корзину типовые товары быстро и без боли, прям скриптом; :-)
- поиск наилучших ценовых предложений по магазинам доступным в Сбермаркете;

К сожалению, официального публичного api не нашлось. Саппорт тоже ничего по этому поводу не ответил.

*WARNING! Under construction.*


### Установка
```npm i sbermarket-api```
 или
```yarn add sbermarket-api```

### Использование
1. Необходимо передать Credentials `email`,`password`,`latitude`,`longitude`;
3. Примеры выполнения кода можно найти в папке `example`;

```JavaScript

const sbermarketApi= require("sbermarket-api");
const credentials = {
  email: "asd@asd.asd", //email
  password: "123123123", //пароль
  latitude: 45.0001, // широта
  longitude: 36.0001 // долгота
}
// По широте и долготе сервак сбермаркета определяет какие магазины доступны.
const apiClient = new sbermarketApi(credentials);

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

  apiClient.search(251, "икра путина").then((data) => {
    console.log(data);
  });


});
```


### Авторизация

У ребят используется классическая Basic авторизация `base64(email:password)` в заголовок `Authorization`.

Пример: `Authorization: Basic ZW1haWw6cGFzc3dvcmQ==`

baseUrl : `https://api.sbermarket.ru/v2/`

Для логина есть готовый метод `login()`


### Методы

| Название метода| Что делает? |
| ------------- |:-------------|
|[getUser](#getUser) | Получить данные о юзере|
|[getStore](#getStore) |Получить данные о магазине|
|[getStores](#getStores)|Получить список магазинов доступных в текущей локации|
|[getCurrentOrder](#getCurrentOrder) |Получить текущий заказ/корзину|
|[getCategories](#getCategories) |Получить все категории магазина|
|[getCategoryProducts](#getCategoryProducts) |Получить список продуктов в категории|
|[getProduct](#getProduct) |Получить информацию о товаре|
|[addToOrder](#addToOrder) |Добавить товар в заказ/корзину|
|[removeFromOrder](#removeFromOrder) |Удалить предложение из корзины|
|[search](#search) |Искать по товарам с пагинацией в конкретном магазине|

#### getUser
 Получить информацию о текущем юзере.
```JavaScript
 apiClient.getUser().then((data) => {
    console.log(data);
 });
```

#### getStore
Получение данных о магазине.
```JavaScript
 apiClient.getStore(251).then((data) => {
    console.log(data);
 });
```

#### getStores
Получить список магазинов доступных в текущей локации.
```JavaScript
 apiClient.getStores().then((data) => {
    console.log(data);
 });
```

#### getCurrentOrder
Получить текущий заказ/корзину.
```JavaScript
 apiClient.getCurrentOrder().then((data) => {
    console.log(data);
 });
```

#### getCategories
Получить все категории магазина.

Принимает параметр:
 1. `storeId` - id магазина;
```JavaScript
 apiClient.getCategories(251).then((data) => {
    console.log(data);
 });
```

#### getCategoryProducts
Получить список продуктов в категории.

Принимает два параметра:
1. `taxonId` - id категории;
2. `storeId` - id магазина;
```JavaScript
 apiClient.getCategoryProducts(1145,251).then((data) => {
    console.log(data);
 });
```


#### getProduct
Получить информацию о товаре.

Принимает один параметр:
1. `productId` - id продукта;
```JavaScript
 apiClient.getProduct(666777).then((data) => {
    console.log(data);
 });
```

#### addToOrder
Добавить товар в заказ/корзину.

Принимает три параметра:
1. `orderNumber` - номер заказа;
2. `productId` - id продукта;
3. `quantity` - количество;
```JavaScript
 apiClient.getProduct("R*********",666777,1).then((data) => {
    console.log(data);
 });
```
Возвращает: `line_item`, как я понял конкретное актуальное торговое предложение.

#### removeFromOrder
Удалить предложение из корзины.

Принимает один параметр:
1. `lineItemId` - id торгового предложения;
```JavaScript
 apiClient.removeFromOrder(1231231).then((data) => {
    console.log(data);
 });
```


#### search
Искать по товарам с пагинацией в конкретном магазине.

Принимает четыре параметра:
1. `storeId` - id магазина;
2. `query` - поисковый запрос;
3. `perPage` - количество продуктов на одной странице;
4. `page` - номер страницы, отсчет от 1;
```JavaScript
 apiClient.search(251,"Кошкина радость",20,1).then((data) => {
    console.log(data);
 });
```


## TODO:
- [x] выровнять readme.md
- [X] получение доступных магазинов
- [ ] кэширование дерева
- [ ] кэширование токена
- [X] эмуляция гео
- [x] типизировать все запросы
- [x] поиск товаров и категорий
- [ ] тесты


## Disclaimer
Автор сего кода не несет никакой ответственности. Использовать только на свой страх и риск, все права пренадлежат владельцам прав.
