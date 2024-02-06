// 5. Дан массив

// ```
//     let arr = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Вывести в консоль два массива. Один с положительными числами, другой с отрицательными. 

let arr = [-14, 24, -89, 43, 0, -1, 412, 4];


let positiveNum = [];
let negativeNum = [];


for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        positiveNum.push(arr[i]);
    } else {
        negativeNum.push(arr[i]);
    }
}

console.log("Положительные числа:", positiveNum);
console.log("Отрицательные числа:", negativeNum);

// еще нашла метод filter, но не смогла использовать, давай разберем ))
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
