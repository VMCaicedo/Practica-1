document.querySelector("h1").textContent = "Adiós";
document.querySelectorAll("h1")[1].style.color = "orange";
document.querySelector("#clickMe").addEventListener("click", function() {
    this.style.color = "brown";
});