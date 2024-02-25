// Obtener el formulario de reset de contraseña
const resetPassForm = document.getElementById('resetPassForm');

// Agregar un event listener para el evento submit del formulario
resetPassForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const usuarioResetPass = document.getElementById('UsuarioResetPass').value;
    const nuevoPassword = document.getElementById('nuevoPassword').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;

    // Verificar si la contraseña y la confirmación coinciden
    if (nuevoPassword !== confirmarPassword) {
        alert('La contraseña y la confirmación de contraseña no coinciden.');
        return;
    }

    // Obtener los usuarios del almacenamiento local
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar al usuario por su nombre de usuario
    const usuarioEncontrado = usuarios.find(u => u.id === usuarioResetPass);

    // Si el usuario no se encuentra, mostrar un mensaje de error
    if (!usuarioEncontrado) {
        alert('Usuario no encontrado. Verifique el nombre de usuario ingresado.');
        return;
    }

    // Actualizar la contraseña del usuario
    usuarioEncontrado.password = nuevoPassword;

    // Guardar la información actualizada en el almacenamiento local
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Mostrar un mensaje de éxito
    alert('Contraseña actualizada correctamente.');
});