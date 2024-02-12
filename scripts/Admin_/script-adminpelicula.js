function guardarLocalStorage() {
  var tableData = [];
  var tableRows = document.querySelectorAll("#miTabla tbody tr");

  // Comenzamos desde la segunda fila
  for (var i = 1; i < tableRows.length; i++) {
      var row = tableRows[i];
      var rowData = {
          pelicula: row.cells[1].innerText || "", // Verifica si la propiedad existe, si no, usa una cadena vacía
          categoria: row.cells[2].innerText || "", // Verifica si la propiedad existe, si no, usa una cadena vacía
          sinopsis: row.cells[3].innerText || "", // Verifica si la propiedad existe, si no, usa una cadena vacía
          publicado: row.cells[4].querySelector("input[type=checkbox]") ? row.cells[4].querySelector("input[type=checkbox]").checked : false, // Verifica si el elemento existe y luego accede a su propiedad checked
          favorito: row.cells[5].querySelector(".src-favorito") ? row.cells[5].querySelector(".src-favorito").src : "" // Verifica si el elemento existe y luego accede a su propiedad src
      };
      tableData.push(rowData);
  }

  localStorage.setItem("tablaDatos", JSON.stringify(tableData));
  alert("Datos guardados en el almacenamiento local.");
}

function cargarLocalStorage() {
  var tableData = JSON.parse(localStorage.getItem("tablaDatos"));
  if (tableData) {
      var table = document.getElementById("miTabla");

      // Verificar si la tabla ya tiene filas antes de agregar nuevas
      if (table.rows.length === 1) { // Si la tabla solo tiene la fila de encabezado, agregar nuevas filas
          var loadedImages = 0; // Contador para el número de imágenes cargadas
          var totalImages = tableData.length; // Total de imágenes que se cargarán

          // Función para agregar filas después de que todas las imágenes se hayan cargado
          var addRows = function() {
              // Agrega las nuevas filas con los datos cargados desde el almacenamiento local
              tableData.forEach(function(rowData) {
                  var rowNumber = table.rows.length;
                  var newRow = table.insertRow();
                  newRow.innerHTML = "<td>" + rowNumber + "</td>" +
                                     "<td>" + rowData.pelicula + "</td>" +
                                     "<td>" + rowData.categoria + "</td>" +
                                     "<td>" + rowData.sinopsis + "</td>" +
                                     "<td><input type='checkbox' onchange='guardarLocalStorage()'" + (rowData.publicado ? " checked" : "") + "></td>" +
                                     "<td>" +
                                     "<button class='boton-accion' onclick='eliminarFila(this)'><img src='../assets/img/admin_/delete.png' alt='Eliminar'></button>" +
                                     "<button class='boton-accion' onclick='marcarFavorito(this)'>" + "<img class='src-favorito' src=" + rowData.favorito + ">" + "</button>" +
                                     "<button class='boton-accion' onclick='editarDato(this)'><img src='../assets/img/admin_/edit.png' alt='Editar'></button></td>";

              });
          };

          // Función de retrollamada para manejar la carga de cada imagen
          var imageLoaded = function() {
              loadedImages++;
              if (loadedImages === totalImages) { // Si todas las imágenes se han cargado, agregar las filas
                  addRows();
              }
          };

          // Cargar imágenes y llamar a la función de retrollamada cuando se cargue cada imagen
          tableData.forEach(function(rowData) {
              var image = new Image();
              image.onload = imageLoaded;
              image.src = rowData.favorito; // URL de la imagen
          });
      }
  }
}


// Llama a la función para cargar los datos al cargar la página
window.onload = function() {
  cargarLocalStorage();
};


var editedRow; // Variable global para almacenar la fila editada

function abrirModalAgregar() {
var modal = document.getElementById("modalAgregar");
modal.style.display = "block"; // Muestra el modal
}

function cerrarModalAgregar() {
      var modal = document.getElementById("modalAgregar");
      modal.style.display = "none"; // Oculta el modal
      // Vaciar campos
      document.getElementById("inputPelicula").value = "";
      document.getElementById("inputCategoria").value = "";
      document.getElementById("inputSinopsis").value = "";
  }

  function agregarFila() {
    var peliculaInput = document.getElementById("inputPelicula").value;
    var categoriaSelect = document.getElementById("selectCategoriaAgregar");
    var categoriaInput = categoriaSelect.options[categoriaSelect.selectedIndex].value;
    var sinopsisInput = document.getElementById("inputSinopsis").value;
    var imagenInput = document.getElementById("inputImagen").files[0]; // Obtener el archivo de imagen

    if (peliculaInput && categoriaInput && sinopsisInput && imagenInput) {
        var table = document.getElementById("miTabla");
        var newRow = table.insertRow(-1); // Inserta una fila al final de la tabla (-1)
        var cols = 6; // Número de columnas en la tabla

        // Agrega celdas a la nueva fila
        for (var i = 0; i < cols; i++) {
            var newCell = newRow.insertCell(i);
            if (i === 0) {
                newCell.innerHTML = table.rows.length - 1; // Número de fila (se resta 1 por la fila de encabezado)
            } else if (i === 4) {
                newCell.innerHTML = '<input type="checkbox" onchange="guardarLocalStorage()">';
            } else if (i === 5) {
                newCell.innerHTML = '<button class="boton-accion" onclick="eliminarFila(this)"><img src="../assets/img/admin_/delete.png" alt="Eliminar"></button>' +
                    '<button class="boton-accion" onclick="marcarFavorito(this)"><img class="src-favorito" src="../assets/img/admin_/favorite0.png" alt="Favorito"></button>' +
                    '<button class="boton-accion" onclick="editarDato(this)"><img src="../assets/img/admin_/edit.png" alt="editar"></button>';
            } else {
                switch (i) {
                    case 1:
                        newCell.innerHTML = peliculaInput;
                        break;
                    case 2:
                        newCell.innerHTML = categoriaInput;
                        break;
                    case 3:
                        newCell.innerHTML = sinopsisInput;
                        break;
                    default:
                        newCell.innerHTML = "Nuevo Dato";
                        break;
                }
            }
        }

        // Guardar la ruta de la imagen en el objeto de datos de la película
        var reader = new FileReader();
        reader.onload = function(event) {
            var imagenBase64 = event.target.result;
            var tableData = JSON.parse(localStorage.getItem("tablaDatos")) || [];
            var nuevaPelicula = {
                pelicula: peliculaInput,
                categoria: categoriaInput,
                sinopsis: sinopsisInput,
                imagen: imagenBase64 // Guardar la imagen como datos de la película
            };
            tableData.push(nuevaPelicula);
            localStorage.setItem("tablaDatos", JSON.stringify(tableData));
        };
        reader.readAsDataURL(imagenInput);

        guardarLocalStorage();
        cerrarModalAgregar(); // Cierra el modal de agregar fila
    } else {
        alert("Por favor, completa todos los campos y selecciona una imagen.");
    }
}

function eliminarFila(button) {
var row = button.parentNode.parentNode;
row.parentNode.removeChild(row);

guardarLocalStorage();

}

function editarDato(button) {
var row = button.parentNode.parentNode;
editedRow = row; // Almacena la fila editada globalmente
var editInputs = document.querySelectorAll("#myModal input");
editInputs[0].value = row.cells[1].innerHTML; // Película
editInputs[1].value = row.cells[2].innerHTML; // Categoría
editInputs[2].value = row.cells[3].innerHTML; // Sinopsis
var modal = document.getElementById("myModal");
modal.style.display = "block"; // Muestra el modal
}

function guardarCambios() {
var editInputs = document.querySelectorAll("#myModal input");
editedRow.cells[1].innerHTML = editInputs[0].value; // Película
editedRow.cells[2].innerHTML = editInputs[1].value; // Categoría
editedRow.cells[3].innerHTML = editInputs[2].value; // Sinopsis

guardarLocalStorage();

cerrarModal(); // Cierra el modal después de guardar los cambios

}

function cerrarModal() {
var modal = document.getElementById("myModal");
modal.style.display = "none"; // Oculta el modal
}

function marcarFavorito(img) {
  var iconoFavorito = img.querySelector('img');
  if (iconoFavorito.src.endsWith("favorite0.png")) {
    iconoFavorito.src = "../assets/img/admin_/favorite1.png"; // Cambia el src a favorito1.png
  } else if (iconoFavorito.src.endsWith("favorite1.png")) {
    iconoFavorito.src = "../assets/img/admin_/favorite0.png"; // Cambia el src a favorito0.png
  }

  guardarLocalStorage();
}

/*------------------- AÑADIR PELICULAS ----------------*/


