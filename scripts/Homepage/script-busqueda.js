// Obtener el input de búsqueda
var searchInput = document.getElementById("search");

// Agregar un event listener para el evento input en el input de búsqueda
searchInput.addEventListener("input", function() {
  // Obtener el valor del input de búsqueda
  var searchText = searchInput.value.trim().toLowerCase();

  // Obtener el contenedor de búsqueda
  var searchContainer = document.querySelector(".search");

  // Limpiar el contenido del contenedor de búsqueda
  searchContainer.innerHTML = "";

  // Verificar si hay texto en el input
  if (searchText.length > 0) {
    // Definir la función para filtrar las tarjetas
    function filterCards() {
      // Ocultar todas las secciones y carruseles
      var sections = document.querySelectorAll("main section");
      sections.forEach(function(section) {
        section.style.display = "none";
      });

      var carousels = document.querySelectorAll(".carousel");
      carousels.forEach(function(carousel) {
        carousel.style.display = "none";
      });

      // Mostrar el contenedor de búsqueda
      searchContainer.style.display = "block";

      // Conjunto para almacenar títulos únicos de tarjetas
      var uniqueTitles = new Set();

      // Obtener todas las tarjetas del carrusel
      var cards = document.querySelectorAll(".carrusel");

      // Iterar sobre cada tarjeta y mostrar u ocultar según la coincidencia de búsqueda
      cards.forEach(function(card) {
        var title = card.querySelector("h4").innerText.toLowerCase();
        // Verificar si el título ya está en el conjunto de títulos únicos
        if (!uniqueTitles.has(title) && title.includes(searchText)) {
          // Agregar el título al conjunto de títulos únicos
          uniqueTitles.add(title);
          // Clonar la tarjeta coincidente y agregarla al contenedor de búsqueda
          var clonedCard = card.cloneNode(true);
          searchContainer.appendChild(clonedCard);
        }
      });
    }

    // Llamar a la función de filtrado
    filterCards();
  } else {
    // Si no hay texto en el input, mostrar todas las secciones y carruseles
    var sections = document.querySelectorAll("main section");
    sections.forEach(function(section) {
      section.style.display = "block";
    });

    var carousels = document.querySelectorAll(".carousel");
    carousels.forEach(function(carousel) {
      carousel.style.display = "block";
    });

    // Ocultar el contenedor de búsqueda
    searchContainer.style.display = "none";
  }
});
