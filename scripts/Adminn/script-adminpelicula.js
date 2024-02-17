// Definir la clase Pelicula
class Pelicula {
  constructor(pelicula, categoria, sinopsis, publicado, favorito) {
    this.pelicula = pelicula || "";
    this.categoria = categoria || "";
    this.sinopsis = sinopsis || "";
    this.publicado = publicado || false;
    this.favorito = favorito || "";
  }
}

/*------------------------------------------------------------------*/

function guardarLocalStorage() {
  var tableData = [];
  var tableRows = document.querySelectorAll("#miTabla tbody tr");

  // Comenzamos desde la segunda fila
  for (var i = 1; i < tableRows.length; i++) {
    var row = tableRows[i];
    var pelicula = new Pelicula(
      row.cells[1].innerText,
      row.cells[2].innerText,
      row.cells[3].innerText,
      row.cells[4].querySelector("input[type=checkbox]").checked,
      row.cells[5].querySelector(".src-favorito").src
    );
    tableData.push(pelicula);
  }

  var categorias = obtenerCategorias(); // Obtener la lista de categorías
  var datos = { peliculas: tableData, categorias: categorias }; // Objeto con películas y categorías
  localStorage.setItem("tablaDatos", JSON.stringify(datos)); // Guardar datos en el almacenamiento local
}

function cargarLocalStorage() {
  var tableData = JSON.parse(localStorage.getItem("tablaDatos"));
  if (tableData) {
    var table = document.getElementById("miTabla");

    // Elimina todas las filas existentes para evitar duplicados
    while (table.rows.length > 1) {
      table.deleteRow(1); // Comenzamos desde la segunda fila
    }

    // Agrega las nuevas filas con los datos cargados desde el almacenamiento local
    tableData.peliculas.forEach(function (pelicula, index) {
      var newRow = table.insertRow();
      newRow.innerHTML =
        "<td>" +
        (index + 1) +
        "</td>" +
        "<td>" +
        pelicula.pelicula +
        "</td>" +
        "<td>" +
        pelicula.categoria +
        "</td>" +
        "<td>" +
        pelicula.sinopsis +
        "</td>" +
        "<td><input type='checkbox' onchange='guardarLocalStorage()' " +
        (pelicula.publicado ? "checked" : "") +
        "></td>" +
        "<td>" +
        "<button class='boton-accion' onclick='eliminarFila(this)'><img src='../assets/img/admin_/delete.png' alt='Eliminar'></button>" +
        "<button class='boton-accion' onclick='marcarFavorito(this)'><img class='src-favorito' src=" +
        pelicula.favorito +
        " alt='Favorito'></button>" +
        "<button class='boton-accion' onclick='editarFila(this)'><img src='../assets/img/admin_/edit.png' alt='Editar'></button></td>";
    });
  }
    var categorias = JSON.parse(localStorage.getItem("categorias"));
    cargarCategorias(categorias);
}

// Llama a la función para cargar los datos al cargar la página
window.onload = function () {
  cargarLocalStorage();
};

/*------------------------------------------------------------------*/

var editedRow; // Variable global para almacenar la fila editada

function botonGuardar() {
  guardarLocalStorage();
  alert("Datos guardados en el almacenamiento local.");
}

function abrirModalAgregar() {
      var modal = document.getElementById("modalAgregar");
      modal.style.display = "block"; // Muestra el modal
      document.getElementById("inputPelicula").value = "";
      document.getElementById("selectCategoriaAgregar").value = "";
      document.getElementById("inputSinopsis").value = "";
      document.getElementById("inputImagen").value = "";
}

function cerrarModalAgregar() {
      var modal = document.getElementById("modalAgregar");
      modal.style.display = "none"; // Oculta el modal
      // Vaciar campos
      document.getElementById("inputPelicula").value = "";
      document.getElementById("selectCategoriaAgregar").value = "";
      document.getElementById("inputSinopsis").value = "";
      document.getElementById("inputImagen").value = "";
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
                    '<button class="boton-accion" onclick="editarFila(this)"><img src="../assets/img/admin_/edit.png" alt="editar"></button>';
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

function abrirModalEditar() {
  var modal = document.getElementById("modalEditar");
  modal.style.display = "block"; // Muestra el modal

  // Obtener y cargar las categorías en el select del modal de edición
  
  }
  
  function cerrarModalEditar() {
        var modal = document.getElementById("modalEditar");
        modal.style.display = "none"; // Oculta el modal
    }

function eliminarFila(button) {
var row = button.parentNode.parentNode;
row.parentNode.removeChild(row);

}

function editarFila(button) {
  abrirModalEditar();
  var row = button.parentNode.parentNode;
  editedRow = row; // Almacena la fila editada globalmente
  var editInputs = document.querySelectorAll("#modalEditar input");
  var editSelect = document.querySelector("#modalEditar select");

  // Obtener las categorías del localStorage
  var categorias = JSON.parse(localStorage.getItem("categorias")) || [];
  
  // Limpiar el select antes de agregar las nuevas opciones
  editSelect.innerHTML = "";

  // Agregar cada categoría como una opción al select
  categorias.forEach(function(categoria) {
    var option = document.createElement("option");
    option.text = categoria;
    option.value = categoria;
    editSelect.add(option);
  });

  // Obtener los valores actuales de la fila y asignarlos a los inputs del modal
  editInputs[0].value = row.cells[1].innerHTML; // Película
  editSelect.value = row.cells[2].innerHTML; // Categoría
  editInputs[1].value = row.cells[3].innerHTML; // Sinopsis

  // Función para guardar los cambios al hacer clic en el botón "Guardar"
  function guardarEditarFila() {
    // Asignar los valores de los inputs del modal a las celdas de la fila editada
    editedRow.cells[1].innerHTML = editInputs[0].value; // Película
    editedRow.cells[2].innerHTML = editSelect.value; // Categoría
    editedRow.cells[3].innerHTML = editInputs[1].value; // Sinopsis

    guardarLocalStorage(); // Guardar los cambios en el almacenamiento local
    cerrarModalEditar(); // Cerrar el modal de edición
  }
  var categorias = JSON.parse(localStorage.getItem("categorias"))

  // Asignar la función guardarEditarFila al botón de guardar en el modal
  document.getElementById("guardarEdicion").addEventListener("click", guardarEditarFila);
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

/*------------------------CATEGORIAS-----------------------*/

function agregarCategoria() {
  var nuevaCategoria = document.getElementById("inputCategoriaNueva").value.trim();
  if (nuevaCategoria !== "") {
    var selectCategoriaAgregar = document.getElementById("selectCategoriaAgregar");
    var option = document.createElement("option");
    option.text = nuevaCategoria;
    option.value = nuevaCategoria;
    selectCategoriaAgregar.add(option);

    // Guardar la nueva categoría en el localStorage
    var categorias = JSON.parse(localStorage.getItem("categorias")) || [];
    categorias.push(nuevaCategoria);
    localStorage.setItem("categorias", JSON.stringify(categorias));
    
    cerrarModalAgregarCategoria(); // Cierra el modal después de agregar la categoría

    // Actualizar las categorías en el modal de editar
  } else {
    alert("Por favor, ingresa el nombre de la categoría.");
  }
}


function abrirModalCategorias() {
  var modal = document.getElementById("modalCategorias");
  modal.style.display = "block"; // Muestra el modal

  var categorias = JSON.parse(localStorage.getItem("categorias")) 

  var modalContent = document.getElementById("listaCategorias");

  // Limpiar el contenido previo del modal
  modalContent.innerHTML = "";

  // Crear tabla
  var table = document.createElement("table");

  // Iterar sobre las categorías
  categorias.forEach(function (categoria) {
      // Crear fila de la tabla
      var row = table.insertRow();

      // Celda para la categoría
      var cellCategoria = row.insertCell(0);
      cellCategoria.textContent = categoria;

      // Celda para el botón de eliminar
      var cellBotonEliminar = row.insertCell(1);
      var btnEliminar = document.createElement("button");
      btnEliminar.textContent = "-";
      btnEliminar.classList.add("borrarCategoria");
      btnEliminar.onclick = function() {
      eliminarCategoria(categoria);
      };
      cellBotonEliminar.appendChild(btnEliminar);
  });

  // Agregar la tabla al contenido del modal
  modalContent.appendChild(table);

}

// Función para cerrar el modal de categorías
function cerrarModalCategorias() {
  var modal = document.getElementById("modalCategorias");
  modal.style.display = "none"; // Oculta el modal
}

// Función para eliminar una categoría
function eliminarCategoria(categoria) {
  var confirmacion = confirm("¿Estás seguro de que deseas eliminar la categoría '" + categoria + "'?");
  if (confirmacion) {
    // Obtener las categorías del localStorage
    var categorias = JSON.parse(localStorage.getItem("categorias")) || [];

    // Eliminar la categoría del arreglo de categorías
    var indice = categorias.indexOf(categoria);
    if (indice !== -1) {
      categorias.splice(indice, 1);
      
      // Guardar las categorías actualizadas en el localStorage
      localStorage.setItem("categorias", JSON.stringify(categorias));

      // Actualizar la lista de categorías en el modal de categorías
      abrirModalCategorias();
    }
  }
}

function abrirModalAgregarCategoria() {
  var modalAgregarCategoria = document.getElementById("modalAgregarCategoria");
  modalAgregarCategoria.style.display = "block"; // Muestra el modal
}

function cerrarModalAgregarCategoria() {
  var modalAgregarCategoria = document.getElementById("modalAgregarCategoria");
  modalAgregarCategoria.style.display = "none"; // Oculta el modal
  document.getElementById("inputCategoriaNueva").value = ""; // Limpia el campo de entrada de texto
}

function obtenerCategorias() {
  var categorias = [];
  var selectCategoria = document.getElementById("selectCategoriaAgregar");
  for (var i = 0; i < selectCategoria.options.length; i++) {
    categorias.push(selectCategoria.options[i].value);
  }
  return categorias;
}

function cargarCategorias(categorias) {
  var selectCategoria = document.getElementById("selectCategoriaAgregar");
  categorias.forEach(function (categoria) {
    var option = document.createElement("option");
    option.text = categoria;
    option.value = categoria;
    selectCategoria.add(option);
  });
}




