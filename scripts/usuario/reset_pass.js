///** ALGO ESTA MAL!!!
let resetPass = document.getElementById("resetPassForm");
let usuarioFormulario = document.getElementById("UsuarioResetPass").value;
let nuevoPass = document.getElementById("nuevoPassword").value;
let confirmarPass = document.getElementById("confirmarPassword").value;

//* comparar el nombre del usuarioForm con el nombre de usuario db almacenado en una variable
let usuarioDB = JSON.parse(localStorage.getItem(usuarioFormulario));


resetPass.addEventListener("submit", function (event) {
    event.preventDefault(event);
    // El nombre del usuario ingresado coincide con el de la db
    if (usuarioDB) {
  // Verificar si la nueva contraseña cumple con tus criterios de seguridad
      if (isValidPassword(nuevoPass)) {
        // Si los nuevos password coinciden
        if (nuevoPass === confirmarPass) {
          // Actualiza la contraseña del usuario
          nuevoPass = usuarioDB.password;
          //*CHECKPOINT
          console.log("nuevo pass seteado")
          // Guardar el usuario actualizado en localStorage
          localStorage.setItem('password', JSON.stringify(nuevoPass));
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


