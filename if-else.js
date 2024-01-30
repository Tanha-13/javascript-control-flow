// if 

//syntax
// if(true){}
// if(condition){
//     //statement
// }

const isUserLoggedIn = true;
if(isUserLoggedIn){
    // console.log('User Logged in');
}


// comparison: <, >, <=, >=, ==, !=, ===, !==
//info: = assignment operator, == equality check, === strict equality

// == vs ===
if(2 == '2'){
    // console.log('Executed');
}

if(2 === '2'){
    // console.log('Not executed');
}


// if - else
const temperature = 41;
if(temperature < 50){
    // console.log('less than 50');
}
else{
    // console.log('temperature is greater than 50');
}
// console.log('Execute');

//
const score = 200;
if (score > 100) {
    const power = 'fly';
    // var power = 'fly'; //? Identifier 'power' has already been declared.
    console.log(`User Power: ${power}`);
}
console.log(`User Power: ${power}`); // for const: It will not execute because const is block scoped. //? power is not defined.
// console.log(`User Power: ${power}`); // for var: It will execute because var is not block scoped. 
