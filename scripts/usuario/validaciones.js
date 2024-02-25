
// LABELS
// Funcion para validar los labels del formulario
export function validarCampos(nombre, apellido, alias, email) {
	// Objeto para almacenar mensajes de error por campo
	let errores = {
			nombre: "",
			apellido: "",
			alias: "",
			email: ""
	};

	// VALIDAR PARTICULARMENTE CADA ITEM
	if (nombre === "") {
			errores.nombre = "Por favor, ingresa un nombre válido";
	}
	if (apellido === "") {
			errores.apellido = "Por favor, ingresa un apellido válido";
	}
	if (alias === "") {
			errores.alias = "Por favor, ingresa un alias válido";
	}
	if (email === "") {
			errores.email = "Por favor, ingresa un email válido";
	}

	// Mostrar los mensajes de error debajo de cada campo del formulario
	mostrarErrores(errores);

	// Verificar si hay errores
	for (let campo in errores) {
			if (errores[campo] !== "") {
					return false;
			}
	}

	// Checkeo
	console.log("Todo bien en los labels");
	return true;
}

// Función para mostrar los mensajes de error debajo de cada campo del formulario
export function mostrarErrores(errores) {
	for (let campo in errores) {
			const campoElemento = document.getElementsByClassName("form-control");
			const errorElemento = campoElemento.nextElementSibling;
			
			// Eliminar cualquier mensaje de error previo
			if (errorElemento && errorElemento.classList.contains("error-mensaje")) {
					errorElemento.remove();
			}

			// Agregar mensaje de error debajo del campo
			if (errores[campo] !== "") {
					const mensajeError = document.createElement("span");
					mensajeError.textContent = errores[campo];
					mensajeError.classList.add("error-mensaje");
					campoElemento.parentNode.insertBefore(mensajeError, campoElemento.nextSibling);
			}
	}
}

// PASSWORD
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
			alert((err))
	}
}
