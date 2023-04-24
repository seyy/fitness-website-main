const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const ageInput = document.getElementById("age");
const calculateBtn = document.getElementById("calculateButton");
const calculatorDiv = document.getElementById("bmiCalcBox");
const genderChoice = document.querySelectorAll('input[name="gender"]');

let bmiFirstPart;
let finalBmi;

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


// BMI FORMULA - BMI CALCULATING

const bmiCalculation = () => {
  bmiFirstPart = heightInput.value * heightInput.value / 100;
  console.log(bmiFirstPart)
  finalBmi = weightInput.value / bmiFirstPart * 100;
  finalBmi = Math.floor(finalBmi);
  console.log(finalBmi)
}


//
calculateBtn.addEventListener("click", bmiCalculation)











