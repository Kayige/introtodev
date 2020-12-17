//Create a function to find all numbers in a array containing variables of multiple types

/**
 * Problem statement - Create a function to find all numbers in a array containing variables of multiple types
 * Function - find all numbers
 * Logic - all numbers from all the values present in the array
 * Cases
 * 1. If you encounter a number then store it
 * 2. FOr everything else do not bother
 * 
 * Input - an array -> [1,false, 'vaibhav', 2, 3, true, 'vashishtha']
 *  variables (values)
 *  of multiple types (string, boolean, numnber)
 * Output -> [1, 2, 3]
 */

/**
 * Step 1 - write basic js code
 * Step 2 - use array functions 
 * Step 3 - reduce the amount of code 
 */


var array1 = [1, 2, 3, 4, true, 'vaibhav'];
var array2 = [];

function filterNum(array) {
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            array2.push(array[i]);
        }
    }
}

filterNum(array1);
console.log(array2);