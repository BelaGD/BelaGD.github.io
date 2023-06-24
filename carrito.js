function addToCart(button) {
    var productName = button.parentNode.querySelector('h3').textContent;
    var cartMessage = document.getElementById('cartMessage');
    cartMessage.textContent = `¡${productName} ha sido añadido al carrito!`;
  
    // Muestra el mensaje
    cartMessage.style.display = 'block';
  
    // Limpia el mensaje después de 3 segundos
    setTimeout(function() {
      cartMessage.textContent = '';
      cartMessage.style.display = 'none';
    }, 3000);
  }
  