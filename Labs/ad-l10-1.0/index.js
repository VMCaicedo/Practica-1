const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}


async function fetchColorsList() {
    try {
        const respuesta = await fetch("https://reqres.in/api/unknown");

        if (!respuesta.ok) {
            throw new Error("No se pudieron obtener los colores");
        }

        const resultado = await respuesta.json();
        const colores = resultado.data;

        localStorage.setItem("colores", JSON.stringify(colores));

        itemsContainer.innerHTML = "";

        colores.forEach(function (color) {
            addItem(color);
        });
    } catch (error) {
        console.error("Error al cargar los colores:", error);
    }
}



function loadColorsFromStorage() {
    const coloresGuardados = localStorage.getItem("colores");

    if (coloresGuardados !== null) {
        const colores = JSON.parse(coloresGuardados);

        itemsContainer.innerHTML = "";

        colores.forEach(function (color) {
            addItem(color);
        });
    }
}


if (localStorage.getItem("colores") !== null) {
    loadColorsFromStorage();
} else {
    fetchColorsList();
}

document.querySelector("#borrar-colores").addEventListener("click", function () {
    itemsContainer.innerHTML = "";
    localStorage.removeItem("colores");
});

document.querySelector("#cargar-colores").addEventListener("click", function () {
    fetchColorsList();
});
