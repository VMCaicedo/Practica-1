// Type your code below this line!
function Journey(from, to) {
    this.start = from
    this.end = to
}


// Type your code above this line!

const travel = new Journey(process.argv[3], process.argv[4])

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")