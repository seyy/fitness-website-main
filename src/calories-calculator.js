const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const ageInput = document.getElementById("age");
const genderInput = document.querySelectorAll('input[type="radio"]');
const activityInput = document.querySelector('select[aria-label="physicalActivity"]');
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

// IF SOME INFO NEEDED ABOUT THE USER IS NOT ENTERED DISABLE THE CALCULATE CALORIES BUTTON
function checkInputs() {
  if(weightInput.value && heightInput.value && ageInput.value && isGenderSelected()) {
    calculateBtn.disabled = false;
  } else {
    calculateBtn.disabled = true;
  }
}

function isGenderSelected() {
  for(let i = 0; i < genderInput.length; i++) {
    if(genderInput[i].checked) {
      return true;
    }
  }
  return false;
}

weightInput.addEventListener("input", checkInputs);
heightInput.addEventListener("input", checkInputs);
ageInput.addEventListener("input", checkInputs);
genderInput.forEach((button) => {
  button.addEventListener('change', checkInputs,  {
  });
});


activityInput.addEventListener('change', () => {
  const selectedActivity = activityInput.value;
  console.log(selectedActivity);
});


calculateBtn.addEventListener("click", () => {
  let selectedGender;
  for(let i = 0; i < genderInput.length; i++) {
    if(genderInput[i].checked) {
      selectedGender = genderInput[i].value;
    }
  }
  console.log(weightInput.value, heightInput.value, ageInput.value, selectedGender);
});
