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
                      <p class="detalles-texto">La Antigua Jedi Ahsoka Tano investiga una nueva amenaza para una galaxia vulnerable.</p>
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
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/29CFC4600D9D6A930D9B3E38642ED46750EA89F6D16411EE5636257B9697A908/scale?width=400&aspectRatio=NaN&format=jpeg
                    " alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">1. Parte uno: Maestros Aprendices (55 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F28603E9A415CA9B24FDCA5F6A0F41F520528CC2B3AD248C9AF22B4E3735D8E0/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">2. Parte dos: Trabajo y zozobra (44 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B0678305D4F7E42F09EE7202493DE58B0704D77FC6C9027C3D348965783FC2CE/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">3. Parte tres: Hora de volar (37 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/329348F57649A138D1FB8F7222091222826E7475AFE3489C7D7B2FB198F7533E/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">4. Parte cuatro: La caida de un Jedi (41 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A47A47E5752B06B4841E5896D07384AFF62EB9BFA44E8A158B120D0880CFB59D/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">5. Parte cinco: El guerrero de las Sombras (52 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D32C979FBCD615F8E53C653DFA6E6D882D33592A1AEBB87E4F765B7CDE3CE535/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">6. Parte seis: Muy, muy lejana (49 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50D89CE98E4A5114FB0CC46CC6D7FF313F23A9B0A69416CA05648F3796CB4778/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">7. Parte siete: Sueños y locura (46 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/618299E57212BD1788489FC9EED60237FD79014480419F1099596FC4C241532A/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">8. Parte ocho: La jedi, la bruja y el caudillo (49 min)</p>
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
  `;
        contenedoresSec.innerHTML = temporadasHTML;
       /* temporadasContenedor.style.marginLeft= "-130px" */
    }

    function crearSugerencias() {
      limpiarTemporadas()
      limpiarBotones()
      
      var sugerenciasHTML = `

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
                  <a href="../error404.html">
                    
                    <picture>
                      <img class="sugerencias" src="../../assets/img/homepage/carrousel3/VacacionesDeVerano.jpg" alt="Vacaciones de Verano" />
                    </picture>
                  </a>
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html">
                    <picture>
                      <img class="sugerencias" src="../../assets/img/homepage/carrousel1pc/Andorpc2.jpg" alt="Andor" />
                    </picture>
                  </a>
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html">
                    <picture>
                      <img class="sugerencias" src="../../assets/img/homepage/carrousel1pc/mandalorianpc2.jpg" alt="Mandalorian" />
                    </picture>
                  </a>
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html">
                    <picture>
                      <img class="sugerencias" src="../../assets/img/homepage/carrousel1pc/especialdelasfiestaspc2.jpg" alt="Especial de las fiestas" />
                    </picture>
                  </a>
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html">
                    <picture>
                   <img class="sugerencias" src="../../assets/img/homepage/carrousel1pc/obiwankenobipc2.jpg" alt="Obi-wan Kenobi" />
                    </picture>
                  </a>
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html">
                    <picture>
                      <img class="sugerencias" src="../../assets/img/homepage/carrousel1pc/historiadelosjedipc2.jpg" alt="Historia de los jedi" />
                    </picture>
                  </a>
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html">
                    <picture>
                      <img class="sugerencias" src="../../assets/img/homepage/carrousel1pc/bobafettpc2.jpg" alt="Boba Fett" />
                    </picture>
                  </a>
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html">
                    <picture>
                      <img class="sugerencias" src="../../assets/img/homepage/carrousel3/Visions2.jpg" alt="Visions 2" />
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
     
    `;

      contenedoresSec.innerHTML = sugerenciasHTML
    }
 ;

  var botonesTemp = document.querySelectorAll('.temporadas-seleccionador button')
  var temporadasContenedor = document.getElementById("temporadas-aqui")

   window.onresize = function(event) {
    if (window.innerWidth <= 1240) {
        // Tu código JavaScript para manejar la condición
        temporadasContenedor.style.marginLeft="0px";
    } else {
        // Código para cuando la condición no se cumple
       temporadasContenedor.style.marginLeft ="0px"
    }
};


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
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/29CFC4600D9D6A930D9B3E38642ED46750EA89F6D16411EE5636257B9697A908/scale?width=400&aspectRatio=NaN&format=jpeg
                    " alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">1. Parte uno: Maestros Aprendices (55 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F28603E9A415CA9B24FDCA5F6A0F41F520528CC2B3AD248C9AF22B4E3735D8E0/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">2. Parte dos: Trabajo y zozobra (44 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B0678305D4F7E42F09EE7202493DE58B0704D77FC6C9027C3D348965783FC2CE/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">3. Parte tres: Hora de volar (37 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/329348F57649A138D1FB8F7222091222826E7475AFE3489C7D7B2FB198F7533E/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">4. Parte cuatro: La caida de un Jedi (41 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A47A47E5752B06B4841E5896D07384AFF62EB9BFA44E8A158B120D0880CFB59D/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">5. Parte cinco: El guerrero de las Sombras (52 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D32C979FBCD615F8E53C653DFA6E6D882D33592A1AEBB87E4F765B7CDE3CE535/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">6. Parte seis: Muy, muy lejana (49 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50D89CE98E4A5114FB0CC46CC6D7FF313F23A9B0A69416CA05648F3796CB4778/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">7. Parte siete: Sueños y locura (46 min)</p>
                </a>       
              </div>
            </div>
            <div class="carrusel">
              <div>
                <a href="#" class="textoDetalle">
                 
                  <picture>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/618299E57212BD1788489FC9EED60237FD79014480419F1099596FC4C241532A/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                  </picture>
                  <p class="textoInformacion">8. Parte ocho: La jedi, la bruja y el caudillo (49 min)</p>
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
      </div>`
      
      temporadasContenedor.innerHTML = temporada1HTML;
      ;
    }

   /* function mostrarTemporada2(){
      var temporada2HTML = `
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
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5427D282B0CD9F8A96CC8E229E1C56EC07F423BFB12D171794E6806D3FD8BD56/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">1. El Botín de Guerra (24 min)</p>
                  </a>       
                </div>
                </div>
              <div class="carrusel">
                  <div>
                    <a href="../error404.html" class="textoDetalle">
                     
                      <picture>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/81EA88C3CC9DDB19090E2515F6C2263774A7FE9EC4BDF1762F9BB0FD5F045567/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">2. Ruinas de Guerra (28 min)</p>
                    </a>       
                  </div>
                </div>
              <div class="carrusel">
                    <div>
                      <a href="../error404.html" class="textoDetalle">
                       
                        <picture>
                          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/80DE6FEAA703B3FF47739B63A8EFADAB3663C4F2D50676C89C91C82A7C554CF5/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                        </picture>
                        <p class="textoInformacion">3. El Clon Solitario (30 min)</p>
                      </a>       
                    </div>
                </div>
              <div class="carrusel">
                      <div>
                        <a href="../error404.html" class="textoDetalle">
                         
                          <picture>
                            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DF87CAA46DC0A1963B87CBE31DFF0F7E41D1A6E00E2D5A6F7E57DB18E3E836B6/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                          </picture>
                          <p class="textoInformacion">4. Más Rápido (26 min)</p>
                        </a>       
                      </div>
                </div>
              <div class="carrusel">
                        <div>
                          <a href="../error404.html" class="textoDetalle">
                           
                            <picture>
                              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CB56F3743A844108C0744E67A77BA892E36E518E2F6E930A1426B47B7ED533BF/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                            </picture>
                            <p class="textoInformacion">5. Sepultados (29 min)</p>
                          </a>       
                        </div>
                </div>
              <div class="carrusel">
                          <div>
                            <a href="../error404.html" class="textoDetalle">
                             
                              <picture>
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EE73EF728D2DB0A603ECCF7656153C76906267480936E892B5D6E54A449573A0/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                              </picture>
                              <p class="textoInformacion">6. Tribu (28 min)</p>
                            </a>       
                          </div>
                </div>
              <div class="carrusel">
                            <div>
                              <a href="../error404.html" class="textoDetalle">
                               
                                <picture>
                                  <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD5121904FC5AF23515F6111655A719A1E4905AE0BE5351CC8EAF67371096052/scale?width=400&aspectRatio=NaN&format=jpeg
                                  " alt="badbatchpc" />
                                </picture>
                                <p class="textoInformacion">7. La conspiración Clon (29 min)</p>
                              </a>       
                            </div>
                </div>
              <div class="carrusel">
                              <div>
                                <a href="../error404.html" class="textoDetalle">
                                 
                                  <picture>
                                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C2BF30F93B7C01571BEA82044DA73137CF3073466BD375DE377DBC8D7E28ABB3/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                                  </picture>
                                  <p class="textoInformacion">8. Verdad y consecuencias (28 min)</p>
                                </a>       
                              </div>
                </div>
              <div class="carrusel">
                  <div>
                    <a href="../error404.html" class="textoDetalle">
                     
                      <picture>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C196EA34B494D5900D5264D6D909674808F5478ADA12C5C91F903CFBE10F6B95/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">9. La travesía (30 min)</p>
                    </a>       
                  </div>
                </div>
              <div class="carrusel">
                  <div>
                    <a href="../error404.html" class="textoDetalle">
                     
                      <picture>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5881405EDB1F6BC5C6FC2D17E21FAD00977A37B3C85DD0CC164B20ED8876A922/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">10. Recuperación (29 min)</p>
                    </a>       
                  </div>
                </div>
              <div class="carrusel">
                  <div>
                    <a href="../error404.html" class="textoDetalle">
                     
                      <picture>
                        <img src="
                        https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0804CEBC7126EBD131A5CF2661050042381EC8B222A62FF116236851632218A5/scale?width=400&aspectRatio=NaN&format=jpeg
                        " alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">11. Metamorfosis (30 min)</p>
                    </a>       
                  </div>
                </div>
              <div class="carrusel">
                  <div>
                    <a href="../error404.html" class="textoDetalle">
                     
                      <picture>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A58ED5A41B86F6212D380D10AB81FB79176A3415B9C7062D41DF20CE4ED5C136/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">12. El Puesto de Avanzada (32 min)</p>
                    </a>       
                  </div>
                </div>
              <div class="carrusel">
                  <div>
                    <a href="../error404.html" class="textoDetalle">
                     
                      <picture>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/064A61916C339493D4307DE665D7ADC92FFADA5A4FC532327A49A168FFC629F1/scale?width=400&aspectRatio=NaN&format=jpeg
                        " alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">13. Pabú (29 min)</p>
                    </a>       
                  </div>
                </div>
              <div class="carrusel">
                  <div>
                    <a href="../error404.html" class="textoDetalle">
                     
                      <picture>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C9A041B6EB48662D4C2D31940C36CEE584E4FF4E790367A38EB4C275319319D5/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">14. Punto de Inflexión (30 min)</p>
                    </a>       
                  </div>
                 </div>
              <div class="carrusel">
                  <div>
                    <a href="../error404.html" class="textoDetalle">
                     
                      <picture>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5EB25C2823192EBAD49826C77667EE5031FBCA1587E97E3216923056245C083B/scale?width=400&aspectRatio=NaN&format=jpeg
                        " alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">15. La Cumbre (28 min)</p>
                    </a>       
                  </div>
                </div>
              <div class="carrusel">
                  <div>
                    <a href="../error404.html" class="textoDetalle">
                     
                      <picture>
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B662C1BC57D46FB10936537EE94E57D55294981F2A64A528C6D5A4D18DAFFF6/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                      </picture>
                      <p class="textoInformacion">16. Plan 99 (29 min)</p>
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
      </div>`

      temporadasContenedor.innerHTML = temporada2HTML
    }

    function mostrarTemporada3(){
      var temporada3HTML =`TEMPORADA 3`
      temporadasContenedor.innerHTML = temporada3HTML;
    }*/
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
