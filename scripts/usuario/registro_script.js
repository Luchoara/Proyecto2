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

  // Validar
  if (!validateForm(nombre, apellido, usuarioAlias, email, password, confirmPassword)) {
      return; 
  }

  // Crear objeto de usuario
  let usuario = {
      nombre: nombre,
      apellido: apellido,
      usuarioAlias: usuarioAlias,
      email:email,
      password: password
  };

  guardarUsuario(usuario)

  // test ELIMINAR
  console.log(usuario)
  console.log(usuarioAlias);
  alert("Registro exitoso. Redirigiendo, inicia sesión.");
  location.replace("/html/usuario/login.html");

  document.getElementById("registroForm").reset();
});

// Validacion
function validateForm(nombre, apellido, usuarioAlias, email, password, confirmPassword) {
  //VALIDAR PARTICULARMENTE CADA ITEM
  if (nombre.trim() === '' || apellido.trim() === '' || usuarioAlias.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert("Por favor, completa todos los campos.");
      return false;
  }

  let patronPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*-+]).{8,}$/;  
  
  if (!patronPassword.test(password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
      return false;
  }
  

  if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return false;
  }

  return true;
}

function guardarUsuario(nuevoUsuario) {
  // crear un array de usuarios
  let usuarios = [];
  // agregar el usuario creado al array de usuarios
  usuarios.push(nuevoUsuario);
  // Convertir el objeto de usuario a cadena JSON y guardarlo en localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Validar Usuario ya registrado
function usuarioExiste(existe){
  localStorage.getItem("usuarios", JSON.parse(usuarios));

  if (existe === usuarios){
    alert("Usuario existente");
  }
  else{
    alert('usuario no existe en la BD')
  }
}

