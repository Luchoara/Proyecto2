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
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87D4EB7469D1914476693B34A0DC603571F90572D093CE11F6B01FCDF1010B2E/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">1. El Resultado (76 min)</p>
                  </a>       
                </div>
                </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7C63E18D5240DFBCAAF227D7CE2E1C7631972E8125A6F2B5E7C505403DB3EAD8/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">2. La huida (32 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/656EE225D7EE12AB45A46FA45C4D1AE9034E75D034DEAF149115D099F9608489/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">3. Reemplazos (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B1F87E1091D3C55E3F026B4FBC6FD9FC9B0AF8E54F34E974C754F8454683CFE3/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">4. Acorralados (28 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D58FFF35F0E54C06A326E4B1A012717DF28D7A673B6D18034737941A8F6497A9/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">5. Conducta Violenta (27 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/361A9522A04824CCBA4C7EC56B514D1C5C8800DFDB5ED39ECEA5324F035770EA/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">6. Desmantelados (26 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/19429DA264EA9741BCD64BF500BF4AFDA669202EB3ACBF538B1C413389B7E444/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">7. Heridas de Guerra (29 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/36ADE41576B8080C3B9C60214BB228D659EAEBDA16E9FB2776EB17D4CD686B86/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">8. Reunión (28 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/639A3F123E676D024B6A2101F32CA97C23B95558890B3FAA88BBDFE371543C95/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">9. Recompensa Perdida (29 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6020F3AA3AC8D6041F82699F1EFE69AF5332212A8C728F74A89B4256BCB009B5/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">10. Intereses Comunes (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/494014C1BFB7631CA2A95625EA04BBDEC96A850BA6D29C37253C7C9AEAD0F479/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">11. Trato con el enemigo (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/355DFF4AD523CB88D8556DA6C9A4F5A3399B778384E09463A124FD20E2E4B263/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">12. Rescate en Ryloth (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1D8906AE585E0310827EAF706A70486E3D761BBB011C6EDF753A7CEAEE84AED6/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">13. Infestación (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/76BA4CA64C89960E2D0CB0B3C4D4D291823D6280B7884B3D49C0E19965EA4337/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">14. Manto de Guerra (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6C1C0B24C535FF70C9420EB0BEC6D1548AA556B8AA3FD8A893B103DEBC9F5108/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">15. Regreso a Kamino (28 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src= "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/134060345E2844B37B1093D2A3FE7541EE1C94363584A55A77EAE378EDF0C63C/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">16. Kamino Perdido (30 min)</p>
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
      <div class="carousel carousel-1 palaizq" id="sugerencias_contenedor">

      <div class="carrusel-list" id="carrusel-list">
                
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
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87D4EB7469D1914476693B34A0DC603571F90572D093CE11F6B01FCDF1010B2E/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">1. El Resultado (76 min)</p>
                  </a>       
                </div>
                </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7C63E18D5240DFBCAAF227D7CE2E1C7631972E8125A6F2B5E7C505403DB3EAD8/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">2. La huida (32 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/656EE225D7EE12AB45A46FA45C4D1AE9034E75D034DEAF149115D099F9608489/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">3. Reemplazos (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B1F87E1091D3C55E3F026B4FBC6FD9FC9B0AF8E54F34E974C754F8454683CFE3/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">4. Acorralados (28 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D58FFF35F0E54C06A326E4B1A012717DF28D7A673B6D18034737941A8F6497A9/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">5. Conducta Violenta (27 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/361A9522A04824CCBA4C7EC56B514D1C5C8800DFDB5ED39ECEA5324F035770EA/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">6. Desmantelados (26 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/19429DA264EA9741BCD64BF500BF4AFDA669202EB3ACBF538B1C413389B7E444/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">7. Heridas de Guerra (29 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/36ADE41576B8080C3B9C60214BB228D659EAEBDA16E9FB2776EB17D4CD686B86/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">8. Reunión (28 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/639A3F123E676D024B6A2101F32CA97C23B95558890B3FAA88BBDFE371543C95/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">9. Recompensa Perdida (29 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6020F3AA3AC8D6041F82699F1EFE69AF5332212A8C728F74A89B4256BCB009B5/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">10. Intereses Comunes (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/494014C1BFB7631CA2A95625EA04BBDEC96A850BA6D29C37253C7C9AEAD0F479/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">11. Trato con el enemigo (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/355DFF4AD523CB88D8556DA6C9A4F5A3399B778384E09463A124FD20E2E4B263/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">12. Rescate en Ryloth (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1D8906AE585E0310827EAF706A70486E3D761BBB011C6EDF753A7CEAEE84AED6/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">13. Infestación (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/76BA4CA64C89960E2D0CB0B3C4D4D291823D6280B7884B3D49C0E19965EA4337/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">14. Manto de Guerra (30 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6C1C0B24C535FF70C9420EB0BEC6D1548AA556B8AA3FD8A893B103DEBC9F5108/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">15. Regreso a Kamino (28 min)</p>
                  </a>       
                </div>
              </div>
              <div class="carrusel">
                <div>
                  <a href="../error404.html" class="textoDetalle">
                   
                    <picture>
                      <img src= "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/134060345E2844B37B1093D2A3FE7541EE1C94363584A55A77EAE378EDF0C63C/scale?width=400&aspectRatio=NaN&format=jpeg" alt="badbatchpc" />
                    </picture>
                    <p class="textoInformacion">16. Kamino Perdido (30 min)</p>
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

    function mostrarTemporada2(){
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
