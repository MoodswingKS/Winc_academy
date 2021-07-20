const optellenNummers = (...nummers) => {
    return nummers.reduce((acc, nummer) => { return acc + nummer})
}


console.log(optellenNummers(1,2,3,4,5,6)); // verwachte uitkomst: 21




const meerOptellen = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

const cijfers = [2, 8, 6];

console.log(meerOptellen(...cijfers))
