function movieDiscountCalc(movieMems:boolean, senior:boolean, vetsOrRes:boolean) {
// Keyword Function to start a function -> Name function -> (Parameters) -> {}
    if(senior && vetsOrRes && movieMems) return 0.40; 
    //anyone who is all three options
    if((senior && movieMems) || (vetsOrRes && movieMems)) return 0.35;
    //anyone who is a senior and a member or a vet and a member
    if(senior || vetsOrRes) return 0.15; 
    //anyone who is a senior or a vet
    if(movieMems) return 0.10; 
    //anyone who is a movie member
    return 0;
    //none of the above return 0 discount
};

console.log("all three discounts work", movieDiscountCalc(true,true,true));
console.log("senior & movie member", movieDiscountCalc(true,true,false));
console.log("vets work", movieDiscountCalc(false,false,true));
console.log("movie members work", movieDiscountCalc(true,false,false));
console.log("No discount for you", movieDiscountCalc(false,false,false));
//console.log prints whatever is in the () in the terminal.
