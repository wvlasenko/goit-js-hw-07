"use strict";
const listOfCategories = document.querySelectorAll("ul#categories > li.item");
const numberOfCategories = listOfCategories.length;
console.log(` В списке ${numberOfCategories} категории`);

listOfCategories.forEach((elements) => {
  console.log("Категория", elements.querySelector("h2").textContent);
  console.log(
    "Количество элементов",
    elements.querySelectorAll("ul > li").length
  );
});
