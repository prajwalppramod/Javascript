// Classroom Project I
// This is a classroom project! You can enter grades in the browser tab and add them to the app, which will show you various statistics about the classroom. For example, you will see the average grade, all the failing grades, etc.

// Each function has a comment describing what it should return, but you can also find them below:

// getNumberOfGrades should return the number of grades.
// getSumGrades should return the sum of all the grades.
// getAverageValue should return the average value of all grades (sum of all grades divided by the total number of grades).
// getPassingGrades should return all passing grades (10 and above).
// getFailingGrades should return all failing grades (9 and below).
// getRaisedGrades should return all the grades raised by 1 (grades should not exceed 20).
/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    // TODO: return the number of grades
    return grades.length;
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
    // TODO: return the sum of all the grades
    let sum=0;
    grades.forEach(function(grade){
        sum+=Number.parseInt(grade);
    })
    return sum;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    let sum=0;
    grades.forEach(function(grade){
        sum+=Number.parseInt(grade);
    })
    return sum/grades.length;
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    // TODO: return all passing grades (10 and above)
    let pass = grades.filter(function(grade){
        return grade>=10
    })
    return pass;
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    // TODO: return all failing grades (9 and below)
    let fail = grades.filter(function(grade){
        return grade<=9
    })
    return fail;
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    // TODO: return all the grades raised by 1 (no grade should exceed 20)
    return grades.map(function(grade){
        if(grade + 1>20){
            return 20;
        }
        return grade+1;
    })
}
