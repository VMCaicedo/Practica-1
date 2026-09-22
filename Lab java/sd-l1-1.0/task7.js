// Refer to Task 7 in your Instructions to complete this task
let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang",
    "Luffy",
    "Zoro",
    "Nami",
    "Chopper",
    "Sanji",
    "jinbe",
    "Usopp",
    "Nico",
    "Franky",
    "Ace",
    "Gol D",
    "Boa",
    "Sabo",
    "Brook",
    "Grap",
    "Kizaru",
    "Aokiji",
    "Buggy",
    "Vivi",
    "Smoker"
];

let indice = 0;
for (let i = 1; i <= 105; i++) {
    let esPrimo = true;

    if (i < 2) {
        esPrimo = false;
    }

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo && i % 2 !== 0) {
    console.log(buzzWords[indice]);
    indice++;

    } else {
        console.log(i);
    }
}