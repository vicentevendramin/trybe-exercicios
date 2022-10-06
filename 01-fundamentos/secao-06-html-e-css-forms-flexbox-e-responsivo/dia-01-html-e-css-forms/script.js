const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const inputName = document.querySelector('#name').value;
  const inputEmail = document.querySelector('#email').value;

  if (inputName.length > 40 || inputName.length < 10 || inputEmail.length > 50 || inputEmail.length < 10) {
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
  }
});