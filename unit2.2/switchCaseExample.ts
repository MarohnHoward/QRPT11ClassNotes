function getSpecials(weekday:string): string {
    switch(weekday) {
    //keyword switch to start -> (Function parameters)-> return value
        case "Monday": 
        return "Cup of Mud Monday's Every Cup has 4 extra gummy worms";
        break;
        case "Tuesday": 
        return "Taco Tuesday 50% off all Tacos";
        break; 
        case "Wednesday": 
        return "Waffle Wednesday 25% off all Waffles"; 
        break; 
        case "Thursday": 
        return "Boneless Thursday 50 % off all boneless wings";
        break; 
        case "Friday": 
        return "Fajita Friday 30% off all Fajitas";
        break; 
        default: 
        return "Enjoy your weekend with 30% off chips and queso!";
    } 
}

console.log(getSpecials('Monday'));
console.log(getSpecials('Tuesday'));
console.log(getSpecials('Wednesday'));
console.log(getSpecials('Thursday'));
console.log(getSpecials('Friday'));
console.log(getSpecials('Saturday'));
console.log(getSpecials('Sunday'));

