//function
var arr1 = [1, 2, 3, 4, 5];
var sum = arr1.reduce(function (addNumber, currentSum) {
    return addNumber + currentSum;
}, 0);
console.log(sum);
//for loop for the problem
// const arr1: number []= [30,100,300];
// let sum: number = 0;
// for(let value of arr1){
//     sum += value
// }
// console.log(sum); //output 430
