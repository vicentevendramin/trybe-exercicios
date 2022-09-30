/*
Acesse o elemento elementoOndeVoceEsta.
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai.
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de pai.
*/

document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'red';

document.querySelector('#primeiroFilho').innerText = 'Boa tarde minha gente!';

document.querySelector('#pai').firstElementChild;

document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

document.querySelector('#elementoOndeVoceEsta').nextSibling;

document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

document.querySelector('#pai').lastElementChild.previousElementSibling;