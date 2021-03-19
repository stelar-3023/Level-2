/* setTimeout and setInterval */

// setTimneout
// let timeoutId = setTimeout(bye, 3000);

// console.log("Hello");

// // clearTimeout(timeoutId);

// function bye() {
//   console.log("goodbye");
// }

// setInterval
let count = 0;
let intId = setInterval(counter, 1000);

  function counter() {
    console.log(++count);
  }

