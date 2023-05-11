function addTen(input: number): number {
    console.log(input);
    return input + 10;
};

var firstNum = 40;
var secondNum = addTen(firstNum);
var thirdNum = addTen(50);

console.log(firstNum, secondNum);
console.log(`First Number: ${firstNum}, Second Number: ${secondNum}`);
console.log(thirdNum);