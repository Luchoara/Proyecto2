/*

nuevo_pass.html

    //* pedir el email y el usuario
    //* un if para comparar email y usuario dentro del JSON
//* boton para confirmar el envío del link
//* crear un html(nuevo_password.html) con otro form pidiendo usuario, email y editar el id password del form registro.js
//* enviar el link del nuevo_password.html
    
*/

document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("resetPassForm")
		.addEventListener("submit", function (event) {
			event.preventDefault();

			const username = document.getElementById("resetPassUsername").value;
			const email = document.getElementById("resetPassEmail").value;

			const userData = localStorage.getItem(username);

			if (userData) {
				userData = JSON.parse(userData);

				if (email === userData.email || username === userData.username) {
					// enviar al email un link para resetear el password

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
