

// syntax
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}


for(const key in myObject){
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "java"];
for(const key in programming){
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map();
map.set('BD', "Bangladesh")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('BD', "Bangladesh")

// for(const [key,value] in map){
//     console.log(key,value);
// }
