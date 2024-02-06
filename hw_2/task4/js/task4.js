// 4. Дан массив

// ```
//     let arr = [41, 78, 98, 76, 74, 99]
// ```

// Найти самое большое число в массиве и вывести в консоль


// Math.max это я взяла из своей книжки )) и отсюда 
// https://learn.javascript.ru/rest-parameters-spread-operator

let arr = [41, 78, 98, 76, 74, 99];

let maxNumber = Math.max(...arr);

console.log("Самое большое число в массиве:", maxNumber);

