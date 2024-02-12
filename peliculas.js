function mostrarPeliculas() {
    var contenedorPeliculas = document.getElementById("contenedorPeliculas");
    var tableData = JSON.parse(localStorage.getItem("tablaDatos"));

    if (tableData) {
        tableData.forEach(function(pelicula) {
            var divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");

            var titulo = document.createElement("h2");
            titulo.textContent = pelicula.pelicula;

            var categoria = document.createElement("p");
            categoria.textContent = "Categoría: " + pelicula.categoria;

            var sinopsis = document.createElement("p");
            sinopsis.textContent = pelicula.sinopsis;

            divPelicula.appendChild(titulo);
            divPelicula.appendChild(categoria);
            divPelicula.appendChild(sinopsis);

            contenedorPeliculas.appendChild(divPelicula);
        });
    }
}

mostrarPeliculas();
