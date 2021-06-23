// const checkAge = (age) => {
//     // boolean
//     if (age >= 18) {
//         return true;
//     } return false;
// }

// const currentAge = (age) => {
//     // text
//     if (checkAge(age) === false) {
//      return "Hey Kiddo"
//     }
//     return "Hello there"
// }

// console.log(currentAge(28)) // Hello there
// console.log(currentAge(15)) // Hey Kiddo



// const addVAT = (basePrice, vatPercent) => {
//     return basePrice * vatPercent + basePrice;
// }

// // console.log(addVAT(300, 0.21))

// const calcVAT = (number, number2) => {

//     const newPrice = addVAT(number, number2);
//     return newPrice;

// }

// console.log(calcVAT(300, 0.21));

// get VAT amount
const getVAT = (price, vatPercent) => {
    const priceVAT = price*vatPercent
    return priceVAT
}

// add VAT to base
const addVAT = (price) => {
    const newPrice = price + getVAT(price)
    return newPrice
}

let price = 10;

// calculate amount
const calcVAT = (price) => {
    getVAT(price, 0.21);
    
    const finalPrice = addVAT(price)
    return finalPrice && newPrice

}

console.log(calcVAT(300, 0.21));
