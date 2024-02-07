// 6. Дан массив

// ```
//     let array = ['привет', 'дорогой', 'как', 'дела?']
// ```

// Переверните его.

let array = ['привет', 'дорогой', 'как', 'дела?'];

let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}
console.log("Перевернутый массив:", reversedArray);

// ну и опять нашла метод reverse 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

// let array = ['привет', 'дорогой', 'как', 'дела?'];
// array.reverse;
// console.log(array);