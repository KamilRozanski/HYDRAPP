"use strict";

import { deepEqual } from "assert";

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
const addGlass = document.querySelector('.app__add__glass--js');
const removeGlass = document.querySelector('.app__remove__glass--js');
const summary = document.querySelector('.summary__info--js')
const removeAllGlasses = document.querySelector('.app__removeAll__glasses--js');
const key = new Date().toISOString().slice(0, 10);


if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
}

addGlass.addEventListener('click', () => {
   
  if (number.innerHTML <= 0) {
    alert("Krycha zaczyna flaszke :) ")
    number.innerHTML++
    localStorage.setItem(key, number.innerHTML);
    summary.innerHTML = (`${key} Krycha wypil ${localStorage.getItem(key, number.innerHTML)} lufke`);
  } else if (number.innerHTML >= 1) {
    number.innerHTML++
  localStorage.setItem(key, number.innerHTML);
  summary.innerHTML = (`${key} Krycha wypil ${localStorage.getItem(key, number.innerHTML)} lufek`);
    }
});




  removeGlass.addEventListener('click', () => {
    if (number.innerHTML > 2) {
      number.innerHTML--
      localStorage.setItem(key, number.innerHTML);
      summary.innerHTML = (`${key} Krycha wypil ${localStorage.getItem(key, number.innerHTML)} lufke`);
    } else if (number.innerHTML <= 2 && number.innerHTML > 0 ) {
      number.innerHTML--
      localStorage.setItem(key, number.innerHTML);
      summary.innerHTML = (`${key} Krycha wypil ${localStorage.getItem(key, number.innerHTML)} lufek`);
    }
  });

  removeAllGlasses.addEventListener('click', () => {
    number.innerHTML = '0';
    localStorage.setItem(key, 0);
    summary.innerHTML = 'Today you drank 0 glasses of water';
  });