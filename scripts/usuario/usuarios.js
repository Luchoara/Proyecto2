// Función para obtener un usuario específico por su alias de usuario
function obtenerUsuario(usuario) {
	const usuarioIngresado = usuario;
	const usuarioDB = JSON.parse(localStorage.getItem(usuarioIngresado));

	if (usuarioIngresado === usuarioDB) {
		alert("Usuario existente");
	} else {
		alert("usuario no existe en la BD");
	}

	return usuarioIngresado;
}

export default obtenerUsuario;

// Función para modificar la contraseña de un usuario específico
export function modificarContraseña(alias, nuevaContraseña) {
	var usuario = obtenerUsuario(alias);

	if (usuario) {
		// Actualizar la contraseña del usuario
		usuario.password = nuevaContraseña;

		// Guardar el usuario actualizado en localStorage
		var claveUsuario = "usuario_" + alias;
		localStorage.setItem(claveUsuario, JSON.stringify(usuario));
		return true; // La contraseña se modificó correctamente
	} else {
		return false; // No se encontró el usuario con el alias especificado
	}
}

// Validar Usuario ya registrado
export function usuarioExiste(existe) {
	localStorage.getItem("usuarios", JSON.parse(usuarios));

	if (existe === obtenerUsuario) {
		alert("Usuario existente");
	} else {
		alert("usuario no existe en la BD");
	}
}
