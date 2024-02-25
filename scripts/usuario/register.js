// Definir la clase Usuario
class Usuario {
    constructor(nombre, apellido, usuario, email, password) {
        this.id = usuario; // Utilizamos el nombre de usuario como identificador único
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }
}


function validarContraseña(password) {
    // Verificar si la contraseña tiene al menos 8 caracteres, 1 número y 1 letra mayúscula
    const regex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

// Función para guardar el nuevo usuario en el localStorage
function guardarUsuario() {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmar_password').value;

    // Verificar si ya existe un usuario con el mismo nombre de usuario
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const existeUsuario = usuarios.some(u => u.id === usuario);
    if (existeUsuario) {
        alert('El nombre de usuario ya está en uso. Por favor, elija otro.');
        return;
    }

    // Verificar si ya existe un usuario con el mismo correo electrónico
    const existeEmail = usuarios.some(u => u.email === email);
    if (existeEmail) {
        alert('Ya existe un usuario registrado con este correo electrónico.');
        return;
    }

    // Verificar el campo de contraseña y confirmar contraseña
    if (password !== confirmarPassword) {
        alert('La contraseña y la confirmación de contraseña no coinciden.');
        return;
    }

    if (!validarContraseña(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, 1 número y 1 letra mayúscula.');
        return;
    }

    // Crear un nuevo objeto Usuario
    const nuevoUsuario = new Usuario(nombre, apellido, usuario, email, password);

    // Agregar el nuevo usuario al array de usuarios
    usuarios.push(nuevoUsuario);

    //guardarlo en el localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Mostrar un mensaje de éxito
    alert('Usuario registrado correctamente.');

    // Limpiar el formulario después de guardar el usuario
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('usuario').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmar_password').value = '';
}

// Asignar la función guardarUsuario al evento 'submit' del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional
    guardarUsuario(); // Llamar a la función guardarUsuario
});
