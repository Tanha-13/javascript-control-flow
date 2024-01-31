// for of
//syntax
// for (const iterator of object) {
    
// }

// array of object
// [{}, {}, {}]



const array = [1,2,3,4,5,6];

for (const i of array) {
    // console.log(i);
}

const greetings = 'Hello World';
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
}
//ignoring space
for (const greet of greetings) {
    if(greet === " "){
        continue;
    }
    // console.log(`Each character is ${greet}`);
}

