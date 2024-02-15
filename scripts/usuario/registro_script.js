registro = document.getElementById("registroForm")

registro.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar envío del formulario

  // Obtener valores de entrada
  const nombre = document.getElementById("registroNombre").value;
  const apellido = document.getElementById("registroApellido").value;
  const nombreUsuario = document.getElementById("registroUsuario").value;
  const email = document.getElementById("registroEmail").value;
  const password = document.getElementById("registroPassword").value;
  const confirmPassword = document.getElementById("confirmarPassword").value;

  // Validar
  if (!validateForm(nombre, apellido, nombreUsuario, email, password, confirmPassword)) {
      return; 
  }
  console.log(validateForm)

  // Crear objeto de usuario
  const usuario = {
      nombre: nombre,
      apellido: apellido,
      nombreUsuario: nombreUsuario,
      email:email,
      password: password
  };


  localStorage.setItem(nombreUsuario, JSON.stringify(usuario));

 // test ELIMINAR
  alert("Registro exitoso. Por favor, inicia sesión.");

// test ELIMINAR
  console.log(usuario)

  document.getElementById("registroForm").reset();
});

// Validacion
function validateForm(nombre, apellido, nombreUsuario, email, password, confirmPassword) {
  
  if (nombre.trim() === '' || apellido.trim() === '' || nombreUsuario.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert("Por favor, completa todos los campos.");
      return false;
  }

  // COMENTADO PARA TESTING, DESCOMENTAR ANTES DE FINALIZAR Y AGREGAR EL 'REQUIRED', "MAXLENGHT" MINLENGHT" EN EL HTML

 
  let patronPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  
  
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