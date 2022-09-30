const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const alternatives = document.querySelector('.container');

alternatives.addEventListener('click', function(){
  let id = event.target.id;
  let captura = document.getElementById(id);

  if (captura === firstLi) {
    firstLi.className = 'tech';
    input.placeholder = 'Alterar primeira tecnologia';
    secondLi.classList.remove('tech');
    thirdLi.classList.remove('tech');
  }

  if (captura === secondLi) {
    secondLi.className = 'tech';
    input.placeholder = 'Alterar segunda tecnologia';
    firstLi.classList.remove('tech');
    thirdLi.classList.remove('tech');
  }

  if (captura === thirdLi) {
    thirdLi.className = 'tech';
    input.placeholder = 'Alterar terceira tecnologia';
    firstLi.classList.remove('tech');
    secondLi.classList.remove('tech');
  }
});

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function techText() {
  document.querySelector('.tech').innerText = input.value;
}

input.addEventListener('change', techText);
// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function(){
  window.location.replace('https://vicentevendramin.github.io/');
});

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function(){
  myWebpage.style.color = '#006dfb';
});

myWebpage.addEventListener('mouseleave', function(){
  myWebpage.style.color = 'white';
});

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.