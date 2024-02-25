
document.getElementById("startButton").addEventListener("click", function() {
    moveButton();
    document.getElementById("sw-text").style.animationPlayState = "running";
    document.getElementById("sw-audio").play(); // Reproducir el audio
    document.getElementById("sw-controls-box").style.display = "block";
  });

  document.getElementById("pauseButton").addEventListener("click", function() {
    var swText = document.getElementById("sw-text");
    var swTitle = document.getElementById("startButton");
    var swAudio = document.getElementById("sw-audio");
  
    if (swText.style.animationPlayState === "running") {
      swText.style.animationPlayState = "paused";
      swTitle.style.animationPlayState = "paused";
      swAudio.pause(); // Pausar el audio
    } else {
      swText.style.animationPlayState = "running";
      swTitle.style.animationPlayState = "running";
      swAudio.play(); // Reanudar el audio
    }
  });

  document.getElementById("volumeSlider").addEventListener("input", function() {
    var volume = parseFloat(this.value) / 100; // Convertir el valor del slider a un número entre 0 y 1
    document.getElementById("sw-audio").volume = volume;
  });
  
  function moveButton() {
    var button = document.getElementById("startButton");
    button.classList.add("backfade");
  
    // Después de 500 milisegundos, remover la clase "moved" para volver al estado inicial
    setTimeout(function() {
      button.classList.remove("backfade");
    }, 115000);
  }