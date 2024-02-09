document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("sw-text").style.animationPlayState = "running";
    document.getElementById("sw-audio").play(); // Reproducir el audio
    document.getElementById("startButton").style.display = "none";
    document.getElementById("sw-controls-box").style.display = "block";
  });

  document.getElementById("pauseButton").addEventListener("click", function() {
    var swText = document.getElementById("sw-text");
    var swAudio = document.getElementById("sw-audio");
  
    if (swText.style.animationPlayState === "running") {
      swText.style.animationPlayState = "paused";
      swAudio.pause(); // Pausar el audio
    } else {
      swText.style.animationPlayState = "running";
      swAudio.play(); // Reanudar el audio
    }
  });

  document.getElementById("volumeSlider").addEventListener("input", function() {
    var volume = parseFloat(this.value) / 100; // Convertir el valor del slider a un número entre 0 y 1
    document.getElementById("sw-audio").volume = volume;
  });
  