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
      //*CHECKPOINT
      console.log("checkpoint 2")
  // Verificar si la nueva contraseña cumple con tus criterios de seguridad
      if (!isValidPassword(nuevoPass)) {
         //*CHECKPOINT
        console.log("checkpoint 3")
        if(nuevoPass === confirmarPass){
            // Actualiza la contraseña del usuario
            nuevoPass = usuarioDB.password;
            //*CHECKPOINT
            console.log("nuevo pass seteado")
            // Guardar el usuario actualizado en localStorage
            localStorage.setItem('password', JSON.stringify(nuevoPass));
            //*CHECKPOINT
            console.log(usuarioDB.password)
        }
      } 
    }
});

// validar todo
function isValidPassword() {

  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d-+]{8,}$/;
  console.log("contraseña validada")
  regex.test(nuevoPass)  
}
  


function passwordConfirm(nuevoPass, confirmarPass){
  if(nuevoPass === confirmarPass){
    alert('Las contraseñas coinciden')
    return true
  }
  else {
      alert('Las contraseñas no coinciden')
  }
}