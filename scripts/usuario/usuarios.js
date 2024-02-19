// Función para obtener un usuario específico por su alias de usuario
function obtenerUsuario(alias) {
	var claveUsuario = alias;
	var usuario = JSON.parse(localStorage.getItem(claveUsuario));
	return usuario;
}

// Función para modificar la contraseña de un usuario específico
function modificarContraseña(alias, nuevaContraseña) {
	var usuario = obtenerUsuarioPorAlias(alias);

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

// Ejemplo de uso:
var aliasUsuario = "juanito123"; // Alias del usuario cuya contraseña se quiere modificar
var nuevaContraseña = "nuevaContraseña123"; // Nueva contraseña

if (modificarContraseña(aliasUsuario, nuevaContraseña)) {
	console.log("Contraseña modificada correctamente.");
} else {
	console.log("No se encontró el usuario con el alias especificado.");
}
