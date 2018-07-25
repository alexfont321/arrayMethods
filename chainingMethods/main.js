const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers);


console.log(integers.reverse().filter((number) => number < 19).map(function (n) {
    let emptyNumber = (n * 1.5) - 1;
    return emptyNumber;
}).reduce(function (current, next) {
    return current + next;
}));

// console.log(singleLine);




// let firstTwoSteps = integers.reverse().filter((number) => number < 19);


// console.log(firstTwoSteps);

// const afterMap = firstTwoSteps.map(function (n) {
//     let emptyNumber = (n * 1.5) - 1;
//     return emptyNumber;
// });

// console.log(afterMap)

// const afterReduce = afterMap.reduce(function (current, next) {
//     return current + next;
// });

// console.log(afterReduce);
// console.log(integers);



