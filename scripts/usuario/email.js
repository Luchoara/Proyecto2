// Obtener el valor del email del usuario del formulario
let emailUsuario = document.getElementById("email").value;

// Obtener los usuarios de localStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios'));

// Obtener el formulario
let emailFormulario = document.getElementById("emailFormulario");

// Listener para el evento submit del formulario
emailFormulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Iterar sobre los usuarios para verificar si el email coincide
    let emailCoincide = false;
	let idUsuario = '';

    usuarios.forEach(usuario => {
        if (emailUsuario === usuario.email) {
            emailCoincide = true;
			idUsuario = usuario.id;
            return;
        }
    });

    // Si los emails coinciden, enviar el email
    if (emailCoincide) {
        // Parametros para el envio del email
        const serviceID = "service_tvkcc19";
        const templateID = "template_zaxhkf9";
        let email = {
			to_name: idUsuario,
            to_email: emailUsuario,
        };

		

        emailjs.send(serviceID, templateID, email).then(
            () => {
                alert("Enviado, revisa tu casilla de correo!");
            },
            (err) => {
                alert(JSON.stringify(err));
            }
        );
    } else {
        alert("Error, el email no coincide con ningún usuario registrado.");
    }
});
