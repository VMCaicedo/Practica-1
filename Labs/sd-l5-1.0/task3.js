export function ageCalculator(year, month, day) {
    const today = new Date();
    const currentYear = today.getFullYear();
    let age = currentYear - year;

    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    return age;
}