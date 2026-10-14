// Refer to Task 5 in your Instructions to complete this task

let cantidad = Number(prompt("¿Cuántas líneas quieres generar?"));

for (let i = 1; i <= cantidad; i++) {
    let resultado = "";

    if (i % 3 === 0) {
        resultado += "Fizz";
    }

    if (i % 5 === 0) {
        resultado += "Buzz";
    }

    if (i % 7 === 0) {
        resultado += "Woof";
    }

    if (resultado === "") {
        resultado = i;
    }

    console.log(resultado);
}