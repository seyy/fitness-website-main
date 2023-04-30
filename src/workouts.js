const beginnerButton = document.getElementsByClassName("beginnerWorkouts")[0];
const intermediateButton = document.getElementsByClassName("intermediateWorkouts")[0];
const advancedButton = document.getElementsByClassName("advancedWorkouts")[0];
const mainDiv = document.getElementsByClassName("mainBox")[0];
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


const workoutsBeginner = [
    {
      exercises: ['Bench press', 'Lat pulldowns', 'Leg press', 'Bicep Curls','Rope extension Tricep','crunches'],
      sets: 4,
      reps: 8, 
      timesAWeek: 3
    },
    {
      exercises: ['Squats','Bicep curls', 'Barbell rows','Dips', 'Rope extensions', ],
      sets: 4,
      reps: 10,
      timesAWeek: 3
    },
    {
      exercises: ['Push ups','Military press', 'Pull-ups', 'Deadlifts', 'crunches'],
      sets: 4,
      reps: 8,
      timesAWeek: 3
    }
  ];

const workoutsIntermediate = [
  {
    exercises: ['Barbell back squats', 'Dumbell bench press', 'Lat pulldowns', 'Deadlift', 'Cable rows','Dumbbell bicep curls', 'Leg curls', 'Leg extensions'],
    sets: 3,
    reps: 8,
    timesAWeek: 3
  },
  {
    exercises: ['Bulgarian squats', 'Bench press', 'Lat pulldowns','Pull ups', 'Deadlift', 'Over head press', 'Rope extensions', 'Bicep curls', 'crunches'],
    sets: 3,
    reps: 6,
    timesAWeek: 4 
  },
  {
    exercises: ['Squats', 'Dumbbell deadlift', 'Dumbbell bench press', 'Weighted dips', 'Pull ups', 'Barbell rows', 'Legs to bar hanging'],
    sets: 3,
    reps: 8,
    timesAWeek: 3
  }
];

const workoutsAdvanced = [ 
  {    
    exercises: ["Squats", "Deadlifts", "Bench Press", "Pull-Ups", "Dumbbell Rows", "Overhead Press"],
    sets: 5,
    reps: "5-8",
    timesAWeek: 3
  },
  {
    exercises: ["Lunges", "Romanian Deadlifts", "Incline Bench Press", "Chin-Ups", "Chest Flyes", "Lateral Raises"],
    sets: 4,
    reps: "8-12",
    timesAWeek: 3
  },
  {
    exercises: ["Box Jumps", "Barbell Hip Thrusts", "Dips", "Cable Rows", "Face Pulls", "Tricep Extensions"],
    sets: 3,
    reps: "12-15",
    timesAWeek: 5
  }
];


 // Display a random beginner workout
const displayRandomBeginnerWorkout = () => {
  const randomIndex = Math.floor(Math.random() * workoutsBeginner.length);
  const selectedWorkoutBeginner = workoutsBeginner[randomIndex];
  const exercisesList = selectedWorkoutBeginner.exercises.map(exercise => `<li>${exercise}</li>`).join('');
  const workoutBeginnerHTML = `
    <p class="workoutLevel"> 
    Beginner workout
    </p>
    <ul>
    ${exercisesList}
    </ul>
    <p>Series: ${selectedWorkoutBeginner.sets}</p><p> Reps: ${selectedWorkoutBeginner.reps}</p><p> Times a week: ${selectedWorkoutBeginner.timesAWeek}</p>
  `;
  mainDiv.innerHTML = workoutBeginnerHTML;
}

// Add event listener to the beginner button
beginnerButton.addEventListener("click", () => {
  displayRandomBeginnerWorkout();
});

// Display a random intermediate workout
const displayRandomIntermediateWorkout = () => {
  const randomIndex = Math.floor(Math.random() * workoutsIntermediate.length);
  const selectedWorkoutIntermediate = workoutsIntermediate[randomIndex];
  const exercisesList = selectedWorkoutIntermediate.exercises.map(exercise => `<li>${exercise}</li>`).join(''); // Corrected map function to create the exercises list
  const workoutIntermediateHTML = `
    <p class="workoutLevel">
    Intermediate workout
    </p>
    <ul>
    ${exercisesList}
    </ul>
    <p>Series: ${selectedWorkoutIntermediate.sets}</p><p> REPS: ${selectedWorkoutIntermediate.reps}</p><p> Times a week: ${selectedWorkoutIntermediate.timesAWeek}</p>
  `;
  mainDiv.innerHTML = workoutIntermediateHTML;
}

// Add event listener to the intermediate button
intermediateButton.addEventListener("click", () => {
  displayRandomIntermediateWorkout();
});

const displayRandomAdvancedWorkout = () => {
  const randomIndex = Math.floor(Math.random() * workoutsAdvanced.length);
  const selectedWorkoutAdvanced = workoutsAdvanced[randomIndex];
  const exercisesList = selectedWorkoutAdvanced.exercises.map(exercise => `<li>${exercise}</li>`).join('');
  const workoutAdvancedHTML = `
    <p class="workoutLevel">Advanced workout</p>
    <ul>
      ${exercisesList}
    </ul>
    <p>Series: ${selectedWorkoutAdvanced.sets}</p><p>Reps: ${selectedWorkoutAdvanced.reps}</p><p>Times a week: ${selectedWorkoutAdvanced.timesAWeek}</p>
  `;
  mainDiv.innerHTML = workoutAdvancedHTML;
}

advancedButton.addEventListener("click", () => {
  displayRandomAdvancedWorkout();
});


