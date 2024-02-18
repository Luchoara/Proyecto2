var searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {
  var searchText = searchInput.value.trim().toLowerCase();

  if (searchText.length > 0) {
    function filterCards() {
      var sections = document.querySelectorAll("main section");
      sections.forEach(function(section) {
        section.style.display = "none";
      });

      var carousels = document.querySelectorAll(".carousel");
      carousels.forEach(function(carousel) {
        carousel.style.display = "none";
      });

      var searchDiv = document.querySelector(".search");
      searchDiv.style.display = "block";
      searchDiv.innerHTML = "";

      // Objeto para almacenar los números asignados a cada título
      var titleNumbers = {};

      var cards = document.querySelectorAll(".carrusel");

      cards.forEach(function(card) {
        var title = card.querySelector("h4").innerText.toLowerCase();
        // Normalizar el título eliminando espacios y convirtiendo a minúsculas
        var normalizedTitle = title.replace(/\s/g, '');

        // Verificar si el título ya está en el objeto titleNumbers
        if (titleNumbers[normalizedTitle] === undefined) {
          // Si el título no está en el objeto, asignarle un nuevo número
          titleNumbers[normalizedTitle] = Object.keys(titleNumbers).length + 1;
        }

        var cardNumber = titleNumbers[normalizedTitle];

        // Verificar si el título ya se ha mostrado
        if (!searchDiv.querySelector("[data-card-number='" + cardNumber + "']") && title.includes(searchText)) {
          // Si el título no se ha mostrado y coincide con la búsqueda, agregar la tarjeta al div de búsqueda
          var clonedCard = card.cloneNode(true);
          // Añadir el número de tarjeta como atributo personalizado
          clonedCard.setAttribute("data-card-number", cardNumber);
          searchDiv.appendChild(clonedCard);
        }
      });
    }

    filterCards();
  } else {
    var sections = document.querySelectorAll("main section");
    sections.forEach(function(section) {
      section.style.display = "block";
    });

    var carousels = document.querySelectorAll(".carousel");
    carousels.forEach(function(carousel) {
      carousel.style.display = "block";
    });

    var searchDiv = document.querySelector(".search");
    searchDiv.style.display = "none";
  }
});
