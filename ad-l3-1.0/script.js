function randomColor() {
    let colors = ["green", "blue", "red"];
    let random = Math.floor(Math.random() * colors.length);
    let color = colors[random];

    return color;
}

let color = randomColor();

let h5 = document.querySelectorAll("h5");

h5.forEach(function(element) {
    element.addEventListener("click", function() {
        color = randomColor();
        element.style.color = color;
    });
});