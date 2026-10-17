
function mostrarEnlaces() {
    const enlaces = document.getElementsByTagName("a");

    const cantidad = enlaces.length;
    const primero = enlaces[0].href;
    const ultimo = enlaces[enlaces.length - 1].href;

    alert(
        "Número de enlaces: " + cantidad +
        "\nPrimer enlace: " + primero +
        "\nÚltimo enlace: " + ultimo
    );
}
