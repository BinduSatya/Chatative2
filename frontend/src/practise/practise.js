// function step1(value, callback) {
//   callback(value + 10, false);
// }

// function step2(value, callback) {
//   callback(value + 10, false);
// }

// function step3(value, callback) {
//   callback(value + 10, false);
// }

// step1(10, function (result, error) {
//   if (!error) {
//     console.log(result);
//     step2(result, function (result2, error) {
//       if (!error) {
//         console.log(result2);
//         step3(result2, function (result3, error) {
//           if (!error) {
//             console.log(result3);
//           }
//         });
//       }
//     });
//   }
// });

// function step1(value, error) {
//   return new Promise((resolve, reject) => {
//     if (!error) {
//       console.log(value + 10);
//       return resolve(value + 10);
//     }
//     reject("Something wrong happend");
//   });
// }

// function step2(value, error) {
//   return new Promise((resolve, reject) => {
//     if (!error) {
//       console.log(value + 10);
//       return resolve(value + 10);
//     }
//     reject("Something wrong happend");
//   });
// }

// function step3(value, error) {
//   return new Promise((resolve, reject) => {
//     if (!error) {
//       console.log(value + 10);
//       return resolve(value + 10);
//     }
//     reject("Something wrong happend");
//   });
// }

// step1(10, false)
//   .then((result1) => step2(result1, false))
//   .then((result2) => step3(result2, false));
//   .then((result3) => console.log(result3))
//   .catch((error) => console.log(error));

// const p1 = Promise.resolve("Like if you understood");
// const p2 = Promise.resolve("Hello, this promise is done");
// const p3 = Promise.resolve(2000);
// // p1.then((result) => console.log(result));
// Promise.all([p1, p3, p2]).then((values) => {
//   console.log(values);
// });

// console.log(array[0]);
fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((result) => console.log(result));
