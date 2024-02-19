

///** ALGO ESTA MAL!!!
let resetPassForm = document.getElementById("resetPassForm");
let usuarioFormulario = document.getElementById("UsuarioResetPass").value;

let nuevoPass = document.getElementById("nuevoPassword").value;
let confirmarPass = document.getElementById("confirmarPassword").value;

//* comparar el nombre del usuarioForm con el nombre de usuario db almacenado en una variable
/* let usuarioDB = JSON.parse(localStorage.getItem(usuarioFormulario));
let passDB = JSON.parse(localStorage.getItem(usuarioDB.password));
*/


//* Obtener los usuarios

let usuarioExiste = JSON.parse(localStorage.getItem(usuarioFormulario));


resetPassForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // El nombre del usuario ingresado coincide con el de la db
    if (usuarioExiste) {
      //*CHECKPOINT
      console.log("checkpoint 2")
      // Verificar si la nueva contraseña cumple con tus criterios de seguridad
      if (!isValidPassword(nuevoPass)) {
         //*CHECKPOINT
        console.log("checkpoint 3")
        if(nuevoPass === confirmarPass){
          
          modificarContrasenia(usuarioExiste, nuevoPass)
          let checkFinal = JSON.parse(localStorage.getItem(usuarioExiste));
          console.log(checkFinal)
          
        } 
      }
      else{
        alert("checkpoint error 3")
      } 
    }
});

// validar todo
function isValidPassword(password) {

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d-+]{8,}$/;
  console.log("contraseña validada")
  return regex.test(password)  
}


// Función para modificar la contraseña de un usuario específico
function modificarContrasenia(alias, nuevoPassword) {

	if (alias) {
		// Actualizar la contraseña del usuario
		alias.password = nuevoPassword;

// ERROR!!! 
		// Guardar el usuario actualizado en localStorage
		localStorage.setItem(alias.password, JSON.stringify(alias));
		return alert('contraseña modificada correctamente'); // La contraseña se modificó correctamente
  } else {
    
    return alert('error al editar contraseña'); // No se encontró el usuario con el alias especificado
  }
}
