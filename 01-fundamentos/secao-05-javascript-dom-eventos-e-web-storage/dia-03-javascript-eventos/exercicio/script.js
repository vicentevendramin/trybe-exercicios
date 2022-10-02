function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercise 1
function createDaysOfTheMonth() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const days = decemberDaysList[index];
    const decemberDay = document.createElement('li');
    decemberDay.innerHTML = days;
    decemberDay.className = 'day';

    if (days === 24 || days === 25 || days === 31) {decemberDay.classList.add('holiday');}

    if (days === 4 || days === 11 || days === 18 || days === 25) {decemberDay.classList.add('friday');}

    monthDaysList.appendChild(decemberDay);
  };
}

createDaysOfTheMonth();

// Exercise 2
function createButtonHoliday() {
  const button = document.createElement('button');
  const div = document.querySelector('.buttons-container');

  button.id = 'btn-holiday';
  button.name = 'Feriados';
  button.innerHTML = 'Feriados';

  div.appendChild(button);
}

createButtonHoliday();

// Exercise 3
const holidayButton = document.querySelector('#btn-holiday');
let colorSelected = 1;

holidayButton.addEventListener('click', function(){
  const holiday = document.querySelectorAll('.holiday');

  if (colorSelected === 1) {
    for (let index = 0; index < holiday.length; index += 1) {
      holiday[index].style.backgroundColor = 'yellow';
    }
    colorSelected = 2;
  } else {
    for (let index = 0; index < holiday.length; index += 1) {
      holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    }
    colorSelected = 1;
  }
});

// Exercise 4
function createFridayButton() {
  const friday = document.createElement('button');
  const div = document.querySelector('.buttons-container');

  friday.id = 'btn-friday';
  friday.name = 'Sexta-feira';
  friday.innerHTML = 'Sexta-feira';

  div.appendChild(friday);
}

createFridayButton();

// Exercise 5
const fridayButton = document.querySelector('#btn-friday');
let text = 1;

fridayButton.addEventListener('click', function(){
  const friday = document.querySelectorAll('.friday');
  const fridayDays = [4, 11, 18, 25];

  if (text === 1) {
    for (let index = 0; index < friday.length; index += 1) {
      friday[index].innerHTML = 'SEXTOU';
    }
    text = 2;
  } else {
    for (let index = 0; index < friday.length; index += 1) {
      friday[index].innerHTML = fridayDays[index];
    }
    text = 1;
  }
});

// Exercise 6
const daysOfTheMonth = document.querySelectorAll('.day');

for (let index = 0; index < daysOfTheMonth.length; index += 1) {
  daysOfTheMonth[index].addEventListener('mouseover', function(){
    daysOfTheMonth[index].style.fontSize = '30px';
  });
}

for (let index = 0; index < daysOfTheMonth.length; index += 1) {
  daysOfTheMonth[index].addEventListener('mouseout', function(){
    daysOfTheMonth[index].style.fontSize = '20px';
  });
}

// Exercise 7
function createTask(myTask) {
  const tasks = document.querySelector('.my-tasks');
  const newTask = document.createElement('span');

  newTask.innerHTML = myTask;
  tasks.appendChild(newTask);
}

createTask('Projeto');

// Exercise 8
function newTaskDiv(color) {
  const tasks = document.querySelector('.my-tasks');
  const newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasks.appendChild(newTask);
}

newTaskDiv('green');

// Exercise 9
function setTaskClass() {
  const selectedTask = document.getElementsByClassName('task selected');
  const myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(){
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

setTaskClass();