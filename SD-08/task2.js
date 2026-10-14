export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

const player = new Player("Tara", 6);

console.log(player);