document.getElementById("contactForm").addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const emailFormulario = document.getElementById("email").value.trim();
  console.log(nombre);
  console.log(emailFormulario);
  const errorDiv = document.getElementById("errores");

  errorDiv.innerHTML = "";

  const errores = [];

  if (nombre === "") {
    console.log("Nombre obligatorio");
    errores.push("Nombre obligatorio");
  }

  if (nombre.length < 3) {
    console.log("cantidad mínima de caracteres 3");
    errores.push("cantidad mínima de caracteres 3");
  }

  if (nombre.length > 10) {
    console.log("máximo de caracteres 10");
    errores.push("máximo de caracteres 10");
  }

  if (emailFormulario === "") {
    console.log("Email obligatorio");
    errores.push("Email obligatorio");
  }

  if (errores.length > 0) {
    console.log("Hubo errores");
    errores.forEach(function (error) {
      const p = document.createElement("p");
      p.textContent = error;
      errorDiv.appendChild(p);
    });
  } else {
    console.log("No hubo errores");

    const serviceID = "service_tvkcc19";
    const templateID = "template_tzjcjmt";
    const parametros = {
      destinatario: emailFormulario
    };

    emailjs.send(serviceID, templateID, parametros).then(
      () => {
        alert("Correo enviado");
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  }
});
