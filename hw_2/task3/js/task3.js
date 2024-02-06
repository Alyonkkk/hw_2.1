// 3. Дана матрица

// // ```
//     let matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [1, 1, 1, 900000],
//     ]
// // ```

// // Вывести среднее значение чисел в матрице




// Долго мучилась и гуглила, но нашла два решения, интересно обсудить второе ))

// let matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [1, 1, 1, 900000],
// ];

// const getAverage = (matrix) => {
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < matrix.length; i += 1) {
//     for (let j = 0; j < matrix[i].length; j += 1) {
//       if (typeof matrix[i][j] === 'number') {
//         sum += matrix[i][j];
//         count += 1;
//       }
//     }
//   }

//   return sum / count;
// };

// console.log('Среднее значение:', getAverage(matrix));


let matrix =[
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [1, 1, 1, 900000],
]

let flatArray = matrix.flatMap(row => row.filter(item => typeof item === 'number'));
const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

console.log('Среднее значение:', getAverage(flatArray));