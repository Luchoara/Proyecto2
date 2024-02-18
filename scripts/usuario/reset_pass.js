///** ALGO ESTA MAL!!!
let resetPass = document.getElementById("resetPassForm");

resetPass.addEventListener("submit", function (event) {
    event.preventDefault();


  // AQUI
    // El nombre del usuario ingresado coincide con el de la db
    if (usuarioBD.nombreUsuario === usuarioForm) {

  // Verificar si la nueva contraseña cumple con tus criterios de seguridad
      if (isValidPassword(nuevoPassword)) {
    
        // Si los nuevos password coinciden
        if (nuevoPassword === confirmarPassword) {
          //*CHECKPOINT
          console.log("user seleccionado")

          // Actualiza la contraseña del usuario
          nuevoPassword = usuario.password;

          //*CHECKPOINT
          console.log("nuevo pass letteado")

          // Guardar el usuario actualizado en localStorage
          localStorage.setItem('password', JSON.stringify(nuevoPassword));

          //*CHECKPOINT
          console.log("usuario pass modificado")
        }
        alert('¡Contraseña modificada correctamente!');
      } else {
        alert('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.');
      }
    }
});

// validar todo
function isValidPassword() {

  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d-+]{8,}$/;

  //* Validar los dos passwords
  if(confirmarPassword === nuevoPassword){
    console.log("contraseña validada")
    return regex.test(password);
  }
  else {
    alert('Las contraseñas no coinciden')
  }
};


