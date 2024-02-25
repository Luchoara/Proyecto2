window.onload = function() {
  const login = document.getElementById('login');
  const logout = document.getElementById('logout');
  const registrar = document.getElementById('registrar');
  const dropdown = document.getElementById('dropdown');
  const adminButton = document.getElementById('adminButton');
  alert('sesion iniciada true');
  // Verificar si la sesión está iniciada
  const loggedIn = localStorage.getItem('loggedIn') === 'true';

  // Si la sesión está iniciada
  if (loggedIn) {
    alert('sesion iniciada true');
      login.style.display = 'none'; // Ocultar el botón de iniciar sesión
      registrar.style.display = 'none'; // Ocultar el botón de registrar
      dropdown.style.display = 'block'; // Mostrar el dropdown
      logout.style.display = 'block'; // Mostrar el botón de cerrar sesión
  } else {
    alert('sesion iniciada false');
      login.style.display = 'block'; // Mostrar el botón de iniciar sesión
      registrar.style.display = 'block'; // Mostrar el botón de registrar
      dropdown.style.display = 'none'; // Ocultar el dropdown
      logout.style.display = 'none'; // Ocultar el botón de cerrar sesión
  }

  // Verificar si el usuario es administrador
  const isAdmin = localStorage.getItem('admin') === 'true';

  // Si el usuario es administrador
  if (isAdmin) {
    alert('administrador true');
      adminButton.style.display = 'block'; // Mostrar el botón de administrador
  } else {
    alert('administrador false');
      adminButton.style.display = 'none'; // Ocultar el botón de administrador
  }
}

