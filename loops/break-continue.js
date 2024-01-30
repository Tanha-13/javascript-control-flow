//break: terminates the code execution.
for(let i = 1; i <= 20; i++){
    if(i == 5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`Value of i is ${i}`);
}

// continue: ignores/skips that condition
for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}