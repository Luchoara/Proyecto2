/* Enviar email para recuperar Pass */

let formularioReset = document.getElementById("forgotPass");
let usuarioFormulario = document.getElementById("usuarioFP").value;
let emailFormulario = document.getElementById("emailFP").value;

//* comparar el nombre del usuarioForm con el nombre de usuario db almacenado en una variable
let usuarioDB = JSON.parse(localStorage.getItem(usuarioFormulario));
// let emailDB = JSON.parse(localStorage.getItem(emailFormulario));

let btn = document.getElementById("button");

//* listener para el formulario
formularioReset.addEventListener("submit", function (e) {
	e.preventDefault();

	//* Si el usuario esta en la db entonces...
	if (usuarioDB) {
		//* Si los emails coinciden...
		if (emailFormulario === usuarioDB.email) {
			//* Parametros para el envio del email
			const serviceID = "service_tvkcc19";
			const templateID = "template_zaxhkf9";
			let parametrosEmail = {
				to_name: usuarioFormulario,
				to_email: emailFormulario,
			};

			emailjs.send(serviceID, templateID, parametrosEmail).then(
				() => {
					btn.value = "Send Email";
					//* CHECKPOINT
					alert("Enviado, revisa tu casilla de correo!");
				},
				(err) => {
					btn.value = "Send Email";
					alert(JSON.stringify(err));
				}
			);
		} else {
			alert("Error, algo salio mal");
		}
	} else {
		alert("El usuario no existe. Por favor, regístrate.");
	}
});
