'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createItemList = ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
};

const listOfIngredients = ingredients.map(ingredient =>
  createItemList(ingredient),
);

const list = document.querySelector('ul#ingredients');
list.append(...listOfIngredients);
