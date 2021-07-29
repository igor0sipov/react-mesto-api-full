# Mesto Express Api

В этом приложении реализовано Api для [react-mesto-auth](https://github.com/igor0sipov/react-mesto-auth)

Для этого используются следующие технологии:

- node.js
- Express
- mongoDB

Реализована работа с базой данных:

- Добавление/удаление фото и лайков
- Регистрация и авторизация пользователя
- Редактирования профиля и фотографии пользователя

Эндпоинты:

## User Requests

```bash
GET /users/me - информация о пользователе
```

```bash
PATCH /users/me - редактирование профиля авторизованного пользователя
```

```bash
PATCH /users/me/avatar - редактирование аватара авторизованного пользователя
```

```bash
GET /users - получение всех пользователей
```

```bash
GET /users/:id - получение определенного пользователя
```

```bash
PATCH /users/me - редактирование профиля авторизованного пользователя
```

## Cards Requests

```bash
GET /cards - получение списка всех карточек
```

```bash
POST /cards - добавление карточки
```

```bash
DELETE /cards/:cardId - удаление определенной карточки
```

```bash
PUT /cards/:cardId/likes - поставить лайк
```

```bash
DELETE /cards/:cardId/likes - убрать лайк
```

## Запуск

Для локального запуска необходима версия из ветки **local**.
Далее нужно перейти в папку

```bash
../react-mesto-api-full/backend
```

Далее необходимо установить модули командой

```bash
npm install
```

И запустить версию для разработки с hot reload

```bash
npm run dev
```

Или командой

```bash
npm run start
```

которая имитирует production режим. В ней нет горячей перезагрузки и .env файл создается с переменной

```bash
NODE_ENV=production
```

## Удаленная версия

Удаленная версия располагается на Яндекс.Облаке и доступна по следующим данным:

```bash
server-ip: 84.201.167.232
```

[Ссылка на API](https://api.mesto.fakealien.students.nomoredomains.icu/)

[Ссылка на приложение](https://mesto.fakealien.students.nomoredomains.icu/)
