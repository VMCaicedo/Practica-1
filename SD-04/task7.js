const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
];


// Agregar un número a la primera fila
arr[0].push(99);

// Agregar una nueva fila
arr.push([30,31,32]);

// Eliminar un número de la segunda fila
arr[1].splice(5, 1);

// Invertir solamente la tercera fila
arr[2].reverse();

console.log(arr);
