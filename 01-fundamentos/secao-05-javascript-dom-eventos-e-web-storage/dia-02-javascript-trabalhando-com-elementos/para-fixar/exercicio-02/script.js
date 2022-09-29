/*
Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho.
*/

// 1
function newParent(id, message) {
  let parent = document.querySelector(id);
  let element = document.createElement('p');
  let text = message;

  element.innerText = text;

  parent.appendChild(element);
}

newParent('#pai', 'Boa tarde!');
newParent('#elementoOndeVoceEsta', 'Tudo certo?');
newParent('#primeiroFilhoDoFilho', 'Show de bola!');

document.querySelector('#primeiroFilhoDoFilho p').parentElement.parentElement.nextElementSibling;