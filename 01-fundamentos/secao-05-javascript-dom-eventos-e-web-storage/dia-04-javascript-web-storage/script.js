const inputBackground = document.querySelector('#background-color input');
const inputTextColor = document.querySelector('#text-color input');
const inputFontSize = document.querySelector('#font-size input');
const inputLineHeight = document.querySelector('#line-height input');
const inputFontFamily = document.querySelector('#font-family input');

inputBackground.addEventListener('change', changeBackgroundColor);
inputTextColor.addEventListener('change', changeTextColor);
inputFontSize.addEventListener('change', changeFontSize);
inputLineHeight.addEventListener('change', changeLineHeight);
inputFontFamily.addEventListener('change', changeFontFamily);

function createLocalStorage() {
  if (localStorage.getItem('background') === null) {
    localStorage.setItem('background', 'white');
  }
  if (localStorage.getItem('textColor') === null) {
    localStorage.setItem('textColor', 'black');
  }
  if (localStorage.getItem('fontSize') === null) {
    localStorage.setItem('fontSize', '16px');
  }
  if (localStorage.getItem('lineHeight') === null) {
    localStorage.setItem('lineHeight', '20px');
  }
  if (localStorage.getItem('fontFamily') === null) {
    localStorage.setItem('fontFamily', 'Gill Sans');
  }
}

function changeBackgroundColor() {
  localStorage.setItem('background', inputBackground.value);
  document.querySelector('body').style.background = inputBackground.value;
}

function changeTextColor() {
  localStorage.setItem('textColor', inputTextColor.value);
  document.querySelector('.paragraph').style.text = inputTextColor.value;
}

function changeFontSize() {
  localStorage.setItem('fontSize', inputFontSize.value);
  document.querySelector('.paragraph').style.fontSize = inputFontSize.value;
}

function changeLineHeight() {
  localStorage.setItem('lineHeight', inputLineHeight.value);
  document.querySelector('.paragraph').style.line = inputLineHeight.value;
}

function changeFontFamily() {
  localStorage.setItem('fontFamily', inputFontFamily.value);
  document.querySelector('.paragraph').style.fontFamily = inputFontFamily.value;
}

createLocalStorage();

document.querySelector('body').style.background = localStorage.getItem('background');
document.querySelector('.paragraph').style.color = localStorage.getItem('textColor');
document.querySelector('.paragraph').style.fontSize = localStorage.getItem('fontSize');
document.querySelector('.paragraph').style.lineHeight = localStorage.getItem('lineHeight');
document.querySelector('.paragraph').style.fontFamily = localStorage.getItem('fontFamily');