const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
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

weightInput.addEventListener("input", function() {
  if(weightInput.value && !heightInput.value) {
    calculateBtn.disabled = true;
  } else {
    calculateBtn.disabled = false;
  }
});

heightInput.addEventListener("input", function() {
  if(heightInput.value && !weightInput.value) {
    calculateBtn.disabled = true;
  } else {
    calculateBtn.disabled = false;
  }
});

// ADDS A BUTTON THAT ON CLICK YOU COME BACK TO THE FORM OF BMI CALCULATOR

  const calculateAgainBtn = document.createElement("button");
  calculateAgainBtn.innerText = "Calculate Again";
  calculateAgainBtn.classList.add("calcAgainBtn");

  calculateAgainBtn.addEventListener("click", function() {
    calculateAgainBtn.disabled = true;

    setTimeout(function() {
      window.location.href = "bmi-calculator.html"
    }, 100);
  });
// BMI FORMULA - BMI CALCULATING

const bmiCalculation = () => {
  bmiFirstPart = heightInput.value * heightInput.value / 100;
  console.log(bmiFirstPart)
  finalBmi = weightInput.value / bmiFirstPart * 100;
  finalBmi = Math.floor(finalBmi);
  console.log(finalBmi)

  if(finalBmi >= 25 && finalBmi <= 30) {
    calculatorDiv.innerHTML = `You might want to lose a few kgs! Your BMI is: ${finalBmi}`
    calculatorDiv.appendChild(calculateAgainBtn);
  }

  if(finalBmi >= 30) {
    calculatorDiv.innerHTML = `You are obese, you need to lose your weight. Your BMI is: ${finalBmi}`
    calculatorDiv.appendChild(calculateAgainBtn);
  }

  if(finalBmi <= 25 && finalBmi >= 19) {
    calculatorDiv.innerHTML = `You have a healthy bmi, congratulations! Your BMI is: ${finalBmi}`
    calculatorDiv.appendChild(calculateAgainBtn);
  }

  if(finalBmi < 19 && finalBmi >= 15) {
    calculatorDiv.innerHTML = `You are underweight, gain some weight. Your BMI is: ${finalBmi}`
    calculatorDiv.appendChild(calculateAgainBtn);
  }

  if(finalBmi < 15) {
    calculatorDiv.innerHTML = `You have to start eating. It's dangerous for your health! Your BMI is: ${finalBmi}`
    calculatorDiv.appendChild(calculateAgainBtn);
  }
}

calculateBtn.addEventListener("click", bmiCalculation)




