'use strict';

class App {

  constructor() {
    this.bindFormListener();
    this.listStorageValues();
  }

  bindFormListener() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.saveToStorage(form);
    });
  }

  saveToStorage(form) {
    const key = form.key.value;
    const value = form.value.value;

    localStorage.setItem(key, value);
    this.listStorageValues();

    form.reset();
    form.key.focus();
  }

  listStorageValues() {
    const storageValues = document.getElementById('storageValues');

    const toHtml = (all, key) => {
      const value = localStorage.getItem(key);
      return all + `<p>${key}: ${value}</p>`;
    }

    const htmlOutput = Object.keys(localStorage)
      .reduce(toHtml, "");

    storageValues.innerHTML = htmlOutput;
  }
}

new App();