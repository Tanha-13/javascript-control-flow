// for
//syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// first step: initialization
// second step: condition check. If true, code execution.
// third step: increment
// fourth step: condition check. If true, code execution.

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best number");
    }
    //console.log(element);
}
// console.log(element); //? ReferenceError:element is not defined


//

for(let i = 0; i <= 10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j = 0; j <= 5; j++){
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        
    }
}

// Table
for(let i = 1; i<= 5; i++){
    // console.log(`Table of ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}


// 
const myArray = ["flash", "thor", "batman", "spiderman"];
console.log(myArray.length);
for(let i = 0; i<myArray.length; i++){
    const element = myArray[i];
    console.log(element);
}