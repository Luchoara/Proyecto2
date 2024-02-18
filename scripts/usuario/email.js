/* Enviar email para recuperar Pass */

let formularioReset = document.getElementById("forgotPass");
let usuarioFormulario = document.getElementById("to_name").value;
let emailFormulario = document.getElementById("to_email").value;

//* comparar el nombre del usuarioForm con el nombre de usuario db almacenado en una variable
let usuarioDB = localStorage.getItem(usuarioFormulario);

//* listener para el formulario
formularioReset.addEventListener("submit", function (e) {
  console.log(usuarioFormulario);
  //* console.log(usuarioDB);
  //* Si el usuario esta en la db entonces...
	if (usuarioDB) {

    //* CHECKPOINT
		alert("usuario db: "+usuarioDB);

		if (resetEmail === usuarioDB.email) {
			//* CHECKPOINT
			alert("¡Envio exitoso!");

			// enviar un link para resetear el password usando smtpjs
			//* Salta la alerta pero no llega nunca el email
			Email.send({
				SecureToken: "6ebc8191-139d-434c-ad01-cc5a3a93f1a7",
				To: usuarioDB.email,
				From: "devStarWatch@gmail.com",
				Subject: "Recuperar contraseña",
				Body: "body del email",
			}).then(alert(`mensaje enviado a: ${usuarioDB.email}`));
		} else {
			alert("Error, algo salio mal");
		}
	} else {
		alert("El usuario no existe. Por favor, regístrate.");
	}
});
