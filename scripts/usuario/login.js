// Función para procesar el inicio de sesión
function iniciarSesion() {
    // Obtener los valores de los campos del formulario
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Verificar si el usuario es "admin"
    if (usuario.toLowerCase() === 'admin' && password === 'admin') {
        // Si el usuario es "admin", establecer la variable "admin" en true y guardarla en localStorage
        localStorage.setItem('admin', true);
        localStorage.setItem('loggedIn', true); // Establecer loggedIn en true
        alert('Inicio de sesión exitoso como administrador.');
        // Aquí puedes redirigir al usuario a la página de inicio de sesión, por ejemplo:
        window.location.href = '/index.html';
    } else {
        // Obtener el array de usuarios almacenado en el localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        // Buscar el usuario en el array de usuarios
        const usuarioEncontrado = usuarios.find(u => u.id === usuario);
        // Verificar si el usuario fue encontrado y la contraseña coincide
        if (usuarioEncontrado && usuarioEncontrado.password === password) {
            localStorage.setItem('loggedIn', true); // Establecer loggedIn en true
            alert('Inicio de sesión exitoso. ¡Bienvenido!');
            // Aquí puedes redirigir al usuario a la página de inicio, por ejemplo:
            window.location.href = '/index.html';
        } else {
            alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
        }
    }
}

// Asignar la función iniciarSesion al evento 'submit' del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional
    iniciarSesion(); // Llamar a la función iniciarSesion
});
