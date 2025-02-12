//OBJECT
//https://youtu.be/u9-o4bGRxZM
// const test1 = 100;
// const test2 = 50;
// const user = {
//   username: 'Olga',
//   age: 47,
//   language: {
//     html: true,
//     css: true,
//     react: false,
//   },
//   rezult: test1 + test2,
// };
// console.log(user.language.html);
// console.log(user['language']['css']);
// console.log(user.language['react']);

// user.city = 'Kyiv';
// console.log(user); //додаємо ключ до обєкту
// user.city = 'Sumy';
// console.log(user); //присвоюємо нове значення ключу обєкта
// console.log(user['city']);//Sumy
// console.log(user.city)//Sumy

//Це варіанти , як можна достукатись до зачення ключа обєкта

//Перебираємо обєкт , щоб достукатись до значення ключа обєкту за
//допомогою for in
//**** якщо вкажемо key  без квадратних дужок, то буде безпосередньо браузер шукати назву key
// for (let key in user) {
//   //   console.log(key); //username, age, language
//   console.log(user[key]); //Olga, 47, {html: true, css: true, react: false}
// }

//_______________________________________________________________________________
//Власний та невласний(унаслідований )обєкт
//Власний обєкт,створений самостійно
// const user = {
//   username: 'Olga',
//   age: 47,
//   language: {
//     html: true,
//     css: true,
//     react: false,
//   },
// };

//Невласний, створений на основі іншого обєкту - ПРОТОТИПНІ ЗВЯЗКИ
//Створи мені копію обєкту на основі обєкта user за допомогою методу Object.create(user)
//По факту отримаємо пустий обєкт але на прототипі буде лежати обєкт user ,
//з якого можна діствати значення ключів
//Якщо ми змінюємо якийсь ключ, то зміни відбуваються лише в новому обєкті, на
//прототипі залишається все без змін
// const copyUser = Object.create(user);
// console.log(copyUser);
// console.log(copyUser.age); //47
// console.log((copyUser.age += 1)); // 48, але на прототипі 47
// console.log(copyUser);

//Якщо треба дізнатись, чи є ключ власним ключем copyUser , застосовуємо  цикл for in,
//та застосовуємо на обєкті  метод  hasOwnProperty(key)
// for (const key in copyUser) {
//   if (copyUser.hasOwnProperty(key)) {
//     console.log('Own', copyUser[key]); //Own 48
//   } else {
//     console.log('All', copyUser[key]); //All Olga; All html: true, css: true, react: false}
//   }
// }

//Розглянемо випадок чи є ключ в обєкті:
// можна застосувати hasOwnProperty(), тоді покаже результат у випадку власного ключа
// можно застосувати in, тоді отримаємо результат і наявність власного ключа і на прототипі,
// тобто повнну інформацію
// const account = {
//   UserName: 'Olha',
//   score: 0,
// };
// const copyAccount = Object.create(account); // створили невласний обєкт
// console.log(copyAccount);
// copyAccount.score = 10000; //змінили значення ключа
// copyAccount.age = 30; //додали  новий ключ  age
// console.log(copyAccount);
// if ('score' in copyAccount) {
//   // створили умову для пошуку ключа в обєкті та його прототипі
//   console.log('yes'); //yas
// } else {
//   console.log('not');
// }
// if (account.hasOwnProperty('age')) {
//   console.log('yes');
// } else {
//   console.log('Not'); //not, тому що на прототипі немає ключа age
// }

//__________________________________________________________
//Метод обєкту (таж сама функція тільки без слова function)- він може бути методом обєкту

// const user = {
//   username: 'Olga',
//   age: 47,
//   language: {
//     html: true,
//     css: true,
//     react: false,
//   },
//   seyHello() {
//     console.log(`My name is ${this.username} and I am  ${this.age}`);
//   },
//   iKnow() {
//     const keys = Object.keys(this.language); // перебрали обєкт і створили масив ключів
//     console.log(keys); //['html', 'css', 'react']
//     //тепер перебираємо отриманий масив for of, пишемо умову- this.language[key],яка виводить в тіло if
//     // ключі ,які відповідають true
//     for (const key of keys) {
//       if (this.language[key]) {
//         console.log(key); // itml, css
//       }
//     }
//     const values = Object.values(this.language);
//     console.log(values); // [true, true, false]
//   },
// };
// user.seyHello(); //username: 'Olga', age: 47, language: {…}, seyHello: ƒ} -
// user.iKnow();
// // - ОБОВЯЗКОВО викликаємо метод(функцію) обєкта звертаючись до самого обєкта
// user.iKnow();

//Exemple 1
// user = {
//   name: 'Oleg',
//   age: 12,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy'; //додали новий ключ
// user.hobby = 'skydriver'; //змінили значення ключа
// user.premium = true; //змінили значення ключа
// const keys = Object.keys(user); //перетворили обєкт у масив ключів
// console.log(keys); // ['name', 'age', 'hobby', 'premium', 'mood']
// for (const key of keys) {
//   console.log(` ${key} - ${user[key]}`); //вивели вміст обєкта user ключ - значення

// }Exemple 2_ Вирахувати загальну суму____________________________________________________
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Peter: 130,
// };
// Варіант  з for in
// let sum = 0;
// for (const key in salaries) {
//   console.log(key);
//   sum += salaries[key];
// }
// console.log(sum);

//Варіант  з Object.value()
// let sum = 0;
// const values = Object.values(salaries);
// console.log(values); //[100, 160, 130]
// for (const value of values) {
//   console.log(value);//100,160,130
//   sum += value;
// }
// console.log(sum);//390

// }Exemple 3_____________________________________________________
// const stones = [
//   {
//     name: 'Smarad',
//     price: 1400,
//     quantity: 8,
//   },
//   {
//     name: 'Rubin',
//     price: 1700,
//     quantity: 10,
//   },
//   {
//     name: 'Diamant',
//     price: 5700,
//     quantity: 2,
//   },
// ];
// function calcTotaPrice(stones, stouneName) {
//   for (const stone of stones) {
//     console.log(stone); //обозвали оьект - stone и теперь обращаемся к его ключам,
//     //чтоб получить общую стоимость камня.
//     //В функцию вторым параметром приходит - stouneName. Пишем условие, если название
//     // введенного камня совпадает с названием камня в обекте то считается общая стоимость
//     //Обязательно возвращаем  нужную нам переменую -  return rezult

//     if (stone.name === stouneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return 'Empty';
// }
// console.log(calcTotaPrice(stones, 'Rubin')); //17000

// Exemple 4____________________________________________________
// Напиши скрипт управління собистим інтернет банком. Є обєкт account
//вякому необхідно реалізувати методи для роботи з балансом та історією транзакцій
//Типи транзакційвсого два
//Можливо покласти гроші на рахунок та зняти

// const Tranzaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// //Кожна транзакція це обєкт з властивостями: id, type, amount

// const account = {
//   //поточний баланс
//   balance: 0,
//   //Історія транзакцій
//   tranzactions: [{ id: 16, amount: 123, type: 'deposit' }],
//   //Метод створює та повертає обєкт транзакцій. Прийсає суму та тип транзакцій
//   createTranzaction(amount, type) {
//     return {
//       id: Date.now(), //створюємо id по даті в мілісекундах
//       amount, // cуму вказуємо при виклику функціі
//       type, // тип вказуємо при виклику функціі- 'deposit' чи 'withdraw'
//     };
//   },
//   //Метод якій відповідаєза додавання суми до балансу
//   //Приймає суму транзакціі
//   //Викликає createTranzaction для створення обєкту транзакціі
//   //Після чого додає його до історіі транзакціі
//   depozst(amount) {
//     if (amount <= 0) {
//       return 'Error';
//     }
//     const objTransactionDepozit = this.createTranzaction(
//       amount,
//       Tranzaction.DEPOSIT
//     );
//     console.log(objTransactionDepozit);
//     this.tranzactions.push(objTransactionDepozit);
//     this.balance += amount;
//   },
//   withdraw(amount) {
//     if (amount > this.balance || amount <= 0) {
//       return console.log('Не можливо зняти кошти');
//     }
//     const objTransactionWithdraw = this.createTranzaction(
//       amount,
//       Tranzaction.WITHDRAW
//     );
//     console.log(objTransactionWithdraw);
//     this.tranzactions.push(objTransactionWithdraw);
//     this.balance -= amount;
//   },
//   //повернути поточний баланс
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionById(id) {
//     for (const transaction of this.tranzactions)
//       if (transaction.id === id) {
//         return transaction;
//       }
//     return 'empty';
//   },
//   getTransactionType(type) {
//     let sum = 0;
//     for (const transaction of this.tranzactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
// };
// console.log(account.createTranzaction(1000, 'deposit'));

// account.depozst(5500);
// account.depozst(10000);
// account.withdraw(300);
// account.withdraw(200);
// account.withdraw(200);
// console.log(account.getTransactionById(16));
// console.log(account); // викликаємо обєкт
// console.log(account.getBalance()); //14800
// console.log(account.getTransactionType(Tranzaction.DEPOSIT)); //15623
// console.log(account.getTransactionType(Tranzaction.WITHDRAW)); //700

// Exemple 5____________________________________________________
//Знайти індекс елемента в масиві. Якщо такий елемент знайдено, то видалити його
// const arr = ['q', '123', 'r'];
// const idx = arr.indexOf('r');//стоворити і законсолити змінну, яка відображає наявність елементу в масиві
// function foo() {
//   if (idx === -1) {
//     console.log('пусто');
//     return;
//   } else {
//     arr.splice(idx, 2);
//   }
// }
// foo();
// console.log(arr); //['q', '123']- вирізали елемент 'r'
// console.log(idx); //2

// Exemple 6___________________________________________________
//Маємо обєкт , який містить в собі звичайні ключі та методи обєкту. Потрібно вивести
//в консоль лише ключі
// const user = {
//   username: 'Olga',
//   age: 47,
//   language: {
//     html: true,
//     css: true,
//     react: false,
//   },
//   seyHello() {
//     console.log(`My name is ${this.username} and I am  ${this.age}`);
//   },
//   iKnow() {
//     const keys = Object.keys(this); //обєкт перетворюємо в масив ключів
//     console.log(keys); //['username', 'age', 'language', 'seyHello', 'iKnow']
//     for (const key of keys) {
//       if (typeof this[key] === 'function') {
//         continue;
//       } else {
//         console.log(key);//username, age, language
//       }
//     }
//   },
// };
// user.seyHello();
// user.iKnow();
