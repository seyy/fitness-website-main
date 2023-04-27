const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const ageInput = document.getElementById("age");
const genderInput = document.querySelectorAll('input[type="radio"]');
const activityInput = document.querySelector('select[aria-label="physicalActivity"]');
const calculateBtn = document.getElementById("calculateButton");
const calculatorDiv = document.getElementById("bmiCalcBox");

let selectedGender;




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

// CHECKS IF WE HAVE A VALUE ENTERED BY USER

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
});


// A FUNCTION THAT CALCULATES USER'S BMR 

const calculatingBmr = () => {
  const age = parseInt(ageInput.value);
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const selectedActivity = parseFloat(activityInput.value);

  if (selectedGender === "man") {
    const bmr = Math.round((10 * weight) + (6.25 * height) - (5 * age) + 5);
    const adjustedBmr = Math.round(bmr * selectedActivity);
    console.log(`Your BMR is ${bmr} and your adjusted BMR based on activity level is ${adjustedBmr}.`);
  } else {
    if (selectedGender === "woman") {
      const bmr = Math.round((10 * weight) + (6.25 * height) - (5 * age) - 161);
      const adjustedBmr = Math.round(bmr * selectedActivity);
      console.log(`Your BMR is ${bmr} and your adjusted BMR based on activity level is ${adjustedBmr}.`);
    }
  }
}

calculateBtn.addEventListener("click", calculatingBmr)
