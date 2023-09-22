const formEl = document.querySelector('form');
const btnEl = document.querySelector('form button');
const firstDelay = document.querySelector('[name = "delay"]');

const delayStep = document.querySelector('[name = "step"]');
const amount = document.querySelector('[name = "amount"]');
const test = firstDelay.textContent;
console.log("~  test:", test)

const promiseEl = new Promise((resolve, reject) => {
  if (test > 3) {
    console.log('Число больше 3х')
  }
  console.log('Число меньше 3х')
})


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
