const clickCount = document.getElementById('click-count');
const h2 = document.querySelector('h2');
let count = 0;

clickCount.addEventListener('click', () => {
  count += 1;
  h2.innerText = count;
  console.log('pau');
});