/*
 * @param {number[]} years
 * @param {number} searchYear
 */
function getYear(years, searchYear) {
    return years.find(function(year){
        return year===searchYear;
    })
}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined
