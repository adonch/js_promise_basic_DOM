'use strict';

const logoElement = document.querySelector('.logo');
const body = document.querySelector('body');

logoElement.addEventListener('click', clickHandler);

function clickHandler() {
  const promise1 = new Promise((resolve, reject) => {
    resolve('Promise was resolved!');
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise1
    .then((message) => {
      const divElement = document.createElement('div');

      divElement.classList.add('message');
      divElement.textContent = message;
      body.append(divElement);
    })
    .catch((error) => {
      const divElement = document.createElement('div');

      divElement.classList.add('message', 'error-message');
      divElement.textContent = error.message;
      body.append(divElement);
    });

  promise2
    .then((message) => {
      const divElement = document.createElement('div');

      divElement.classList.add('message');
      divElement.textContent = message;
      body.append(divElement);
    })
    .catch((error) => {
      const divElement = document.createElement('div');

      divElement.classList.add('message', 'error-message');
      divElement.textContent = error.message;
      body.append(divElement);
    });

  return promise1;
}
