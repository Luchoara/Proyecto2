
/** Listener Registro */

document.addEventListener("DOMContentLoaded", () => {

  const formulario = document.getElementById("registroForm")
  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById("registroNombre").value;
    const apellido = document.getElementById("registroApellido").value;
    const username = document.getElementById("registroUsername").value;
    const email = document.getElementById("registroEmail").value;
    const password = document.getElementById("registroPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    if (!validateForm(nombre, apellido, username, email, password, confirmPassword)) {
      return; 
  }

  // Nuevo usuario
    const usuario = {
      nombre: nombre,
      apellido: apellido,
      username: username,
      email: email,
      password: password
  };

    localStorage.setItem(username, JSON.stringify(usuario));

    //* print para checkeo -- ELIMINAR --

    alert("Registro exitoso. Por favor, inicia sesión.");

    // enviar al index.html con boton usuario en vez de login
    location.replace('index_user.html')

  /* no funca el reset
  this.reset();
  */
  });
});

function validateForm(nombre, apellido, username, email, password, confirmPassword) {
  
  if (nombre.trim() === '' || apellido.trim() === '' || username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert("Por favor, completa todos los campos.");
      return false;
  }

  // COMENTADO PARA TESTING, DESCOMENTAR ANTES DE FINALIZAR Y AGREGAR EL 'REQUIRED', "MAXLENGHT" MINLENGHT" EN EL HTML

  /* 
  let patronPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  
  
  if (!patronPassword.test(password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
      return false;
  }
  */

  if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return false;
  }

  return true;
}