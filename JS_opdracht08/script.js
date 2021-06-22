// function biggerThan (number) {
//     if (number > 100) {
//         return true
//     } return false
// }

// console.log(biggerThan(100));
// console.log(biggerThan(200));

// Bouncer

function bouncerBrenda (maxPeople, currentPeople, agePeople) {
    if (agePeople < 18) {
        return "this is a club for adults"
    } else if ((maxPeople >= currentPeople) && agePeople >= 18) {
        return "come in"
    } return "it's too busy now, come back later"
}

let max = 50;
let current = 25;
let age = 18;

console.log(bouncerBrenda(max, current, age))
console.log(bouncerBrenda(max, current, 15))
console.log(bouncerBrenda(max, 60, age))

// this is a function that produces something

function sumAverage (num1, num2, num3, num4, num5) {
    const numTotal = num1+num2+num3+num4+num5
    return Math.round(numTotal/5)
}

console.log(sumAverage(5, 8, 20, 1, 6));
console.log(sumAverage(30, 80, 0, 1, 6));
console.log(sumAverage(2, 2, 2, 2, 2));