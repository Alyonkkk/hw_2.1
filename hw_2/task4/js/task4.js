// 4. Дан массив

// ```
//     let arr = [41, 78, 98, 76, 74, 99]
// ```

// Найти самое большое число в массиве и вывести в консоль


// Math.max это я взяла из своей книжки )) и отсюда 
// https://learn.javascript.ru/rest-parameters-spread-operator

// let arr = [41, 78, 98, 76, 74, 99];

// let maxNumber = Math.max(...arr);

// console.log("Самое большое число в массиве:", maxNumber);

let arr = [41, 78, 98, 76, 74, 99];
let maxNumber = arr[0]; 
for (let i = 1; i < arr.length; i++) {

    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}
console.log("Самое большое число в массиве:", maxNumber);


