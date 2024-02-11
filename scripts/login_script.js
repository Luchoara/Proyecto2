import {usuario} from '../scripts/registro_script.js'


/** Listener Login */
document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("loginForm")
		.addEventListener("submit", function (event) {
			event.preventDefault();

			const username = document.getElementById("loginUsername").value;
			const password = document.getElementById("loginPassword").value;

			const userData = localStorage.getItem(username);

			if (userData) {
				userData = JSON.parse(userData);

				if (password === userData.password) {
					// enviar al index.html con boton usuario en vez de login
					location.replace("index_user.html");

					//* print para checkeo -- ELIMINAR --
					alert("¡Inicio de sesión exitoso!");
				} else {
					alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
				}
			} else {
				alert("El usuario no existe. Por favor, regístrate.");
			}
		});
});

document
	.getElementById("forgotPasswordLink")
	.addEventListener("click", function (event) {
		event.preventDefault();

		location.replace("reset_pass.html");
	});
