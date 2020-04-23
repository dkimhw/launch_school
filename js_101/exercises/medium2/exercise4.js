

/*


Understand the problem

Input:
Year in integer

Output:
# of friday the 13ths given input year

Logic:
Need to calculate the day of week 
Fairly easy to see that there is one 13th every month given a year
Use prebuilt Date object to help calculate given month, day, and year --> gives back a day of week


*/

function fridayThe13ths(year) {
    let date13ths = [];
    let count = 0;

    for (let month = 0; month < 12; month++) {
        date13ths.push(new Date(year, month, 13));
    }

    date13ths.forEach(date => {
        console.log(date);
        if (date.getDay() === 5) {
            count += 1;
        }
    });

    return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2