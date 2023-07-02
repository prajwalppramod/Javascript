// Countries dropdown I
// Complete the function getDropdown such that it returns the following HTML that will fill the existing <select></select> element. The HTML that's returned should look like the following:
// It should start with: <option value="">Please select</option>
// Then, for every country you should have the <option> for that. For example, for the country "Netherlands", you should have the following <option value="netherlands">Netherlands</option>
// Notice how the value contains the country name in lower case. The remaining countries will need to show up as well following the same criteria.
// Don't forget to look at the end result in the browser tab!
// We will revisit this challenge later on and improve it once we learn about Array .map().
/*
 * @param {string[]} countries
 */
export function getDropdown(countries) {
    let html = `<option value="">Please select</option>`;
    countries.forEach(function(country) {
        html += `<option value="${country.toLowerCase()}">${country}</option>`;
    });
    return html;
}