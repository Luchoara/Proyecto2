import { obtenerUsuario } from "/scripts/usuario/usuarios.js"

registro = document.getElementById("registroForm")

registro.addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Obtener valores de entrada
  let nombre = document.getElementById("registroNombre").value;
  let apellido = document.getElementById("registroApellido").value;
  let usuarioAlias = document.getElementById("registroUsuario").value;
  let email = document.getElementById("registroEmail").value;
  let password = document.getElementById("registroPassword").value;
  let confirmPassword = document.getElementById("confirmarPassword").value;

  // Crear objeto de usuario
  const usuario = {
      nombre: nombre,
      apellido: apellido,
      usuarioAlias: usuarioAlias,
      email:email,
      password: password
  };

  validarCampos(usuario)
  usuarioExiste(usuario.usuarioAlias)
  guardarUsuario(usuario)
  validarPassword(password, confirmPassword)

  // test ELIMINAR
  console.log(usuario)
  console.log(usuarioAlias);
  alert("Registro exitoso. Redirigiendo, inicia sesión.");
  location.replace("/html/usuario/login.html");

  document.getElementById("registroForm").reset();
});

function guardarUsuario(nuevoUsuario) {
  // crear un array de usuarios
  let usuarios = [];
  // agregar el usuario creado al array de usuarios
  usuarios.push(nuevoUsuario);
  // Convertir el objeto de usuario a cadena JSON y guardarlo en localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

