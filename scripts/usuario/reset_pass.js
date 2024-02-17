///** ALGO ESTA MAL!!!
resetPass = document.getElementById("resetPassForm");

resetPass.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let nuevoPassword = document.getElementById('nuevoPassword').value;
    let confirmarPassword = document.getElementById("confirmarPassword").value;

    // AQUI
    let usuarioName = localStorage.getItem(nombreUsuario);

  // AQUI
    if (nombreUsuario === usuarioName) {
  // Verificar si la nueva contraseña cumple con tus criterios de seguridad
      if (isValidPassword(nuevoPassword)) {

        if (nuevoPassword === usuario.password) {
        // Obtener el usuario actual desde localStorage
          console.log("user seleccionado")
          // Actualizar la contraseña del usuario
          nuevoPassword = usuario.password;
          console.log("nuevo pass letteado")

          // Guardar el usuario actualizado en localStorage
          localStorage.setItem('password', JSON.stringify(nuevoPassword));
          console.log("usuario pass modificado")
        }
        alert('¡Contraseña modificada correctamente!');
      } else {
        alert('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.');
      }
    }
});

// validar
function isValidPassword(password) {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d-+]{8,}$/;
  console.log("contraseña validada")
  return regex.test(password);
}
