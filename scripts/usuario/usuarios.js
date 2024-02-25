
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

//* Constructor Usuario *//
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



//* Agregar un usuario al total
const agregarUsuarioAlTotal = (lista) => {

	localStorage.setItem("usuarios", JSON.stringify(lista))
	
}

//* Lista de Usuarios *//
const usuariosTotales = () => {
	const usuarios = JSON.parse(localStorage.getItem('usuarios'))
	return usuarios ? usuarios : []
}

//* Guardar el usuario y agregarlo al total
export const guardarUsuario = (usuario) =>{

	agregarUsuarioAlTotal()
	
	const usuariosTotales = usuariosTotales()
	
	usuariosTotales.push(usuario)
	
}

