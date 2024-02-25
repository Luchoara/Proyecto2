// Validacion
function validarCampos(nombre, apellido, usuarioAlias, email, password) {
	//VALIDAR PARTICULARMENTE CADA ITEM
	if (nombre.trim() === "") {
		alert("Por favor, ingresa un nombre valido");
		return false;
	}
	if (apellido.trim() === "") {
		alert("Por favor, ingresa un apellido valido");
		return false;
	}
	if (usuarioAlias.trim() === "") {
		alert("Por favor, ingresa un apellido valido");
		return false;
	}
	if (email.trim() === "") {
		alert("Por favor, ingresa un email valido");
		return false;
	}
	if (password.trim() === "") {
		alert("Por favor, ingresa un password valido");
		return false;
	}
}


function validarPassword(password, confirmPassword){

  let patronPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*-+]).{8,}$/;  
  
  if (!patronPassword.test(password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
      return false;
  }
  

  if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return false;
  }

  return true;
}