function Car(make, model, year, colour) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
}

const car = new Car(
    process.argv[2],
    process.argv[3],
    process.argv[4],
    process.argv[5]
);

console.log(car);