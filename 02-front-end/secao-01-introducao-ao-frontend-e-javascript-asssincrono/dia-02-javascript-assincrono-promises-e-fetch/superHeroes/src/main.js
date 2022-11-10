import Swal from 'sweetalert2';
import './style.css'

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const acessToken = '5617000501720606';
const baseUrl = `https://www.superheroapi.com/api.php/${acessToken}`;

const maxHeroes = 1000;
const randomId = () => Math.floor(Math.random() * maxHeroes);

button.addEventListener('click', getRandomHero);

function getRandomHero() {
  event.preventDefault();

  const id = randomId();

  fetch(`${baseUrl}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
}
