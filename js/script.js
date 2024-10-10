// // 1-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // 2-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
// // 3-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }

// // 4-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     console.log(arr[i]);
//   }
// }

// // 5-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     console.log(arr[i]);
//   }
// }

// // 6-MASALA JAVOBI
// let arr = [232, 12, 3, 8, -1, -9];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// // 7-MASALA JAVOBI
// let arr = [232, 12, 3, 8, -1, -9];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);
// // 8-MASALA JAVOBI
// let arr = [23, 12, 3, 8, -1, -9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// let res = sum / arr.length;
// console.log(Math.trunc(res));

// // 9-MASALA JAVOBI
// let arr = [1, 2, 3, 4, -5, 6, 7, -80, 9, 10];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// // 10-MASALA JAVOBI
// let arr = [1, 2, 3, 4, -5, 6, 7, -80, 9, 10];
// let res = 1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     res = arr[i] ** 2;
//   }
//   console.log(res);
// }

// // 11-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   res.push(arr[i], arr[i]);
// }
// console.log(res);

// // 12-MASALA JAVOBI
// Buni yaxshi tushunmadim va ishlay olmadim

// // 13-MASALA JAVOBI
// let arr = [6, 12, 15, 9, -3, -6];
// for (let i = 0; i < arr.length; i++) {
//   let res = arr[i] / 3;
//   console.log(res);
// }

// // 14-MASALA JAVOBI
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  for (let i = 0; i < arr.length; i += 2) {
//    console.log(arr[i]);
//  }

// // 15-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// // 16-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   let res = `${i + 1}-element: ${arr[i]}`;
//   console.log(res);
// }

// // 17-MASALA JAVOBI
// let arr = [1, 2234, 224, 342, 224, 342, 1235, 1, 7132, 71235];
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//   let cnt = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       cnt++;
//     }
//   }
//   if (cnt === 1) {
//     res.push(arr[i]);
//   }
// }
// for (let i = 0; i < res.length; i++) {
//   console.log(res[i]);
// }

// // 18-MASALA JAVOBI
// let arr = [1, "I'm", 3, "world", 23, "Mercedes", 42];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     console.log(arr[i]);
//   }
// }

// // 19-MASALA JAVOBI
// let arr = [1, 2234, 224, 342, 224, 342, 1235, 1, 7132, 71235];
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//   let j = 0;
//   while (j < res.length && arr[i] < res[j]) {
//     j++;
//   }
//   res.splice(j, 0, arr[i]);
// }
// for (let i = 0; i < res.length; i++) {
//   console.log(res[i]);
// }

// // 20-MASALA JAVOBI
//  let arr = [1, 2234, 224, 342, 224, 342, 1235, 1, 7132, 71235];
// let max = 0;
// let min = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[max]) {
//     max = i;
//   }
//   if (arr[i] < arr[min]) {
//     min = i;
//   }
// }
// console.log(max);
// console.log(min);

// // 21-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   let res = arr[i] * 2;
//   console.log(res);
// }

// // 22-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   let res = i == 0 ? "Nolga bolib bomedi" : Math.trunc(arr[i] / i);
//   console.log(res);
// }

// // 23-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

// // 24-MASALA JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Math.abs(arr[i]);
// }
// console.log(arr);

// // 25-MASALA JAVOBI
// let arr = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = "Yoq";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     res = "Bor";
//     break;
//   }
// }
// console.log(res);
