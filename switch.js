// syntax
// switch(key){
//     case value:

//         break;
//     default:
//         break;
// }

//info: if break is not used, after matching the key, the code is run and executed except default.
const day = 3;
switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wednesday");
    break;
  case 6:
    console.log("Thursday");
    break;
  case 7:
    console.log("Friday");
    break;

  default:
    console.log("Please enter a valid number");
}

const month = 'march';
switch(month){
    case 'jan':
        console.log('January');
        break;
    case 'feb':
        console.log('February');
        break;
    case 'march':
        console.log('March');
        break;
    case 'april':
        console.log('April');
        break;
    case 'may':
        console.log('May');
        break;
    case 'june':
        console.log('June');
        break;
    case 'july':
        console.log('July');
        break;
    case 'aug':
        console.log('August');
        break;
    case 'sep':
        console.log('September');
        break;
    case 'oct':
        console.log('October');
        break;
    case 'nov':
        console.log('November');
        break;
    case 'dec':
        console.log('December');
        break;
    default:
        console.log('Invalid Input');
        
}
