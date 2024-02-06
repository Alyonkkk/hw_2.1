// 2. Дан массив 

// ```
//     let array = ['sun', 'moon', undefined, 13, 99, 412, 0.8764]
// ```

// Вывести сумму всех чисел в консоль

let array = ['sun', 'moon', undefined, 13, 99, 412, 0.8764];

let sum = 0;

array.forEach((item) => {
    if (typeof item === 'number') {
        sum = sum + item;
    }
});

console.log("Сумма всех чисел:", sum);


