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

// scope in if-else
const score = 200;
if (score > 100) {
    const power = 'fly';
    // var power = 'fly'; //? Identifier 'power' has already been declared.
    // console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); // for const: It will not execute because const and let are block scoped. //? power is not defined.
// console.log(`User Power: ${power}`); // for var: It will execute because var is not block scoped. 


//implicit scope 
const balance = 1000;
//? unreadable and immature code
// if (balance  > 500) console.log('test'), console.log('test 2');

// nested if-else

if(balance < 500){
    // console.log(`${balance} is less than 500`);
}
else if(balance < 750){
    // console.log(`${balance} less than 750`);
}
else if(balance < 900){
    // console.log(`${balance} less than 900`);
}
else{
    // console.log(`${balance} less than 1200`);
}


// topic: AND(&&)
const UserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(UserLoggedIn && debitCard && 2==2){
    console.log('Allow to buy courses');
}

// topic: OR(||)
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log('User Logged in');    
}