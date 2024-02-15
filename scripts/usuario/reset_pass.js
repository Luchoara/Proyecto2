///** FALTA LINK EN BODY DE EMAIL PARA "resetPass.html" */


forgotPass =	document.getElementById("forgotPass")

forgotPass.addEventListener("submit", function (event) {

			event.preventDefault();

			const resetPassUsuario = document.getElementById("to_name").value;
			const resetEmail = document.getElementById("to_email").value;

			const userData = localStorage.getItem(resetPassUsuario)
			const userDataDec = JSON.parse(userData)
			
			console.log(userDataDec)

			if (userDataDec) {
				// userData = JSON.parse(userData);

				if (resetEmail === userDataDec.email || resetPassUsuario === userDataDec.nombreUsuario) {
					//* envio por email el link

					const serviceID = 'default_service';
					const templateID = 'template_zaxhkf9';
					const parametros = {
						to_email: userDataDec.email,
						to_name: userDataDec.nombreUsuario,
					}

					emailjs.send(serviceID, templateID, parametros, this)
						.then(() => {
								alert("¡Envio exitoso!. Revise su correo");
						}, (err) => {
								alert(JSON.stringify(err));
						});
				} else {
					alert("Error, algo salio mal");
				}
			} else {
				alert("El usuario no existe. Por favor, regístrate.");
			}		
});


