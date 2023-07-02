// Nutrition table II
// Complete the function renderTableRows such that it returns the following HTML:

// <tr>
//     <td>label here</td>
//     <td>value here</td>
// </tr>
// for every row that it receives in its rows parameter.

// The rows parameters looks like the following:

// [["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]]
// This is a nested array. Every inner array contains 2 items, the first one referring to the label that you should replace instead of label here and the second one referring to the value which you should replace instead of value here.
// Make sure to use console.log() every step of the way to visualize what you're working with.

/*
 * @param {array[][]} rows
 */
export function renderTableRows(rows) {
    console.log(rows);
    let html = ""
    rows.forEach(function(row){
       
        html+=`<tr> 
                <td> ${row[0]} </td> 
                <td> ${row[1]} </td>
            </tr> `
        
    })
    return html
}