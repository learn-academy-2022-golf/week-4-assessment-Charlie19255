// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { objectExpression } = require("@babel/types")
const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe('itemShuffler', ()=>{

    it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {

        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // example (can be a different order): 
        expectedOutput1= ["yellow", "blue", "pink", "green"]

        
        expect(itemShuffler(colors1)).toEqual(expect.arrayContaining(expectedOutput1))  

        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // example (can be a different order): 
        expectedOutput2=["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

        expect(itemShuffler(colors2)).toEqual(expect.arrayContaining(expectedOutput2)) 
    })
})

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

// create a function called itemShuffler
    // the parameter will be array
    // the function will get rid of the first index with a built in method called slice
    //the sliced out part will be a new variable
    //the new variable will be randomly shuffle the remainder of the array
//return a new array without the first index and a random order of item

// const itemShuffler = (array) =>{
//      let newArray=array.shift().sort(() => Math.random() - 0.5)
//         return newArray
// }
// TypeError: array.shift(...).sort is not a function
// changed out .shift for .slice since shift only gives first value

// const itemShuffler = (array) =>{
//  let newArray=array.slice(1,array.length)
//    newArray.sort(() => Math.random() - 0.5)
//     return newArray
// }
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

const itemShuffler = (array) =>{
    array.slice(1,array.length).sort(() => Math.random() - 0.5)
       return array
   }
//refractored for less lines of code

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.


describe('tallyCounter', ()=>{

    it('takes in an object that contains up votes and down votes and returns the end tally', () => {
    const votes1 = {upVotes: 13, downVotes: 2}
    expectedOutput3 = 11
    const votes2 = {upVotes: 2, downVotes: 33}
    expectedOutput4= -31
    expect(tallyCounter(votes1)).toEqual(expectedOutput3) 
    expect(tallyCounter(votes2)).toEqual(expectedOutput4) 

    })
})

// ReferenceError: tallyCounter is not defined
// b) Create the function that makes the test pass.

//create a function called tallyCounter
    //the parameter will be an object
    //the function will access the values of the object and subtract them from each other
//the function will return the resulting number

// const tallyCounter = (object) =>{
//     return Object.values(object[0])-Object.values(object[1])
// }
// TypeError: Cannot convert undefined or null to object
//         at Function.values (<anonymous>)


const tallyCounter = (object) =>{
    return Object.values(object)[0]-Object.values(object)[1]
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('duplicates', ()=>{

    it('takes in two arrays as arguments and returns one array with no duplicate values.', () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    expectedOutput5 = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(duplicates(dataArray1,dataArray2)).toEqual(expectedOutput5) 
 
})
})
// ReferenceError: duplicates is not defined


// b) Create the function that makes the test pass.
//create a function called duplicates
    //the function will take in two arrays
    //it will combine both arrays into one using the built in method concat.
    // a new variable will be made for the new array and another array to push the values into.
        //a for loop is made to go through the values of the combined array
            //if the index of the value in the combined array is -1 or doesn't exist then it will be pushed into the new array called noDuplicates
    //return the no duplicates array for answer

    // const duplicates = (array1,array2) => {
    //     let newArray = array1.concat(array2)
    //     let noDuplicates = []
    
    //         for(let i=0; i< newArray.length; i++) 
    //             if(noDuplicates.indexOf(i) === -1) 
    //                 noDuplicates.push(i)
    //             return(noDuplicates)
    // }
 // - Expected  -  7
//  + Received  + 10
//  Array [
// -   "array",
// -   "object",
// -   "number",
// -   "string",
// -   "Boolean",
// -   "null",
// -   "undefined",
// +   0,
// +   1,
// +   2,
// +   3,
// +   4,
// +   5,
// +   6,
// +   7,
// +   8,
// +   9,
//  ]   
// changed the for loop of index into value of array

const duplicates = (array1,array2) => {
    let newArray = array1.concat(array2)
    let noDuplicates = []

        for(let i of newArray) 
            if(noDuplicates.indexOf(i) === -1) 
                noDuplicates.push(i)
            return(noDuplicates)
}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total