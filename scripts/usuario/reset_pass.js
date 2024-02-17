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


/* Enviar email para recuperar Pass */

if (userDataDec) {
				// userData = JSON.parse(userData);

				if (resetEmail === userDataDec.email || resetPassUsuario === userDataDec.nombreUsuario) {
					
					//* print para checkeo -- ELIMINAR --
					alert("¡Envio exitoso!");
				
					// enviar un link para resetear el password usando smtpjs

					//* Salta la alerta pero no llega nunca el email
						Email.send({
							SecureToken: "6ebc8191-139d-434c-ad01-cc5a3a93f1a7",
							To : userDataDec.email,
							From : "devStarWatch@gmail.com",
							Subject : "Recuperar contraseña",
							Body : 'body del email'
						}).then(alert(`mensaje enviado a: ${userDataDec.email}`));

				} else {
					alert("Error, algo salio mal");
				}
			} else {
				alert("El usuario no existe. Por favor, regístrate.");
			}		