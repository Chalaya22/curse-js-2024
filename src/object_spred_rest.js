//https://youtu.be/dSsQ3-YdlFo

//Object spei and rest
//Distructuring of the array(Диструктуризацію масиву)
//______________________________________________________________________________
//Distructuring of the array(Диструктуризацію масиву)
//Значення з масиву ми можемо отримати звертаючись до його ындексу:
// const arr = [1, 2, 3];
// const one = arr[0];
// console.log(one); //1
// //або провести диструктуризацыю масиву:
// const [first, second, third] = arr;
// console.log(first); //1
// console.log(second); //2
// console.log(third); //3
// //При деструктуризаціі ми повині строго слідувати черзі
// //Якщо нам якесь значення з масиву не потрібне , ми ставимо пробіл:
// const arr1 = ['a', 'b', true];
// const [, , third3] = arr1;
// console.log(third3);//true

//_____________________________________________________________________
// ДИСТРУКТУРИЗАЦІЯ ОБЄКТУ використовуэться, щоб не звертатися к обэкту постыйно
// const user = {
//   username: 'Olga',
//   age: 47,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//     cars: { audy: 'Q6', bmw: 'X6' },
//   },
// };

// const {
//   username: nic,
//   age,
//   skills: {
//     html,
//     css,
//     js,
//     cars: { audy },
//   },
// } = user;

// console.log(age); //47
// console.log(nic); //Olga
// console.log(html); //true
// console.log(audy); //Q6
//При диструктуризаціі ми можемо змінювати назву обєкта при потребі
//або можемо також дисттруктуризувати вкладеность( глибока диструктуризація)
//Дистрруктуризовати ми можемо всш ключі та вкладеності в обєкту,
//або вибрати що нам дійсно потрібно( мається на увазі ключ)

//_____________________________________________________
//Exemple 1 ДИСТРУКТУРИЗАЦІЯ В ЦИКЛІ
//Створимо масив обєктів, з якогог за допогою диструктуризаціі в циклі виведемо
//імьята назву автомобіля

// const users = [
//   {
//     name: 'Olga',
//     languages: 'html',
//     cars: {
//       audi: 'A6',
//       bmw: 'X5',
//     },
//   },
//   {
//     name: 'Ira',
//     languages: 'css',
//     cars: {
//       audi: 'A7',
//       bmw: 'X6',
//     },
//   },
//   {
//     name: 'Dima',
//     languages: 'js',
//     cars: {
//       audi: 'A8',
//       bmw: 'X7',
//     },
//   },
// ];
// for (const {
//   name,
//   cars: { audi, bmw },
// } of users) {
//   console.log(` ${name} - ${audi} and  ${bmw}`); // Olga - A6 and  X5,  Ira - A7 and  X6,  Dima - A8 and  X7
// }

//_____________________________________________________
//Exemple 2 ДИСТРУКТУРИЗАЦІЯ В ФУНКЦІІ
//В параметр функціі приходе обєкт. Ми диструктуризуємо те, що нам потрібно.
// В нашому випадку audi та name
// function foo({ cars: { audi }, name }) {
//   console.log(audi, name); //Q5
//   console.log(`Автомобіль Audi ${audi} має ${name}`); //Автомобіль Audi Q5 має Ira
// }
// foo({
//   name: 'Ira',
//   language: 'css',
//   cars: {
//     audi: 'Q5',
//     bmw: 'X6',
//   },
// });

//_____________________________________________________
// SPRED , REST- синтаксичний сахар.
// SPRED - розпиляє масив, прибираючи літерал масиву. стоіть справа від =
//Знаходимо мінімальне число за допомогою  методу Math.min() та spred oператоа ...
// const arrr1 = [22, 1, 46, 44, 90];
// const min = Math.min(...arrr1);
// console.log(min); //1

// //Cтворюємо копію  обєкту за допомогою spred oператоа ...
// //Завдяки spred oператоа ... орігінал масиву не мутується
// const arrr2 = [...arrr1]; // створили копію масива
// console.log(arrr2); // [22, 1, 46, 44, 90]
// arrr2.splice(0, 1); //вирізаємо нульовий елемент в кількості 1
// console.log(arrr2); //[1, 46, 44, 90]- масив змінився
// console.log(arrr1); //[22, 1, 46, 44, 90]- оригінал лишився незміний
// console.log(arrr1 === arrr2); // false

//_____________________________________________________
//REST - збираэ в масив, стоыть з ЛЫВА выд =
// const arr = [22, 1, 46, 44, 90];
// //Завдання омножити всіелементи масиву на перше число
// const [first, ...props] = arr; //виділили перший елемент, інші рестом зібрали в масив
// console.log(first); //2
// console.log(props); // [1, 46, 44, 90]
// //Якщо ми хочемо змінити елемент в масиві, то нам треба
// //звернутися до нього по його індексу , а це не  можливо  через for of.
// //Тому використовуємо цикл for i множемо кожний елемент ітераціі на перший елемент масиву
// for (let i = 0; i < props.length; i += 1) {
//   props[i] *= first;
// }
// console.log(props);

//_____________________________________________________
// //Функція з REST
// //В параметр функціі приходить REST, який збирає елементи масиву
// function foo(first, second, ...props) {
//   console.log(props); //[30, 40, 50, 60]
// }
// foo(10, 20, 30, 40, 50, 60);

//_____________________________________________________
// //Функція з SPRED
//Маємо масив та функцію, яка приймає в своі параметри розпилений масив методом spred...
//в якому ми відокремлюємо перший і другий елемент, а решту збираємо в масив методом rest...
//
// const arr = [22, 1, 46, 44, 90];
// function foo(first, second, ...props) {
//   console.log(first, second, props); // 22,1, [46, 44, 90]
// }
// foo(...arr);

//_____________________________________________________________________
//Exempl 1
//Написати функцію, яка розраховує індекс маси тіла
//, яка б приймала в своі параметри обєкт, який ми диструктуризуємо
// Також напишимо до функціі JS-доку для більшого розуміння , що вона робить
/**
 *
 * @param {Object} obj
 * @returns bmi
//  */
// function calcBMI({ weight, height }) {
//   const bmi = Number((weight / height) * 2).toFixed(1);
//   return bmi;
// }
// console.log(calcBMI({ weight: 65, height: 1.8 })); //72.2

//_____________________________________________________________________
//Exempl 2 Вивести лист контактів
// function contactList({ name, phone }) {
//   const nameList = name.split(',');
//   const phoneList = phone.split(',');
//   console.log(nameList); //['Olga, Irina, Sveta, Tanya']
//   console.log(phoneList); //['0672352060, 0672352070, 0672352080, 0672352090']
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]} : ${phoneList[i]}`); // Olga : 0672352060,  Irina :  0672352070,  Sveta :  0672352080,  Tanya :  0672352090
//   }
// }
// contactList({
//   name: 'Olga, Irina, Sveta, Tanya',
//   phone: '0672352060, 0672352070, 0672352080, 0672352090',
// });
//_____________________________________________________________________
//Exempl 3
// function getBotsReport({ companyName, repairBots, defenceBots }) {
//   return `${companyName} has ${repairBots + defenceBots} in stock`;
// }
// console.log(
//   getBotsReport({
//     companyName: 'Alex',
//     repairBots: 150,
//     defenceBots: 50,
//   })
// );
//_____________________________________________________________________
//Exempl 3
//Для підрахунку чогось використовуємо цил for of з Object.values()
// function getBotsReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }

//   return `${companyName} has ${total} pices in stock`;
// }
// console.log(
//   getBotsReport({
//     companyName: 'Alexis',
//     stock: {
//       repearBots: 100,
//       defenceBots: 200,
//     },
//   })
// ); //Alexis has 300 pices in stock
// console.log(
//   getBotsReport({
//     companyName: 'Miraj',
//     stock: {
//       boots: 100,
//       adidas: 600,
//       lacosta: 45,
//     },
//   })
// ); //Miraj has 745 pices in stock

//_____________________________________________________________________
//Exempl 4
// Розпарсити обєкт, та  повертаємо новий обєкт з додатковими ключами  id,
// createAt та задаємо  ключу list дефолтне значення в разі його відсутності в обєкту.
//Дефолтне значення додаємо перед тим як розпарсити обєкт!!!!
// function createContact(parselcontact) {
//   return {
//     createAt: new Date(), // створюємо поточний час
//     id: generetedId(),
//     list: 'defolt',
//     ...parselcontact,
//   };
// }
// function generetedId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// } //стволи функцію, яка генерує id, та викликаємо іі в функціі createContact(parselcontact)
// console.log(
//   createContact({
//     name: 'Olga',
//     email: 'chalayaolga22@gmail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Polli',
//     email: 'polli22@gmail.com',
//   })
// );

//_____________________________________________________________________
//Exempl 5
//Напиши функцію ,яка би повертала новий обєкт з властивістю fullName замість
//firstName та lastName
//Досттаємо ті властивості які нам потріюні і рестом збираємо решту
function transformUserName({ firstName, lastMame, ...props }) {
  return {
    fullname: `${firstName} ${lastMame}`,
    ...props,
  };
}

console.log(
  transformUserName({
    id: 1,
    email: 'chalayaolga22@gmail.com',
    firstName: 'Olga',
    lastMame: 'Chala',
  })
);
