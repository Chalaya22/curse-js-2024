//https://youtu.be/UsPCBr9h4Gw
//ARRAY
// МАСИВ - складний тип даних, в середені може зберігати будь що
//літерал масива - [], звертаємся по індексу( починається з нуля)
// const array = [2, 'start', null, true, [1, 2, 3, 4]];

//Заертаєиось до глобального типу даних Array, викликаємо в нього метод isArray
// та прокидаємо в нього нашу зміну
// console.log(Array.isArray(array)); //true - превірка чи ми працюємо з  масивом

// const first = array[1]; // - звертання за індексом
// console.log(first); // start

// console.log(typeof array); //object - відноситься до складного типу даних обьєкт

// const lastElement = array[array.length - 1];
// console.log(lastElement); //(4) [1, 2, 3, 4] - останній елемент масиву

//_____________________________________________________________________________________-
//  Цикл for для масивів прербирає масив та дає змогоу достукатись до кожного елементу масива

//1.Перебиремо циклом for() наш масив array:
//2.коли ми перебрали елементи масиву, починаємо перебирати кожен елемент array[i]
// та доходемо до нашого вкладеного масиву, де ми перевіряємо умову чи він є
//дійсно масивом ( с початку перший індекс- ні, потім другий - ніб потім третій - ні
// і так доходим до останього який є масивом і умова - true)
//та перебираєм вже його елементи, таким чином знімаємо літерал масиву
// const array = [2, 'start', null, true, [1, 2, 3, 4]];
// for (let i = 0; i < array.length; i += 1) {
//   if (Array.isArray(array[i])) {
//     for (let j = 0; j < array[i].length; j += 1) {
//       console.log(array[i][j]);
//     }
//     continue; // покидаємо цикл
//   }
//   console.log(array[i]); // маємо перебраний масив array
// }

//______________________________________________________________________________
//Медод -for of для масивів, перебирає масив створюючи копію масиву , але
//не дає мутувати масив(ми не можемо змінити елемент, на відміну від  цикла  for)
//
// const array = [2, 'start', null, true, [1, 2, 3, 4]];
// for (const item of array) {
//   if (Array.isArray(item)) {
//     for (const item1 of item) {
//       console.log(item1);
//     }
//     continue;
//   }
//   console.log(item);
// }
//_____________________________________________________________
//Замінюємо елемент за допомогою цикла for
// const array = [2, 'start', null, true, [1, 2, 3, 4]];
// for (let i = 0; i < array.length; i += 1) {
//   if (typeof array[i] === 'string') {
//     array[i] = 'Maria';
//   } else if (typeof array[i] === 'number') {
//     array[i] = 55;
//   } else if (typeof array[i] === 'boolean') {
//     array[i] = false;
//   }
//   console.log(array[i]);
// }
//55
//  Maria
//  null
//  false
//  (4) [1, 2, 3, 4]

//_____________________________________________________________
// //Перебір масива з допомогою циклу while (теж можна мутувати масив)
// const array = [2, 'start', null, true, [1, 2, 3, 4]];
// let i = 0;
// while (i < array.length) {
//   if (typeof array[i] === 'string') {
//     array[i] = 'pizdez';
//   }

//   console.log(array[i]);
//   i += 1;
// }
//__________________________________-
//Примітивни типи данних - створюємо дві разних комірки памяті
// let value = 10;
// let copy = value;
// value += 10;
// console.log('value', value); //20
// console.log('copy', copy); //10
//____________________________________
//Складні типи даних - створюється  одна комірка памяті
// const value = [1, 2, 3, 4, 5, 'apple'];
// const copy = value;
// value.push('pear');
// copy.push(200);
// console.log(value); //[1, 2, 3, 4, 5, 'apple', 'pear', 200]
// console.log(copy); //[1, 2, 3, 4, 5, 'apple', 'pear', 200]

//_____________________________________
//Порівняння складних типів данних відбувається за посиланням. Тому
// навіть коли вони ідентичні, то все рівно отримаємо false,
//,бо відбувається порівняння двох окремих комірок памяті
// const arr = [1, 2, 3, 4, 5];
// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr === arr1); //false

//__________________________________________
//Мутабельні(складні типи даних) та імутабельні(примітивні типи даних) типи даних
// Щоб змінити примітивний тип даних, треба обовязково перевизначити
//за допомогою оператора =

// ________________________________________
//Методи складних типів даних
//________________________________________
// Метод split() - розділяє по пробілу за допомогою ДЕЛІМЕТРА(рядок перетворює в масив)
// const str = 'Hello world';
// // const arr = str.split(' ');
// // console.log(arr); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
// const arr = str.split(' ');
// console.log(arr); // ['Hello', 'world']

// ________________________________________
//Метод reverse() - перевертає в зворотному напрямку. Спочатку розділяємо
//по пробілу ,а потім розвертаємо з допомогою reverse()
// const str = 'I neeed you';
// const arr = str.split(' ');
// arr.reverse();
// console.log(arr);//['you', 'neeed', 'I']
// ________________________________________
//Метод join()- зєднує в рядок. В лапках вказуємо по чому зєднуємо
//Розділяємо, перевертаємо, зшиваємо в рядок  по '-'
//Тут ми застосували ЧЕЙНІНГ - ЛАНЦЮЖОК ВИКЛИКІВ - str.split(' ').reverse().join('-');
// const str = 'I love you';
// const arr = str.split(' ').reverse().join('-');
// console.log(arr); //you-love-I
// ________________________________________
//Метод indexOf()- використовувався до ES6 - знаходить індекс елемента, або повертає  -1
//Ьетод includes()--  повертає буль- true/false
// const arr = ['Vivo', 'Maria'];
// console.log(arr.indexOf('Maria')); //індекс елемента 1
// console.log(arr.indexOf('salut'));// -1(немає такого елемента)

// const arr = ['Vivo', 'Maria'];
// console.log(arr.includes('Vivo'));//true
// console.log(arr.includes('Vi'));//false

// __________ 5 Медодів, якш додають та видаляють елементи масиву. Мутують масив
// push()-додає елементи в кінець масиву
//pop() - видаляє один останній єлемент масиву
// const arr = [1, 2, 3, 4, 5];
// arr.push('sun', 4);
// console.log(arr); // (7) [1, 2, 3, 4, 5, 'sun', 4]
// arr.pop();
// arr.pop();
// console.log(arr);//(5) [1, 2, 3, 4, 5] - видалили два останні хелемента

//shift() - видаляє перший елемент масиву
//unshift() - додає перший елемент в масиві
// const arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log(arr); //(4) [2, 3, 4, 5]
// arr.unshift(200);
// console.log(arr);//(5) [200, 2, 3, 4, 5]

//slice()- не мутує сам масив, а робе копіюю. Вирізаємо елемент чи частину елементів
// const arr = [1, 40, 'sun', true, 600];
// const result = arr.slice(1, 3);
// console.log(result); // [40, 'sun'] - скопировали и вірезали
// console.log(arr); // [1, 40, 'sun', true, 600] - масив не изменился

//splice( )- мутує масив. Може вирізати елементи, замінювати та додавати
// В дужках вказуємо(елемент, кількісь елементів які необхідно видалити)
// const arr = ['I', 'love', 'my', 'life', 'so', 'much'];
// arr.splice(2, 1, 'your'); //вказали другий елемент, в якій кількості і на що замінили
// console.log(arr); //'I', 'love', 'your', 'life', 'so', 'much']
// arr.splice(1, 0, 'and', 'you'); //вібрали елемент перед яким хочемо додати елементи,
// //другим параметром вказали 0 бо ми його не видаляємо, потім вказали елементи яякі
// //додаємо
// console.log(arr); //['I', 'and', 'you', 'love', 'your', 'life', 'so', 'much']
// const rezult = arr.splice(2, 3);
// console.log(rezult); //вивели те що вирізали ['you', 'love', 'your']
// console.log(arr); // вивели те що лишилось['I', 'and', 'life', 'so', 'much']
// const idx = arr.indexOf('so'); //знайшли індеккс елемента
// console.log(idx);//3 - створили зміну idx , та присвоілиій індекс елементу
// arr.splice(idx, 1, 'not');//замінили індекс елемента на зміну, та перевизначили іі
// console.log(arr); //['I', 'and', 'life', 'not', 'much']

//Метод concat() - обєднує декілька масивівю Не мутує початковий масив
// Обєднуєм масиви в тій послідовності яка нам потрібна
//Результат виносимо в окрему змінну
// const arr = [1, 2, 3, 4];
// const arr1 = [5, 6];
// const arr2 = [7, 8, 8];
// const rezult = arr.concat(arr1, arr2);
// console.log(rezult); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 8]

// Exemple 1
//Використайте базові методи масиву
// const geners = ['Jazz', 'Bluez']; // створили ммасив
// geners.push('Rocken Roll');
// console.log(geners); //['Jazz', 'Bluez', 'Rocken Roll'] - додали до кінця 'Rocken Roll'
// console.log(geners[0]); //Jazz - вивели у консоль перший елемент масиву
// console.log(geners[geners.length - 1]); //Rocken Roll- вивели останній елемент масиву
// const rezult = geners.shift([0]);
// console.log(geners); //) ['Bluez', 'Rocken Roll'] - видалили перший елемент масиву
// console.log(rezult); //Jazz - вивели його (перший елемент) в консоль
// // geners.splice(0, 0, 'Conntry', 'Regg');
// // console.log(geners);//['Conntry', 'Regg', 'Bluez', 'Rocken Roll']-вставили два елементи на початок масиву
// geners.unshift('Conntry', 'Regg');
// console.log(geners); //['Conntry', 'Regg', 'Bluez', 'Rocken Roll']-вставили два елементи на початок масиву

// Exemple 2
//Вираховуємо площу прямокутника
// const value = '8 11';
// const arr = value.split(' ');
// console.log(arr); //['8', '11']
// const width = arr[0];
// console.log(width);
// const length = arr[1];
// const squar = Number(width * length);
// console.log(squar); //88
// console.log(typeof squar); //number

// Exemple 3
//Пронумеровати кожен елемент

// const fruits = ['❤️', '🔷', '👀', '🦉'];

// for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
//   console.log(`${n} - ${fruits[i]}`);
// }

// Exemple 4
// let names = 'Olga, Irina, Sveta';

// let phones = '0672352060, 0672352070, 0672352080, 0672352090';

// names = names.split(','); // перетворюємо рядок на масив
// console.log(names); //['olga', ' Irina', ' Sveta']
// phones = phones.split(','); // перетворюємо рядок на масив
// console.log(phones); //['0672352060', ' 0672352070', ' 0672352080', ' 0672352090']

// for (let i = 0; (i < names.length) & (i < phones.length); i += 1) {
//   console.log(`${names[i]} - ${phones[i]}`);
// } // пишемо подвійну умову у випадок якщо кількість номерів та імен різна

// Exemple 5
// let string = 'Welcom to the future';
//Перший варіант ( довгий)
// string = string.split(' ');
// string.shift(); //видаляємо переший елемент
// string.pop(); //видаляємо останній елемент
// const rezult = string.join(' '); //метод join()вимагаєщобйого результат був в окркмій змінній
// console.log(string);//['to', 'the']
// console.log(rezult); //to the

//Другий варіант ( чейнінг) з методом slice()
// const rezult = string.split(' ').slice(1, -1).join(' ');
// console.log(rezult);////to the

// Exemple 6 Перевернути рядок
// const string = 'Welcom to the future';
// const result = string.split(' ').reverse().join(' ');
// console.log(result);//future the to Welcom

// const langs = ['bear', 'apple', 'plamb', 'kivi', 'orabge', 'carrot'];
// for (let i = 0; i < langs.length; i += 1) {
//   if (langs[0] > langs[i]) {
//     const rezult = langs.splice(i, 1)[0];
//     console.log(rezult); //apple
//     langs.unshift(rezult);
//   }
//   console.log(langs);
// }

// const numbers = [25, 5, 90, 76, 12, 3];
// let min = numbers[0]; //допускаем что минимальное значение имеет первій елемент масива
// // Если все осталные значения  элементов меньше чем минимальное то оно и есть минимальным
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min); //3

//или используем for of, так как нам не нужно мутировать масив
// const numbers = [25, 5, 90, 76, 12, 3];
// let min = numbers[0];
// for (const item of numbers) {
//   if (item < min) {
//     min = item;
//   }
// }
// console.log(min);
