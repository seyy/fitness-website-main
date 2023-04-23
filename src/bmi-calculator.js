const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const ageInput = document.getElementById("age");
const calculateBtn = document.getElementById("calculateButton");

ageInput.addEventListener("input", function () {
  console.log(age.value)
})

weightInput.addEventListener("input", function () {
  console.log(weightInput)
})

heightInput.addEventListener("input", function () {
  console.log(heightInput)
})

// HAMBURGER -------------------------------------------------------------
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const closeToggle = document.querySelector('.close-toggle');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.add('active');
  nav.classList.add('active');
});

closeToggle.addEventListener('click', () => {
  menuToggle.classList.remove('active');
  nav.classList.remove('active');
});

// -------------------------------------------------------------------------













