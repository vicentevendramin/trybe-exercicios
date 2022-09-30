// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

const pai = document.querySelector('#pai');

const primeiroFilho = pai.firstElementChild;

const quartoFilho = pai.lastElementChild;

const terceiroFilho = pai.lastElementChild.previousElementSibling;

pai.removeChild(primeiroFilho);
pai.removeChild(terceiroFilho);
pai.removeChild(quartoFilho);

const segundoFilho = pai.firstElementChild;

const segundoFilhoDoFilho = segundoFilho.lastElementChild;

segundoFilho.removeChild(segundoFilhoDoFilho);