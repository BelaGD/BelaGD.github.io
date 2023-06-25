/*------ Contacto*/
/* Para abrir las sucursales*/
const locations = document.querySelectorAll('.location');

locations.forEach(location => {
  location.addEventListener('click', () => {
    location.classList.toggle('active');
  });
});
/*Mensaje Enviado*/

const formulario = document.getElementById('mi-formulario');
const overlay = document.getElementById('overlay');

formulario.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const fono = document.getElementById('fono').value;
  const message = document.getElementById('message').value;

  if (!name) {
    e.preventDefault();
    alert('Por favor, complete todos los campos del formulario.');
  } 
  else {
    overlay.style.display = 'block';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 8000); // Ocultar el mensaje de confirmación
  }
  if (!email) {
    e.preventDefault();
    alert('Por favor, complete todos los campos del formulario.');
  } 
  else {
    overlay.style.display = 'block';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 15000); 
  }
  if (!fono) {
    e.preventDefault();
    alert('Por favor, complete todos los campos del formulario.');
  } 
  else {
    overlay.style.display = 'block';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 8000);
  }
  if (!message) {
    e.preventDefault();
    alert('Por favor, complete todos los campos del formulario.');
  } 
  else {
    overlay.style.display = 'block';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 8000); // Ocultar el mensaje de confimacion
  }
});