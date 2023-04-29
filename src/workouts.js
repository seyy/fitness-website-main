const beginnerButton = document.getElementsByClassName("beginnerWorkouts")[0];
const intermediateButton = document.getElementsByClassName("advancedWorkouts")[0];
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
      name: 'Workout 1',
      exercises: ['Bench press', 'Lat pulldowns', 'Leg press', 'Bicep Curls','Rope extension Tricep','crunches'],
      sets: 4,
      reps: 8, 
      timesAWeek: 3
    },
    {
      name: 'Workout 2',
      exercises: ['Squats','Bicep curls', 'Barbell rows','Dips', 'Rope extensions', ],
      sets: 4,
      reps: 10,
      timesAWeek: 3
    },
    {
      name: 'Workout 3',
      exercises: ['Military press', 'Pull-ups', 'Deadlifts', 'crunches'],
      sets: 3,
      reps: 15,
      timesAWeek: 3
    }
  ];

  const displayRandomBeginnerWorkout = () => {
    const randomIndex = Math.floor(Math.random() * workoutsBeginner.length);
    const selectedWorkoutBeginner = workoutsBeginner[randomIndex];
    const exercisesList = selectedWorkoutBeginner.exercises.map(exercise => `<li class= "class1">${exercise}</li>`).join('');
    const workoutBeginnerHTML = `
      <ul>${exercisesList}</ul>
      <p>Series: ${selectedWorkoutBeginner.sets}, Reps: ${selectedWorkoutBeginner.reps}, Times a week: ${selectedWorkoutBeginner.timesAWeek}</p>
    `;
    
    mainDiv.innerHTML = workoutBeginnerHTML;
  }

beginnerButton.addEventListener("click", () => {
    displayRandomBeginnerWorkout();
})