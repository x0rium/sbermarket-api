## Получение данных о юзере
GET https://api.sbermarket.ru/v2/users/asd%asd.com HTTP/1.1

```JSON
{
  "user": {
    "id": "1fbfb6b6-1234-1234-1234-12345a8c4567",
    "email": "asd@asd.com",
    "display_email": "asd@asd.com",
    "first_name": "Васян",
    "last_name": "Иванов",
    "has_confirmed_phone": true,
    "privacy_terms": true,
    "promo_terms_accepted": false,
    "promo_terms_changed_at": "2020-10-10T16:04:31.000+03:00",
    "current_phone": null,
    "config": {
      "send_emails": true,
      "send_sms": true,
      "send_push": true,
      "default_bonus_card_id": null
    }
  }
}
```

interface User in user.ts
