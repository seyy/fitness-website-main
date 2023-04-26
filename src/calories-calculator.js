const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const ageInput = document.getElementById("age");
const genderInput = document.querySelectorAll('input[type="radio"]');
const activityInput = document.querySelector('select[aria-label="physicalActivity"]');
const calculateBtn = document.getElementById("calculateButton");
const calculatorDiv = document.getElementById("bmiCalcBox");

let selectedGender;
let selectedActivity;
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

// FUNCTION CHECKS IF GENDER IS SELECTED BY THE USER

function isGenderSelected() {
  for(let i = 0; i < genderInput.length; i++) {
    if(genderInput[i].checked) {
      selectedGender = genderInput[i].value;
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

// TELLS US WHICH ACTIVITY LEVEL USER CHOSE

activityInput.addEventListener('change', () => {
  selectedActivity = activityInput.value;
  console.log(selectedActivity);
});

// BUTTON THAT IS CALCULATING USER'S CALORIES FOR THE DAY
const genderChoice = () => {
  for(let i = 0; i < genderInput.length; i++) {
    if(genderInput[i].checked) {
      selectedGender = genderInput[i].value;
    }
  }
}


// A FUNCTION THAT CONSOLE LOGS OUT EVERY NEEDED DATA TO CALCULATE USER'S BMR
const consoleLoggingOutData = () => {
  console.log(selectedGender, selectedActivity, weightInput.value, ageInput.value, heightInput.value)
}



calculateBtn.addEventListener("click", consoleLoggingOutData)
