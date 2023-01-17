
//function

const arr1: number [] = [1,2,3,4,5];

const sum = arr1.reduce((addNumber:number,currentSum:number)=>{
    return addNumber+currentSum;
},0)

console.log(sum) //output 15



//for loop for the problem

// const arr1: number []= [30,100,300];

// let sum: number = 0;

// for(let value of arr1){
//     sum += value
// }

// console.log(sum); //output 430
