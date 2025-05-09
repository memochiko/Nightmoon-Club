document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Gracias por contactarnos, ${nombre}. Hemos recibido tu mensaje y te responderemos pronto.`);
    this.reset();
});
