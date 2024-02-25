/** Listener Login */
login = document.getElementById("loginForm")

login.addEventListener("submit", function (event) {
    event.preventDefault();

    let loginNombre = document.getElementById("loginNombreUsuario").value;
    let loginPass = document.getElementById("loginPassword").value;

    // el valor de userData ahora es el nombreUsuario de registro.js
    let userData = localStorage.getItem(loginNombre);
    let iniciado = false;

    if (userData) {
        // a ese valor lo decodificamos
        userData = JSON.parse(userData);

        // si el pass que puso coincide con el password de usuario() entonces:
        if (loginPass === userData.password) {
            iniciado = true;
            sesionIniciada(iniciado, loginNombre); // Pasar loginNombre como argumento
        } else {
            alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
        }
    } else {
        alert("El usuario no existe. Por favor, regístrate.");
    }
});



/*Resetear Pass */

// Logout

