document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validar campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            // Mostrar alerta de formulario incompleto
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, completa todos los campos del formulario.'
            });
        } else {
            // Mostrar alerta de formulario enviado correctamente
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado!',
                text: 'Tu mensaje ha sido enviado correctamente.'
            });
            
            // Puedes agregar aquí la lógica para enviar el formulario a tu servidor
        }
    });
});