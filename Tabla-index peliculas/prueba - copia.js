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

  localStorage.setItem("filas", JSON.stringify(tableData)); // Cambié la clave a "filas"
  alert("Datos guardados en el almacenamiento local.");
}

function cargarLocalStorage() {
    var tableData = JSON.parse(localStorage.getItem("filas"));
    if (tableData) {
        var table = document.getElementById("miTabla");

        // Elimina todas las filas existentes para evitar duplicados
        while (table.rows.length > 1) {
            table.deleteRow(1); // Comenzamos desde la segunda fila
        }

        // Agrega las nuevas filas con los datos cargados desde el almacenamiento local
        tableData.forEach(function(rowData) {
            var rowNumber = table.rows.length;
            var newRow = table.insertRow();
            newRow.innerHTML = "<td>" + rowNumber + "</td>" +
                               "<td>" + rowData.pelicula + "</td>" +
                               "<td>" + rowData.categoria + "</td>" +
                               "<td>" + rowData.sinopsis + "</td>" +
                               "<td><input type='checkbox' onchange='guardarLocalStorage()'' " + (rowData.publicado ? " checked" : "") + "></td>" +
                               "<td>" +
                               "<button id='boton-eliminar' onclick='eliminarFila(this)'><img src='../assets/img/admin_/delete.png' alt='Eliminar'></button>" +
                               "<button onclick='marcarFavorito(this)'>" + "<img class='src-favorito' src=" + rowData.favorito + ">" + "</button>" +
                               "<button onclick='editarDato(this)'><img src='../assets/img/admin_/edit.png' alt='Editar'></button></td>";
        });
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
  var categoriaInput = document.getElementById("inputCategoria").value;
  var sinopsisInput = document.getElementById("inputSinopsis").value;

  if (peliculaInput && categoriaInput && sinopsisInput) {
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
        newCell.innerHTML = '<button id="boton-eliminar" onclick="eliminarFila(this)"><img src="../assets/img/admin_/delete.png" alt="Eliminar"></button>' +
                            '<button onclick="marcarFavorito(this)"><img class="src-favorito" src="../assets/img/admin_/favorite0.png" alt="Favorito"></button>' +
                            '<button onclick="editarDato(this)"><img src="../assets/img/admin_/edit.png" alt="editar"></button>';
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

    guardarLocalStorage();
    crearFilaConTextosInputs()
    cerrarModalAgregar(); // Cierra el modal de agregar fila

    

  } else {
    alert("Por favor, completa todos los campos.");
  }

}

function eliminarFila(button) {
  var row = button.parentNode.parentNode;
  var index = row.rowIndex - 1; // Restamos 1 porque la fila de encabezado no cuenta
  row.parentNode.removeChild(row);

  guardarLocalStorage();
  eliminarFilaPelicula(index);

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

function eliminarFilaPelicula(index) {
  // Obtener la lista de filas guardadas del localStorage
  var filasGuardadas = JSON.parse(localStorage.getItem("tablaDatos")) || [];
  
  // Verificar si el índice está dentro de los límites de la lista
  if (index >= 0 && index < filasGuardadas.length) {
    // Eliminar la fila del arreglo
    filasGuardadas.splice(index, 1);
    
    // Guardar la lista actualizada de filas en el localStorage
    localStorage.setItem("filas", JSON.stringify(filasGuardadas));
    
    // Disparar un evento para notificar la actualización del localStorage
    window.dispatchEvent(new Event('actualizarLocalStorage'));
  }
}

function guardarFilaEnLocalStorage(texto1, texto2) {
  // Crear un objeto que represente la fila
  var filaData = {
    texto1: texto1,
    texto2: texto2
  };
  
  // Obtener la lista de filas creadas del localStorage
  var filasGuardadas = JSON.parse(localStorage.getItem("filas")) || [];
  
  // Agregar la nueva fila a la lista de filas
  filasGuardadas.push(filaData);
  
  // Guardar la lista de filas en el localStorage
  localStorage.setItem("filas", JSON.stringify(filasGuardadas));
  
  // Disparar un evento para notificar la actualización del localStorage
  window.dispatchEvent(new Event('actualizarLocalStorage'));
}

function crearFilaConTextosInputs() {
  // Obtener los valores de los inputs
  var texto1 = document.getElementById("inputPelicula").value;
  var texto2 = document.getElementById("inputSinopsis").value;
  
  // Guardar los textos en el localStorage
  guardarFilaEnLocalStorage(texto1, texto2);
}
