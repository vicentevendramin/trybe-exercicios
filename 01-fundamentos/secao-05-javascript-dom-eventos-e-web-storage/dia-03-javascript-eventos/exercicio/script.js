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

function createButton() {
  const button = document.createElement('button');
  const div = document.querySelector('.buttons-container');

  button.id = 'btn-holiday';
  button.name = 'Feriados';
  button.innerHTML = 'Feriados';

  div.appendChild(button);
}

createButton();

const button = document.querySelector('#btn-holiday');
let colorSelected = 1;

button.addEventListener('click', function(){
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