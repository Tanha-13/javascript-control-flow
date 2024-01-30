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