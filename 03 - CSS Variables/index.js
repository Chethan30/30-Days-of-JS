// const spacing = document.querySelector("#spacing");
// const base = document.querySelector("#base");
// const blur = document.querySelector("#blur");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  console.log(suffix);
  console.log(this.name);
  console.log(this.value);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

const inputs = document.querySelectorAll(".controls input");
inputs?.forEach((input) => input.addEventListener("change", handleUpdate));
inputs?.forEach((input) => input.addEventListener("mousemove", handleUpdate));
