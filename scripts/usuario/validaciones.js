
// Funcion para validar los labels del formulario
export function validarCampos(nombre, apellido, alias, email) {
	//VALIDAR PARTICULARMENTE CADA ITEM
	if (nombre === "") {
		alert("Por favor, ingresa un nombre valido");
		return false;
	}
	if (apellido === "") {
		alert("Por favor, ingresa un apellido valido");
		return false;
	}
	if (alias === "") {
		alert("Por favor, ingresa un apellido valido");
		return false;
	}
	if (email === "") {
		alert("Por favor, ingresa un email valido");
		return false;
	}
	else{
		console.log("todo bien en los labels");
	
	}
}

// Funcion para validar los dos passwords y el patron
export function validarPassword(password, confirmPassword) {
	let patronPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*-+]).{8,}$/;
	console.log('funcion validacion pass')
	if (!patronPassword.test(password)) {
		alert(
			"La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial."
		);
		return false;
	}

	if (password !== confirmPassword) {
		alert("Las contraseñas no coinciden.");
		return false;
	}

	return true;
}

/* Iniciar Sesion y cambiar los estilos de los botones */
export function sesionIniciada(e) {
	if (e) {
			//* envia al usuario al index
			location.replace("./html/usuario/index.html");

			let loginOff = document.getElementById("loginOff")
			let loginOn = document.getElementById("loginOn")
			let dropdown = document.getElementById("dropdown")

			loginOff.style.display = "none"
			loginOn.style.display = "block"
			dropdown.style.display = "block"
	} else {
			alert("Algo falló")
	}
}
