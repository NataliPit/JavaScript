// 1 задача
// let a = 152;
// let b = 2;
// let summ1 = a + b;
// let summ2 = a * b;
// let summ3 = b / a;

// console.log(summ1, summ2, summ3);


// 2 задача

// let name = "Алевтина";
// console.log(`Привет, ${name}!`);

// 3 задача

// let name = prompt("Ваше имя?", "Например Иван");
// console.log(`Привет, ${name}!`);

// 4 задача

// function printMane(name){
//     console.log(`Привет, ${name}!`);
// };
// printMne();


// задача 5
// let result = confirm("Вы уверены?");
// if (result){
//     console.log(`Мы рады, что Вы уверены!`);
// } else {
//     console.log(`Жаль, что Вы не уверены…`);
// }

// задача 6

// let age = 101;

// switch(age){
//     case 18:
//         console.log('Вы совершеннолетний, все можно!');
//         break;
//     case 10:
//         console.log('Вам надо учить уроки!');
//         break;
//     case 30:
//         console.log('Ложитесь спать, завтра на работу');
//         break;
//         default:
//         console.log('Мы не знаем что Вам делать');   
// }


// Задание №9. Создайте массив с произвольными элементами(числами). Увеличьте каждый элемент массива на единицу.
// Выведите итоговый массив в документ или в консоль.

let arr = [1,2,3];
newArr=arr.map(i=>i+1);
console.log(arr);
console.log(newArr);