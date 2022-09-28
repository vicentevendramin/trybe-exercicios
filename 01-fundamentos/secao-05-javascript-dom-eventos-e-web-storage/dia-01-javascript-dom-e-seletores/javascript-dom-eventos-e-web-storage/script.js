/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

/* 1 */
function changeText(newText) {
  const text = document.getElementsByTagName('p');

  text[0].innerText = newText;
}

changeText('Me vejo estudando, trabalhando com algo que eu gosto e feliz :)');

/* 2 */
function changeYellowColor(newColor) {
  const object = document.getElementsByClassName('main-content');

  object[0].style.backgroundColor = newColor;
}

changeYellowColor('rgb(76,164,109)');


/* 3 */
function changeRedColor(newColor) {
  const object = document.getElementsByClassName('center-content');

  object[0].style.backgroundColor = newColor;
}

changeRedColor('white');

/* 4 */
function correctsText(newText) {
  const text = document.getElementsByTagName('h1');

  text[0].innerText = newText;
}

correctsText('Exercício - JavaScript');

/* 5 */
function modifiesText() {
  const text = document.getElementsByTagName('p');

  text[0].innerText = text[0].innerText.toUpperCase()
}

modifiesText();

/* 6 */
function displaysP() {
  const paragraph = document.getElementsByTagName('p');

  for (let i = 0; i < paragraph.length; i += 1) {
  console.log(paragraph[i].innerText);
  }
}

displaysP()