// Sum odd numbers
// Complete the function sumOddNumbers such that it returns the sum of all the odd numbers from the numbers parameter it receives.
// The function should also work for negative numbers.
/*
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
    let sum=0;
    numbers.forEach(function(number){
        if(number%2!=0){
            sum+=number;
        }
    })
    return sum;
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2