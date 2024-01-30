const userEmail = 'nusrat@gmail.com';
// const userEmail = ''; // false
// const userEmail = []; // true

// info: it is assumed that the value of userEmail is true. 
if (userEmail) {
    console.log('Got user email');
}
else{
    console.log("Don't have user email");
}


// imp: TRUTHY Value - "0", 'false', " ", [], {}, function(){}
// imp: falsy Value - false, 0, -0, BigInt 0n, "", null, undefined, NaN


//validate an array
const arr =[];
if(arr.length === 0){
    console.log("Array is empty");
}
else{
    console.log("Code execution start");
}

// validate an object
const obj = {};
// if(Object.entries(obj).length === 0){
    if(Object.keys(obj).length === 0){
    console.log('Object is empty');
}
else{
    console.log('Code execution start');
}


/**
 * 01. false == 0 //true
 * 02. false == '' //true
 * 03. 0 == "" // true
 */

// Nullish Coalescing Operator (??) : null undefined

let value;
// value = 5 ?? 10;
// value = null ?? 10;
// value = undefined ?? 15;
value = null ?? 10 ?? 15;

// console.log(value);

// Ternary Operator
//syntax
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log('less than 80');