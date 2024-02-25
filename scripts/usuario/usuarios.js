
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

//* Constructor del Usuario *//
export class Usuario {
	constructor(nombre,apellido, alias, email, password, superUser) {
		this.nombre = nombre;
    this.apellido= apellido,
    this.alias= alias,
    this.email= email,
    this.password= password
		this.superUser= {
			1: true,
			2: false
		}
	}	
}



//* agrega el usuario a la lista
const agregarUsuarioAlTotal = (lista) => {
	if (lista) {
			localStorage.setItem("usuarios", JSON.stringify(lista));
	} else {
			// Si no se pasa una lista, no hacemos nada
			console.error("No se pasó una lista de usuarios al agregarUsuarioAlTotal");
	}
}

//* Lista de Usuarios *//
const obtenerUsuariosTotales = () => {
	const usuarios = JSON.parse(localStorage.getItem('lista'));
	return usuarios ? usuarios : [];
}

//* Guardar el usuario y agregarlo al total
export const guardarUsuario = (usuario) => {
	
	// Traer la lista actual de usuarios
	let usuariosTotales = obtenerUsuariosTotales();
	
	// Agregar el nuevo usuario a la lista de totales
	usuariosTotales.push(usuario);
	
	// Guardar en la lista
	agregarUsuarioAlTotal(usuariosTotales);
}