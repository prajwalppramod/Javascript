// Add calculator to apps
// Complete the function useCalculator such that it adds the "Calculator" string to the apps array it receives. Then, return the apps array.
// There is a small trick in this challenge to make sure you understand an important concept. Spend some time trying to figure it out, then check the hints if you get stuck.
/*
 * @param {array} apps
 */
function useCalculator(apps) {
    apps.push("Calculator");
    return apps;
}

// Sample usage - do not modify
console.log(useCalculator(["Clock", "Twitter"])); // ["Clock", "Twitter", "Calculator"]
console.log(useCalculator(["Weather"])); // ["Weather", "Calculator"]