export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.experience = 0;
    }

    info() {
        console.log(`${this.name} has reached Level ${this.level}!`);
    }

    levelUp() {
        this.level++;
    }

    gainExperience(points) {
        this.experience += points;

        if (this.experience >= 100) {
            this.levelUp();
            this.experience = 0;
        }
    }
}

const player = new Player("Tara", 6);

player.info();

player.gainExperience(50);
console.log(player);

player.gainExperience(50);
player.info();
console.log(player);