// ES 6 -  нова версія JS

//ЗМІННІ ТА ТИПИ
//https://youtu.be/m5tMeqPgb0o

//________________________________________
// Два головних ресурса по js:
//1. Learn js - https://learn.javascript.ru/
// MDM(masila)- https://developer.mozilla.org/en-US/
//____________________________________________________________

// let value;
// console.log(value); // undefind
// let value1 = 1;
// console.log(value1); //1
// // ВИКОРИСТОВУЄМО ЗАВЖДИ СТРОГЕ ПОРІВННЯ ===

// console.log('mango'.indexOf('nam')); // -1;
//__________________________________________________
//Значення в преведенні до буля повертають false
// undefined => false
// 0         => false
// NaN       => false
// ' '       => false
// false     => false
// null      => false

// console.log(Boolean(NaN)); // falase
// console.log(Boolean('NaN'));// true
// console.log(!!false);// falase
// Boolean та !!(подвійна інверсія) одне й те саме

//Хостінг це підняття. Де б ми не оголосили зміну, то законсолити ми можем іі і зверху
//і знизу!!!!!
// console.log(a);
// var a = 0;

//Типи данних дідяться на примітивні і складні
//Примітивний тип данних - імутабельні. Іх не можна мутувати, тільки перевизначити!!!
// Не існує методи який би мутував примітивні типи, тільки перевизначаємо за допоиогою
//оператора присвоювання =
//1.number
// 2. string
//3. boolian
//4. null
//5. undefined
//Наприклад, як перевизначити змінну варіанти:
// let a = 10;
// a = 12;
// a += 2;
// a = a + 2;
// console.log(a);
//_________________________________________________
//Exemple 1
// const apple = 20;
// const pear = 120;
// const total = apple + pear;
// console.log(total);
// const differrence =  pear-apple ;
// console.log(differrence);
//_________________________________________________
//Exemple 2 Комбінований оператор +=, -=,*=, /=
// let student = 100;
// student += 20;
// console.log(student);//120
//_________________________________________________
//Exemple 3 Math - екземпляр класу; floor, ceil, round - йоого методи
// console.log(Math.floor(2.8)); //2
// console.log(Math.ceil(2.8)); //3
// console.log(Math.round(2.8)); //3

//_________________________________________________
//Exemple 4 Конкатенація( зшивання чи ДОДАВАННЯ тільки). Якщо в додванні різних типів данних
//бачимо рядок, то на виході отримаєм рядок! String - є домінуючим типом данних над всіма типами даних
// const result = 23 + 11 + '6' + 3 + 45;
// console.log(result); //346345
// console.log(typeof result); //string - - перевірка на тип даних

//з іншими операторами домінуючим є Number!!!!! І це вже не конкатенація
// const result = 3 * '5';
// console.log(result); // 15
// console.log(typeof result); // number

//_________________________________________________
//Явне приведення рядка до числа Number()
// const value = 12;
// const value1 = '8';
// const result = value + Number(value1);
// console.log(result); //20

//_________________________________________________
// Шаболнні рядки замість конкатенаціі в новій версіі ES6
// `${}` в шаблоний рядок підставляємо інтерполяцію, в яку вкладаємо змінну
// const firma = 'PFA MN';
// const value = 2000;
// const value1 = 2000;
// const massage = `Наша фірма ${firma} має дохід ${value + value1}  в рік`;
// console.log(massage);//Наша фірма PFA MN має дохід 4000  в рік

//_________________________________________________
//Метод replace() - змінює в рядку  на те, що ми хотіли би бачити
// let a = '2,5';
// a = a.replace(',', '.');
// console.log(a); //2.5
//Вирахувати індекс маси людини
// let weight = '88,5';
// let height = '1.75';
// weight = Number(weight.replace(',', '.')); // приклад чейненга
// height = Number(height);
// console.log(weight);
// const bmi = Math.round(weight / Math.pow(height, 2));// первый метод
// const bmi = Number((weight / height ** 2).toFixed(1)); // второй метод
// console.log(bmi); // 28.9
// метод toFixed(1) обрізає number. В дужках пишемо кількість чисел після точки

//_________________________________________________
//Логічний оператор && - шуукає перший false або пверртає останній true
//Логічний оператор || (або)- шукає перший true або повертає останній  false
// console.log(null || 0 || undefined);// false

//_________________________________________________
//Значення за замовчуванням
// const incoming = 100;
// const result = incoming + Number('uuuu'); // користуващ щось не то ввів
// console.log(result); //NaN
// const defoltValue = 1;
// const value = result || defoltValue; // до першого true
// console.log(value); //1
//_________________________________________________
//Оператор нульового злиття  - ??
//Він подібний до оператора АБО ||? але працює тільки на два значення false - null, undefined
// якщо нам треба поставити дефолтне значення, але при умові що треба лишити решту значень
// false, а саме 0 або інше:
// let test = Number(' ');
// console.log(test); // 0
// const defoltValue = 1;
// const value = test ?? defoltValue;
// console.log(value); //0
// В данному прикладі дефолтне значення не використовується, тому що оператор нульового значення працює
//тільки на null i undefined
