
forgotPass =	document.getElementById("forgotPass")

forgotPass.addEventListener("submit", function (event) {

			event.preventDefault();

			const resetPassUsuario = document.getElementById("resetPassUsername").value;
			const resetEmail = document.getElementById("resetPassEmail").value;

			const userData = localStorage.getItem(resetPassUsuario)
			const userDataDec = JSON.parse(userData)
			
			console.log(userDataDec)

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
});


