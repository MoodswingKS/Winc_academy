let colors = ["yellow", "blue", "red", "orange"];
let i = 0;


while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(element => console.log(element));

// 3 2 1
// Persoonlijk vind ik de for loop het meest duidelijk. 
// JSON list met properties, class op het object en dan is het wel te doen ;)
