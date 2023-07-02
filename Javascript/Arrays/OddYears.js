/*
 * @param {number[]} years
 */
function getOddYears(years) {
    let oddyears = years.filter(function(year){
        if(year%2!=0){
            return year;
        }
    })
    return oddyears
}

// Sample usage - do not modify
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
