// Función para procesar la recuperación de contraseña
function recuperarContraseña() {
    // Obtener el valor del campo de correo electrónico
    const email = document.getElementById('email').value;

    // Obtener el array de usuarios almacenado en el localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el correo electrónico está registrado
    const usuarioEncontrado = usuarios.find(u => u.email === email);

    // Si se encontró el correo electrónico en la lista de usuarios, mostrar un mensaje
    if (usuarioEncontrado) {
        alert('Se ha enviado un correo electrónico con instrucciones para recuperar tu contraseña.');
    } else {
        alert('No se encontró ninguna cuenta asociada a este correo electrónico. Por favor, verifica tus datos.');
    }
}

// Asignar la función recuperarContraseña al evento 'submit' del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional
    recuperarContraseña(); // Llamar a la función recuperarContraseña
});
