// Voters stats API
// This project uses the fetch API (that you're going to learn about later in this course) to get the stats of citizens in a city. To complete this project, you need to return the number of voters in the city selected by the user.

// Go to the browser tab and select Amsterdam or Berlin. This will get the age of citizens in the selected city (not real data) using an API. This data is received by a function called getVotersCount.

// Implement the getVotersCount function such that it returns the number of citizens that are allowed to vote (must be 18 years or older).
/*
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
    console.log(ages);
    const news = ages.filter(function(age){
        return age>=18;
    })
    return news.length
}
