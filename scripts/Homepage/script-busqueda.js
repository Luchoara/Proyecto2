// Obtener el input de búsqueda
var searchInput = document.getElementById("search");

// Agregar un event listener para el evento input en el input de búsqueda
searchInput.addEventListener("input", function() {
  // Obtener el valor del input de búsqueda
  var searchText = searchInput.value.trim().toLowerCase();

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

      // Obtener el div de búsqueda
      var searchDiv = document.querySelector(".search");
      // Mostrar el div de búsqueda
      searchDiv.style.display = "block";
      // Limpiar el contenido previo de la búsqueda
      searchDiv.innerHTML = "";

      // Obtener todas las tarjetas del carrusel
      var cards = document.querySelectorAll(".carrusel");

      // Iterar sobre cada tarjeta y mostrar u ocultar según la coincidencia de búsqueda
      cards.forEach(function(card) {
        var title = card.querySelector("h4").innerText.toLowerCase();
        if (title.includes(searchText)) {
          // Clonar la tarjeta coincidente y agregarla al div de búsqueda
          var clonedCard = card.cloneNode(true);
          searchDiv.appendChild(clonedCard);
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

    // Ocultar el div de búsqueda
    var searchDiv = document.querySelector(".search");
    searchDiv.style.display = "none";
  }
});
