// Part 1

const age = 28;

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("jij niet");    
}

// Part 2

const isName = "Sarah" || "Bram";

if (isName === "Sarah" || "Bram") {
    console.log("Gratis bier!");
} else {
    console.log("lekker betalen pik.");
}

// Part 3

const totalAmount = 50;

if (totalAmount >= 100) {
    console.log("Champagne voor jou!");
} else if (totalAmount < 100 && totalAmount >= 50) {
    console.log("Nachos!");
} else if (totalAmount < 50 && totalAmount >= 25) {
    console.log("Gratis bitterballen met mosterd!")
} else {
    console.log("Green freebies..")
}
