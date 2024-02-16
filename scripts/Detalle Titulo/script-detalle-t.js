window.addEventListener('scroll', function() {
    var section = document.querySelector('.fondo-DP');
    var scrollPosition = window.scrollY;
    // Ajusta el factor para oscurecer más rápido
    var scrollFactor = 2; // Puedes ajustar este valor según tu preferencia
    var opacity = scrollFactor * scrollPosition / window.innerHeight; // Calcula la opacidad en función de la posición de desplazamiento
  
    // Limita la opacidad entre 0 y el valor máximo especificado
    var maxOpacity = 0.759;
    opacity = Math.min(maxOpacity, Math.max(0, opacity));
  
    // Aplica la opacidad al gradiente radial
    section.style.backgroundImage = 'radial-gradient(farthest-side at 73% 21%, rgba(0, 0, 0, ' + opacity + '), rgb(26, 29, 41))';
  });
  