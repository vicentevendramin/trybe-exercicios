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
document.getElementsByTagName('p')[0].innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, temporibus debitis eaque eveniet dolorem quisquam sapiente iste libero ipsam ea ipsum sint ab adipisci reprehenderit laborum quod quos itaque. Minima.';

/* 2 */
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

/* 3 */
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

/* 4 */
document.getElementsByTagName('h1')[0].innerText = 'Exercício - JavaScript';

/* 5 */


/* 6 */