import {Usuario, guardarUsuario } from '../../scripts/usuario/usuarios.js';
import { validarPassword, validarCampos, sesionIniciada } from "../../scripts/usuario/validaciones.js";

const nuevoUsuario = (e) =>{
  e.preventDefault();

  const nombre = document.getElementById("registroNombre").value.trim();
  const apellido = document.getElementById("registroApellido").value.trim();
  const alias = document.getElementById("registroUsuario").value.trim();
  const email = document.getElementById("registroEmail").value.trim();
  const password = document.getElementById("registroPassword").value.trim();
  const confirmPassword = document.getElementById("confirmarPassword").value.trim();

  console.log('checkpoint 1')

  let labelsValidos = validarCampos(nombre, apellido, alias, email)
  console.log ('checkpoint 2' + labelsValidos)
  //* Valida los campos y los password
  let passwordValido = validarPassword(password, confirmPassword)
  console.log('checkpoint 3' +passwordValido)

    const usuarioNuevo = new Usuario(
      nombre,
      apellido,
      alias,
      email,
      password
    )

    console.log('checkpoint 2')
    //* Guarda el nuevo usuario creado y lo agrega al total
    guardarUsuario(usuarioNuevo)
  
    console.log('checkpoint 3')
    // Inicia sesion y envia al usuario al index con el navbar de usuario
    sesionIniciada()
  }

const registro = document.getElementById("registroForm")

registro.addEventListener("submit", nuevoUsuario)

document.getElementById("registroForm").reset();

/*
const registro = document.getElementById("registroForm")

registro.addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Obtener valores de entrada
  const nombre = document.getElementById("registroNombre").value.trim();
  const apellido = document.getElementById("registroApellido").value.trim();
  const usuarioAlias = document.getElementById("registroUsuario").value.trim();
  const email = document.getElementById("registroEmail").value.trim();
  const password = document.getElementById("registroPassword").value.trim();
  const confirmPassword = document.getElementById("confirmarPassword").value.trim();

  if (!validarCampos(usuario)){
    alert("validacion no pasada");
  }
  if  (!usuarioExiste(usuario.usuarioAlias)){
    alert("usuario existente no pasado");
  }

  if(validarPassword(password, confirmPassword)){
    alert("password no paso")
  }

  // Crear objeto de usuario
  crearUsuario()


  // Limpiar el formulario
  document.getElementById("registroForm").reset();

  // Relocation
  location.replace("/html/usuario/login.html");

  //alerta exitosa
  alert("Registro exitoso. Redirigiendo, inicia sesión.");
  
});
*/
// function crearUsuario() {

//   // crear un array de usuarios
//   const usuariosLista = [];  

//   const usuario = {

//     nombre: nombre,
//     apellido: apellido,
//     usuarioAlias: usuarioAlias,
//     email:email,
//     password: password
  
//   };

//   // agregar el usuario creado al array de usuarios
//   usuariosLista.push(usuario);

//   localStorage.setItem("usuariosTotales", JSON.stringify(usuariosLista));
// }
