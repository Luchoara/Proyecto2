// Obtener el formulario de reset de contraseña
const resetPassForm = document.getElementById('resetPassForm');

// Agregar un event listener para el evento submit del formulario
resetPassForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const usuarioId = document.getElementById('usuarioId').value;
    const nuevoPassword = document.getElementById('nuevoPassword').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;

    // Verificar si la contraseña y la confirmación coinciden
    if (nuevoPassword !== confirmarPassword) {
        alert('La contraseña y la confirmación de contraseña no coinciden.');
        return;
    }

    if (!validarContraseña(nuevoPassword)) {
        alert('La contraseña debe tener al menos 8 caracteres, 1 número y 1 letra mayúscula.');
        return;
    } 
    //  Traer los  usuarios
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar al usuario por su nombre de usuario
    const usuarioEncontrado = usuarios.find(u => u.id === usuarioId);

    if (!usuarioEncontrado) {
        alert('Usuario no encontrado. Verifique el nombre de usuario ingresado.');
        return;
    }

    
    // Actualizar la contraseña del usuario
    usuarioEncontrado.password = nuevoPassword;
    
    // Guardar la información actualizada en el almacenamiento local
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Mostrar un mensaje de éxito
    alert('Contraseña actualizada correctamente. Ingrese a su cuenta');

    location.replace("/html/usuario/login.html")
});

function validarContraseña(password) {
    // Verificar si la contraseña tiene al menos 8 caracteres, 1 número y 1 letra mayúscula
    const regex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}