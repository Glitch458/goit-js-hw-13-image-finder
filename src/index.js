const { debounce } = require('lodash');

import imageCardTpl from './templates/image-card.hbs';
import apiService from './js/apiService.js';

const searchFormEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const buttonEl = document.querySelector('.button');

let queryName = '';
let pageNumber = '1';

const fetchImages = async e => {
  let res = await apiService(queryName, pageNumber);
  let images = await res.json();
  galleryEl.insertAdjacentHTML('beforeend', imageCardTpl(images));
};

function photoFinder(e) {
  queryName = e.target.value;
  galleryEl.innerHTML = '';
  pageNumber = 1;

  if (queryName.trim()) {
    fetchImages();
    buttonEl.classList.remove('is-hidden');
  } else {
    buttonEl.classList.add('is-hidden');
  }
}

function nexPage() {
  fetchImages();
  pageNumber += 1;
}

// const element = document.querySelector('.button');
// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });

searchFormEl.addEventListener('input', debounce(photoFinder, 500));
buttonEl.addEventListener('click', nexPage);
