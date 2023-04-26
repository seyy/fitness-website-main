const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const ageInput = document.getElementById("age");
const activityInput = document.getElementById("activityChoice");
const genderInput = document.querySelectorAll('input[type="radio"]');
const calculateBtn = document.getElementById("calculateButton");
const calculatorDiv = document.getElementById("bmiCalcBox");


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

weightInput.addEventListener("input", function() {
    if(weightInput.value && !heightInput.value || !ageInput.value || !genderInput.value) {
      calculateBtn.disabled = true;
    } else {
      calculateBtn.disabled = false;
    }
});

  
heightInput.addEventListener("input", function() {
    if(heightInput.value && !weightInput.value || !ageInput.value ||!genderInput) {
      calculateBtn.disabled = true;
    } else {
      calculateBtn.disabled = false;
    }
});

ageInput.addEventListener("input", function() {
    if(ageInput.value && !weightInput.value || !heightInput.value || !genderInput) {
        calculateBtn.disabled = true;
    } else {
        calculateBtn.disabled = false;
    }
});

genderInput.forEach((button) => {
  button.addEventListener('change', (event) => {
    console.log(event.target.value);
    if(genderInput.value && !weightInput.value || !heightInput.value || !ageInput.value) {
      calculateBtn.disabled = true;
    } else {
      calculateBtn.disabled = false;
    }
  });
});
