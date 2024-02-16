window.addEventListener('scroll', function() {
    var section = document.querySelector('.fondo-DP');
    var scrollPosition = window.scrollY;
    //oscurecer
    var scrollFactor = 2.2; 
    var opacity = scrollFactor * scrollPosition / window.innerHeight;
  
    // Limita la opacidad entre 0 y el valor máximo especificado
    var maxOpacity = 0.850;
    opacity = Math.min(maxOpacity, Math.max(0, opacity));
  
    // Aplica la opacidad al gradiente radial
    section.style.backgroundImage = 'radial-gradient(farthest-side at 73% 21%, rgba(0, 0, 0, ' + opacity + '), rgb(26, 29, 41))';
  });

  document.addEventListener("DOMContentLoaded", function() {
    var botones = document.querySelectorAll('.seleccionador button');
    var contenedoresSec = document.getElementById("contenedores-sec");

    botones.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Restablecer el estilo de todos los botones
            botones.forEach(function(b) {
                b.style.color = "rgb(178, 178, 178)";      
                b.style.borderBottom = "none";
            });

            // Aplicar el estilo al botón clickeado
            boton.style.color = "white";
            boton.style.borderBottom = "3px solid white";
            boton.style.borderRadius = "2px";

            // Eliminar los divs existentes dentro de "contenedores-sec"
            contenedoresSec.innerHTML = "";

            // Crear el div correspondiente según el botón clickeado
            if (boton.id === "temporadas") {
                crearTemporadas();
            } else if (boton.id === "sugerencias") {
                crearSugerencias();
            } else if (boton.id === "detalles") {
                creardetalles();
            }
        });
    });

    // Función para crear el contenedor de temporadas
    function crearTemporadas() {
        var temporadasHTML = `
            <div class="carousel carousel-1 palaizq" id="temporadas_contenedor">
            <div class="carousel carousel-1 palaizq" id="temporadas_contenedor">

            <div class="carrusel-list" id="carrusel-list">
              <button
                class="carrusel-arrow carrusel-prev"
                id="button-prev"
                data-button="button-prev"
                onclick="app.processingButton(event)"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-left"
                  class="svg-inline--fa fa-chevron-left fa-w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                  ></path>
                </svg>
              </button>
              
              <div class="carrusel-track" id="track">
                <div class="carrusel">
                  <div>
                    <a href="#" class="textoDetalle">
                     <h4><small>Serie</small> TEMPORADAS</h4>
                      <picture>
                        <img src="./assets/img/homepage/carrousel1pc/badbatchpc2.jpg" alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">1. Botín de Guerra (24 min)</p>
                    </a>       
                  </div>
                </div>
                <div class="carrusel">
                  <div>
                    <a href="/">
                      <h4><small>Serie</small></h4>
                      <picture>
                        <img src="./assets/img/homepage/carrousel1pc/ahsokapc2.jpg" alt="ahsoka" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div class="carrusel">
                  <div>
                    <a href="/">
                      <h4><small>Serie</small> Andor</h4>
                      <picture>
                        <img src="./assets/img/homepage/carrousel1pc/Andorpc2.jpg" alt="Andor" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div class="carrusel">
                  <div>
                    <a href="/">
                      <h4><small>Serie</small> Mandalorian</h4>
                      <picture>
                        <img src="./assets/img/homepage/carrousel1pc/mandalorianpc2.jpg" alt="Mandalorian" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div class="carrusel">
                  <div>
                    <a href="/">
                      <h4><small>Especial Lego</small> Especial de las fiestas</h4>
                      <picture>
                        <img src="./assets/img/homepage/carrousel1pc/especialdelasfiestaspc2.jpg" alt="Especial de las fiestas" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div class="carrusel">
                  <div>
                    <a href="/">
                      <h4><small>Serie</small> Obi-Wan Kenobi</h4>
                      <picture>
                        <img src="./assets/img/homepage/carrousel1pc/obiwankenobipc2.jpg" alt="Obi-wan Kenobi" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div class="carrusel">
                  <div>
                    <a href="/">
                      <h4><small>Serie Animación</small>Historias de los Jedi</h4>
                      <picture>
                        <img src="./assets/img/homepage/carrousel1pc/historiadelosjedipc2.jpg" alt="Historia de los jedi" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div class="carrusel">
                  <div>
                    <a href="/">
                      <h4><small>Serie</small> Boba Fett</h4>
                      <picture>
                        <img src="./assets/img/homepage/carrousel1pc/bobafettpc2.jpg" alt="Boba Fett" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
    
              <button
                class="carrusel-arrow carrusel-next"
                id="button-next"
                data-button="button-next"
                onclick="app.processingButton(event)"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-right"
                  class="svg-inline--fa fa-chevron-right fa-w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
            </div>
            `;
        contenedoresSec.innerHTML = temporadasHTML;
    }

    function crearSugerencias() {
      var sugerenciasHTML = `
      
      <div class="carousel carousel-1 palaizq" id="sugerencias_contenedor">

      <div class="carrusel-list" id="carrusel-list">
        <button
          class="carrusel-arrow carrusel-prev"
          id="button-prev"
          data-button="button-prev"
          onclick="app.processingButton(event)"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            class="svg-inline--fa fa-chevron-left fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            ></path>
          </svg>
        </button>
        
        <div class="carrusel-track" id="track">
          <div class="carrusel">
            <div>
              <a href="#" class="textoDetalle">
               <h4><small>Serie</small> SUGERENCIAS</h4>
                <picture>
                  <img src="./assets/img/homepage/carrousel1pc/badbatchpc2.jpg" alt="badbatchpc" />
                </picture>
                <p class="textoInformacion">1. Botín de Guerra (24 min)</p>
              </a>       
            </div>
          </div>
          <div class="carrusel">
            <div>
              <a href="/">
                <h4><small>Serie</small>Ahsoka</h4>
                <picture>
                  <img src="./assets/img/homepage/carrousel1pc/ahsokapc2.jpg" alt="ahsoka" />
                </picture>
              </a>
            </div>
          </div>
          <div class="carrusel">
            <div>
              <a href="/">
                <h4><small>Serie</small> Andor</h4>
                <picture>
                  <img src="./assets/img/homepage/carrousel1pc/Andorpc2.jpg" alt="Andor" />
                </picture>
              </a>
            </div>
          </div>
          <div class="carrusel">
            <div>
              <a href="/">
                <h4><small>Serie</small> Mandalorian</h4>
                <picture>
                  <img src="./assets/img/homepage/carrousel1pc/mandalorianpc2.jpg" alt="Mandalorian" />
                </picture>
              </a>
            </div>
          </div>
          <div class="carrusel">
            <div>
              <a href="/">
                <h4><small>Especial Lego</small> Especial de las fiestas</h4>
                <picture>
                  <img src="./assets/img/homepage/carrousel1pc/especialdelasfiestaspc2.jpg" alt="Especial de las fiestas" />
                </picture>
              </a>
            </div>
          </div>
          <div class="carrusel">
            <div>
              <a href="/">
                <h4><small>Serie</small> Obi-Wan Kenobi</h4>
                <picture>
                  <img src="./assets/img/homepage/carrousel1pc/obiwankenobipc2.jpg" alt="Obi-wan Kenobi" />
                </picture>
              </a>
            </div>
          </div>
          <div class="carrusel">
            <div>
              <a href="/">
                <h4><small>Serie Animación</small>Historias de los Jedi</h4>
                <picture>
                  <img src="./assets/img/homepage/carrousel1pc/historiadelosjedipc2.jpg" alt="Historia de los jedi" />
                </picture>
              </a>
            </div>
          </div>
          <div class="carrusel">
            <div>
              <a href="/">
                <h4><small>Serie</small> Boba Fett</h4>
                <picture>
                  <img src="./assets/img/homepage/carrousel1pc/bobafettpc2.jpg" alt="Boba Fett" />
                </picture>
              </a>
            </div>
          </div>
        </div>

        <button
          class="carrusel-arrow carrusel-next"
          id="button-next"
          data-button="button-next"
          onclick="app.processingButton(event)"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            class="svg-inline--fa fa-chevron-right fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            ></path>
          </svg>
        </button>
      </div>
    </div>`;

      contenedoresSec.innerHTML = sugerenciasHTML
    }

  function creardetalles() {
    var detallesHTML = `<div id="detalles_contenedor">
    <h3 class="detalles-titulo"><b>Star Wars:The Bad Batch</b></h3>
    <p class="detalles-texto">Pasaron meses desde lo ocurrido en Kamino y el lote malo continúa navegando en su viaje por el Imperio luego de la caída de la República. Se toparán con amigos y con enemigos, tanto nuevos como conocidos al aceptar una variedad de emocionantes misiones como mercenarios que los llevarán a lugares nuevos, inesperados y peligrosos. <br> Alguans secuencias o patrones de luces intermitentes pueden afectar a espectadores fotosensibles</p>
  </div>`
  
    contenedoresSec.innerHTML = detallesHTML
}

    
});


