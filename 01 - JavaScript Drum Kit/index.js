const musiq = (e) => {
  const keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio)
    //random key is pressed
    return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
};

window.onload = function () {
  Particles.init({
    selector: ".background",
    maxParticles: 50,
    color: "#39ff14",
    connectParticles: true,
  });
};
window.addEventListener("keydown", musiq);
