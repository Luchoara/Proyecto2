document.addEventListener("DOMContentLoaded", function() {  
  
    var titulo = document.getElementById("jamonsito").textContent.toLowerCase();
    var body = document.body;

    if (titulo.includes("kamino")) {
        body.style.backgroundImage = "url('https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7CDE2BF8D55E524A7920F6A149FB5A982A3905E7AEE12A63716BC3E45231220D/scale?width=1440&aspectRatio=1.78&format=jpeg')";
    } else if (titulo.includes("ahsoka")) {
        body.style.backgroundImage = "url('https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BA50406B852FB305AFFB1D27A3C2E5899DDDC8CC2FB2BA30C78995E82465E9D9/scale?width=1440&aspectRatio=1.78&format=jpeg')";
    } else {
      backgroundImage = "none"
    }


 


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

  var botones = document.querySelectorAll('.seleccionador button');
  var contenedoresSec = document.getElementById("contenedores-sec");
  
  

    botones.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Restablecer el estilo de todos los botones pa que sean grises (no seleccionados)
            botones.forEach(function(b) {
                b.style.color = "rgb(178, 178, 178)";      
                b.style.borderBottom = "none";
            });

            // Aplicar el estilo al botón que le haces clickk
            boton.style.color = "white";
            boton.style.borderBottom = "3px solid white";
            boton.style.borderRadius = "2px";

            //Ve que botón que le haces click
            if (boton.id === "temporadas") {
              

                crearTemporadas();
               crearTemporadasBotones();
               limpiarTemporadas()
          
            } else if (boton.id === "sugerencias") {
                crearSugerencias();
            } else if (boton.id === "detalles") {
              limpiarBotones()
              mostrarDescripcionBadBatch();
            }
            function mostrarDescripcionBadBatch() {
              var detallesHTML = `
                  <div id="detalles_contenedor">
                      <h3 class="detalles-titulo">Star-Wars: The Bad Batch</h3>
                      <p class="detalles-texto">Pasaron meses desde lo ocurrido en Kamino y el lote malo continúa navegando en su viaje por el Imperio luego de la caída de la República. Se toparán con amigos y con enemigos, tanto nuevos como conocidos al aceptar una variedad de emocionantes misiones como mercenarios que los llevarán a lugares nuevos, inesperados y peligrosos. Algunas secuencias o patrones de luces intermitentes pueden afectar a espectadores fotosensibles.</p>
                  </div>`;
              
              contenedoresSec.innerHTML = detallesHTML;
          }     
            });
    });


    function crearTemporadasBotones() {
      var botones_aqui = document.getElementById("botones-aqui");
      botones_aqui.style.opacity = "1"
      botones_aqui.style.fontSize = "15px"
      botones_aqui.style.marginLeft = "0px"

      ; 
    }
    
    function crearTemporadas() {
      
      var temporadasHTML = `
      <section id="temporadas-aqui">

        </section>
        <br>
        <br>
        <div class="carousel carousel-1" id="temporadas_contenedor">
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
      limpiarTemporadas()
      limpiarBotones()
      
      var sugerenciasHTML = `
      <div class="carousel carousel-1 palaizq" id="sugerencias_contenedor">

      <div class="carrusel-list" id="carrusel-list">
                
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

        
      </div>
    </div>`;

      contenedoresSec.innerHTML = sugerenciasHTML
    }
    
;

  var botonesTemp = document.querySelectorAll('.temporadas-seleccionador button')
  var temporadasContenedor = document.getElementById("temporadas-aqui")
  botonesTemp.forEach(function(botonTemp){
    botonTemp.addEventListener("click", function() {
      botonesTemp.forEach(function(bs) {
        bs.style.color = "rgb(178, 178, 178)";      
        bs.style.borderBottom = "none";
    });

    
    // Aplicar el estilo al botón que le haces clickk
    botonTemp.style.color = "white";
    botonTemp.style.borderBottom = "3px solid white";
    botonTemp.style.borderRadius = "2px";
    
   
    if (botonTemp.id === "temporada-1") {
      mostrarTemporada1()
      limpiarContenedorSec()
  } else if (botonTemp.id === "temporada-2") {
      mostrarTemporada2()
      limpiarContenedorSec()
  }else if (botonTemp.id === "temporada-3") {
    mostrarTemporada3()
    limpiarContenedorSec()}

    function mostrarTemporada1(){
      var temporada1HTML = `
      <br>
        <br>
      <div class="carousel carousel-1" id="temporadas_contenedor">
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
      </div>`
      
      temporadasContenedor.innerHTML = temporada1HTML;
      ;
    }

    function mostrarTemporada2(){
      var temporada2HTML = `SISISI`

      temporadasContenedor.innerHTML = temporada2HTML
    }

    function mostrarTemporada3(){
      var temporada3HTML =`TEMPORADA 3`
      temporadasContenedor.innerHTML = temporada3HTML;
    }
    })
});
function limpiarContenedorSec() {
  var contenedoresSec = document.getElementById("contenedores-sec");
  contenedoresSec.innerHTML = ""; 
}

function limpiarTemporadas() {
  var contenedoresSec = document.getElementById("temporadas-aqui");
  contenedoresSec.innerHTML = ""; 
}
}) 

function limpiarBotones() {
  var botones_aqui = document.getElementById("botones-aqui");
  botones_aqui.style.opacity = "0"
  botones_aqui.style.marginLeft = "-300px"
} 

/*function temporadita3() {
  var temporadita3boton = document.getElementById("temporadita-3");
  temporadita3boton.style.opacity = "1"
  temporadita3boton.style.marginLeft = "0px"
} 

function temporadita3limpiar(){
  var temporadita3boton = document.getElementById("temporada-3");
  temporadita3boton.style.opacity = "0"
  temporadita3boton.style.marginLeft = "-300px"
}
*/
