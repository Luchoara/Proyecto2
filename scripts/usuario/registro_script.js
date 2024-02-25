import {Usuario, guardarUsuario } from '../../scripts/usuario/usuarios.js';
import { validarPassword, validarCampos, sesionIniciada } from "../../scripts/usuario/validaciones.js";

const nuevoUsuario = (e) =>{
  e.preventDefault();

  const nombreForm = document.getElementById("registroNombre").value.trim();
  const apellidoForm = document.getElementById("registroApellido").value.trim();
  const aliasForm = document.getElementById("registroUsuario").value.trim();
  const emailForm = document.getElementById("registroEmail").value.trim();
  const passwordForm = document.getElementById("registroPassword").value.trim();
  const confirmPasswordForm = document.getElementById("confirmarPassword").value.trim();


  let labelsValidos = validarCampos(nombreForm, apellidoForm, aliasForm, emailForm)
  console.log ('checkpoint 2' + labelsValidos)

  //* Valida los campos y los password
  let passwordValido = validarPassword(passwordForm, confirmPasswordForm)
  console.log('checkpoint 3' +passwordValido)

  if (labelsValidos && passwordValido) {

    const usuarioNuevo = new Usuario(
      nombreForm,
      apellidoForm,
      aliasForm,
      emailForm,
      passwordForm,
    );

    console.log('checkpoint 2')
    //* Guarda el nuevo usuario creado y lo agrega al total
    guardarUsuario(usuarioNuevo)
  
    console.log('checkpoint 3')
    // Inicia sesion y envia al usuario al index con el navbar de usuario
    sesionIniciada(usuarioNuevo)
  }
};

const registro = document.getElementById("registroForm")

registro.addEventListener("submit", function (e) {
  e.preventDefault()
  nuevoUsuario(e)
});

document.getElementById("registroForm").reset();
