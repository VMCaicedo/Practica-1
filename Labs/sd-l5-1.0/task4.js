
export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        const today = new Date();
        const currentYear = today.getFullYear();

        let age = currentYear - this.year;

        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();

        if (
            currentMonth < this.month ||
            (currentMonth === this.month && currentDay < this.day)
        ) {
            age--;
        }

        return `${this.name} is ${age} today!`;
    }
}