let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 11, 12];

function sumArray(a1, a2) {
    // create an array to store results from both array
    let a3 = [];

    // iterate through the length of the longest array
    for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
        // push the result of both values to new array
        a3.push((a1[i] || 0) + (a2[i] || 0));
    }
    // create a variable to store the sum value
    let result = 0;
    // iterate through the new array length
    for (let i = 0; i < a3.length; i++) {
        // add to result
        result += a3[i];
    }
    return result;
}