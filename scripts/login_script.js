/** Listener Login */
login = document.getElementById("loginForm")


login.addEventListener("submit", function (event) {

		event.preventDefault();

		const loginNombre = document.getElementById("loginNombreUsuario").value;
		const loginPass = document.getElementById("loginPassword").value;

		// el valor de userData ahora es el nombreUsuario de registro.js
		let userData = localStorage.getItem(loginNombre);

		if (userData) {

				// a ese valor lo decodificamos
				userData = JSON.parse(userData);

				// si el pass que puso coincide con el password de usuario() entonces:
				if (loginPass === userData.password) {

					//* print para checkeo -- ELIMINAR --
					alert("¡Inicio de sesión exitoso!");

					// enviar al index.html con boton usuario en vez de login
					location.replace("index_user.html");
					
				} else {
					alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
				}
		} else {
				alert("El usuario no existe. Por favor, regístrate.");
		}
});

passOlvidado = document.getElementById("forgotPasswordLink")

passOlvidado.addEventListener("click", function (event) {
		event.preventDefault();

		location.replace("reset_pass.html");
	});
