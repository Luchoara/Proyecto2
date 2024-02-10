// Recuperar datos almacenados en localStorage al cargar la página
window.onload = function () {
    cargarDatos();
  };
  
  function cargarDatos() {
    // Obtener los datos almacenados en localStorage
    var datos = JSON.parse(localStorage.getItem('filas')) || [];
  
    // Obtener la referencia de la tabla
    var tabla = document.getElementById('tablaPeliculas');
  
    // Recorrer los datos y agregar filas a la tabla
    datos.forEach(function (fila) {
      agregarFilaATabla(tabla, fila);
    });
  }
  
  function guardarDatos(fila) {
    // Obtener datos almacenados en localStorage
    var datos = JSON.parse(localStorage.getItem('filas')) || [];
  
    // Agregar nueva fila a los datos
    datos.push(fila);
  
    // Almacenar datos actualizados en localStorage
    localStorage.setItem('filas', JSON.stringify(datos));
  }
  
  function agregarFilaATabla(tabla, fila) {
    // Agregar una fila a la tabla
    var nuevaFila = tabla.insertRow();
  
    // Agregar celdas a la fila
    var celda0 = nuevaFila.insertCell(0);
    var celda1 = nuevaFila.insertCell(1);
    var celda2 = nuevaFila.insertCell(2);
    var celda3 = nuevaFila.insertCell(3);
    var celda4 = nuevaFila.insertCell(4);
    var celdaBotones = nuevaFila.insertCell(5);

    // Asignar contenido a las celdas
    celda1.innerHTML = fila.columna1;
    celda2.innerHTML = fila.columna2;
    celda3.innerHTML = fila.columna3;

  
    // Agregar botones a la celda de acciones
    var botonEliminar = document.createElement('button');
    var botonFavorito = document.createElement('button');
    var botonEditar = document.createElement('button');

    // Crear un checkbox y configurarlo
    var checkboxColumna4 = document.createElement('input');
    checkboxColumna4.type = 'checkbox';
    checkboxColumna4.checked = fila.columna4;

    // Agregar el checkbox a la celda
    celda4.appendChild(checkboxColumna4);
    
    // Configurar el botón de eliminar
    var imagenEliminar = document.createElement('img');
    imagenEliminar.src = '../assets/img/admin_/delete.png'
    imagenEliminar.alt = 'Eliminar';
    botonEliminar.appendChild(imagenEliminar);
    botonEliminar.classList.add("boton-tabla")
    botonEliminar.onclick = function () {
      eliminarFila(tabla, nuevaFila, fila);
    };
  
    // Configurar el botón favoritos
    var imagenFavorito = document.createElement('img');
    imagenFavorito.src = '../assets/img/admin_/favorite0.png';
    imagenFavorito.alt = 'Favorito';
    botonFavorito.appendChild(imagenFavorito);
    botonFavorito.classList.add("boton-tabla")
    botonFavorito.onclick = function () {
      cambiarImagenBoton(botonFavorito);
    };
  
    // Configurar el botón editar
    var imagenEditar = document.createElement('img');
    imagenEditar.src = '../assets/img/admin_/edit.png';
    imagenEditar.alt = 'Editar';
    botonEditar.appendChild(imagenEditar);
    botonEditar.classList.add("boton-tabla")
    botonEditar.onclick = function () {
      cargarDatosEnModalEditar(fila);
    };
  
    // Agregar botones a la celda de acciones
    celdaBotones.appendChild(botonEliminar);
    celdaBotones.appendChild(botonFavorito);
    celdaBotones.appendChild(botonEditar);

    // Agregar evento de clic al botón de editar
    botonEditar.addEventListener('click', function() {
      cargarDatosEnModalEditar(fila);
  });
  }
  
  function cambiarImagenBoton(boton) {
    // cambiar entre dos imágenes al hacer clic en el botón
    var imagenActual = boton.firstChild;
    if (imagenActual.src.endsWith('admin_/favorite0.png')) {
      imagenActual.src = '../assets/img/admin_/favorite1.png';
    } else {
      imagenActual.src = '../assets/img/admin_/favorite0.png';
    }
  }

  
  function agregarFila() {
    // Obtener valores de los campos de texto
    var valorColumna1 = document.getElementById('inputColumna1').value;
    var valorColumna2 = document.getElementById('inputColumna2').value;
    var valorColumna3 = document.getElementById('inputColumna3').value;
  
    // Verificar que ambos campos no estén vacíos antes de agregar la fila
    if (valorColumna1.trim() === '' || valorColumna2.trim() === '' || valorColumna3.trim() === '') {
        alert('Todos los campos deben tener valores.');
        return;
    }
  
    // Obtener la referencia de la tabla
    var tabla = document.getElementById('tablaPeliculas');
  
    // Guardar datos de la fila en localStorage
    var nuevaFila = { columna1: valorColumna1, columna2: valorColumna2, columna3: valorColumna3 };
    guardarDatos(nuevaFila);
  
    // Agregar la fila a la tabla
    agregarFilaATabla(tabla, nuevaFila);
  
    // Limpiar campos de texto después de agregar la fila
    document.getElementById('inputColumna1').value = '';
    document.getElementById('inputColumna2').value = '';
    document.getElementById('inputColumna3').value = '';
  }
  
  function eliminarFila(tabla, fila, datosFila) {
    // Eliminar la fila de la tabla
    tabla.deleteRow(fila.rowIndex);
  
    // Eliminar la fila de los datos almacenados
    var datos = JSON.parse(localStorage.getItem('filas')) || [];
    var indice = datos.findIndex(function (elemento) {
      return elemento.columna1 === datosFila.columna1 && elemento.columna2 === datosFila.columna2;
    });
  
    if (indice !== -1) {
      datos.splice(indice, 1);
      localStorage.setItem('filas', JSON.stringify(datos));
    }
  }

  function cargarDatosEnModalEditar(fila) {
    document.getElementById('inputEditarColumna1').value = fila.columna1;
    document.getElementById('inputEditarColumna2').value = fila.columna2;
    document.getElementById('inputEditarColumna3').value = fila.columna3;
    abrirModalEditar();
  }
  

  function abrirModalEditar() {
    document.getElementById('modalEditar').style.display = 'block';
  }
  
  function cerrarModalEditar() {
    document.getElementById('modalEditar').style.display = 'none';
  }
  
  function guardarEdicion() {
    // Obtener los valores editados desde el modal
    var nuevoValorColumna1 = document.getElementById('inputEditarColumna1').value;
    var nuevoValorColumna2 = document.getElementById('inputEditarColumna2').value;
    var nuevoValorColumna3 = document.getElementById('inputEditarColumna3').value;
  
    // Actualizar los datos en la tabla y en el almacenamiento local
    // (Puedes implementar esta función según cómo estés almacenando y actualizando los datos en tu aplicación)
    
    // Cerrar el modal después de guardar la edición
    cerrarModalEditar();
  }
  
  