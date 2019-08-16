"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const number = document.querySelector('.app__number--js');
const addGlass = document.querySelector('.add__glass--js');
const removeGlass = document.querySelector('.remove__glass--js');
const key = new Date().toISOString().slice(0, 10);



addGlass.addEventListener('click', () => {
  if (number.innerHTML <= 9) {
    number.innerHTML++
  }
})

removeGlass.addEventListener('click', () => {
if (number.innerHTML <= 10 && number.innerHTML > 0) {
  number.innerHTML--
}
})


console.log(number.innerHTML);