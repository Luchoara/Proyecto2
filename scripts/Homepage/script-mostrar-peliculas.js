function cargarPeliculas() {
    alert("cargando peliculas...");
    var datos = JSON.parse(localStorage.getItem("tablaDatos"));
    var peliculas = datos ? datos.peliculas : [];
  
    var peliculasContainer = document.getElementById("peliculasContainer");
    peliculasContainer.innerHTML = ""; // Limpiar el contenido previo
  
    peliculas.forEach(function(pelicula) {
      var peliculaDiv = document.createElement("div");
      peliculaDiv.classList.add("pelicula");
  
      var peliculaTitulo = document.createElement("h2");
      peliculaTitulo.textContent = pelicula.pelicula;
      peliculaDiv.appendChild(peliculaTitulo);
  
      var peliculaCategoria = document.createElement("p");
      peliculaCategoria.textContent = "Categoría: " + pelicula.categoria;
      peliculaDiv.appendChild(peliculaCategoria);
  
      var peliculaSinopsis = document.createElement("p");
      peliculaSinopsis.textContent = pelicula.sinopsis;
      peliculaDiv.appendChild(peliculaSinopsis);
  
      var peliculaPublicado = document.createElement("p");
      peliculaPublicado.textContent = "Publicado: " + (pelicula.publicado ? "Sí" : "No");
      peliculaDiv.appendChild(peliculaPublicado);
  
      var peliculaFavorito = document.createElement("p");
      peliculaFavorito.textContent = "Favorito: " + (pelicula.favorito ? "Sí" : "No");
      peliculaDiv.appendChild(peliculaFavorito);
  
      peliculasContainer.appendChild(peliculaDiv);
    });
  }
  
  // Llamar a la función para cargar las películas cuando la página se cargue
  window.onload = cargarPeliculas;
  