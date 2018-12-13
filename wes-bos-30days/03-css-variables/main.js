if (document.readyState === "loading") {  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
} else {  // `DOMContentLoaded` has already fired
  doSomething();
}


function doSomething() {
  const inputs = document.querySelectorAll('.stacker input');
  inputs.forEach((input) => {
    input.addEventListener('change', handleUpdate)
    input.addEventListener('mousemove', handleUpdate)
  })
}


function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(this.name)
  console.log(this.value)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
