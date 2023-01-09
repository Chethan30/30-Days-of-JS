const panels = document.querySelectorAll(".panel");
console.log(panels);

function onToggle() {
  this.classList.toggle("open");
}

function onActive(event) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", onToggle));
panels.forEach((panel) => panel.addEventListener("transitionend", onActive));
