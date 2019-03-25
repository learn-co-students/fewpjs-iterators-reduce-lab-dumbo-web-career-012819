// Code your solution here
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let arr = [4, 5, 3, 4, 4, 6, 5]

const totalBatteries = arr.reduce(reducer)
