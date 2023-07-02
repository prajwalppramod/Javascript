// Get next age II
// Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
// Note that the age is provided by the user in a text box (which you can try in the browser tab).
// However, when the text box is empty, the function returns NaN. We need to fix that and make it show 0 instead of NaN.

/**
 * @param {string} age
 */
export function getNextAge(age) {
    if(isNaN(age)){
        return 0;
    }
    else{
        return Number.parseInt(age)+1;
    }
    
}
