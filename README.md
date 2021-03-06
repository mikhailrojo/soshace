[Зайти на сайт с реализацией](https://soshace.herokuapp.com "Ссылка на сайт c тестовым заданием Soshace")

## Тестовое задание для компании Soshace ##

Суть задачи: Создать приложение на MEAN stack (Mongo, Express, Angular, Node) любой направленности с реализованными CRUD операциями.

Так как после собеседования, у меня в голове было только собеседование, то я решил создать приложение для планирования собеседований на день.


### Процесс работы ###
1. Так как приложение простое, то не использовал Express scaffolding и писал app.js c нуля
2. Опять же из-за простоты совсем не использовал на сервере декомпозицию (так как простое одностраничное приложение)
3. Тема Bootstrap, взятая из Initializr
4. MongoDb расположена на mongodlab.net и запросы совершаются через библиотеку Mongoose.js
5. Сам сервер располагается на бесплатном сервере Хероку
6. Опять же из-за простоты и того, что приложение не хранит абсолютно ничего важного - авторизация админа храниться в куке, при разлогинивании кука удаляется.

#### Заключение ####
Больших сложностей не было, сделал задание примерно за 8 часов работы, задача была выполнена, обратная связь получена положительная.
Если бы задачей было показать больше знаний например маршрутизации, авторизации, работой с базой данных - приложение было бы сложнее.


### Описание приложения до реализации ###

* Приложение для собеседований, соответственно сайт, на котором таблица с собеседованиями: имя/фамилия/время.
* В правом верхнем углу форма, чтобы залогиниться. 
* Если логиниться админ - то у него появляется возможность добавлять новых кандидатов (имя и фамилия) и время.
* Также у админа есть напротив каждой фамилии - возможность редактировать: время собеседования/ФИО а также удалять строчку(если собеседование отменилось).
