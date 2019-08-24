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
const summary = document.querySelector('.summary__info--js')
const key = new Date().toISOString().slice(0, 10);


if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
  summary.innerHTML = 'Today you drank 0 glasses of water';
}

addGlass.addEventListener('click', (e) => {
  if (number.innerHTML <= 99) {
    number.innerHTML++
    localStorage.setItem(key, number.innerHTML);
    summary.innerHTML = (`${key} you drank ${localStorage.getItem(key, number.innerHTML)} glasses of water`);
  }
})

removeGlass.addEventListener('click', (e) => {
if (number.innerHTML > 0) {
  number.innerHTML--
  localStorage.setItem(key, number.innerHTML);
  summary.innerHTML = (`${key} you drank ${localStorage.getItem(key, number.innerHTML)} glasses of water`);
} 
})

console.log (summary.innerHTML)


