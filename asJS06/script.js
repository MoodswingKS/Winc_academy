// Subopdracht: steenbokvrouwen - 3 punten
// laat voor- en achternaam en hun foto zien
// sorteer de lijst op voornaam
// elke persoon op die lijst moet
// vrouw zijn
// ouder zijn dan 30 (1990 of ouder)
// een steenbok zijn (jarig van 22 december t/m 19 januari)
// dmy: 2212/1990 - 1901/1991 mdy: 12221990 - 0119/1991
const totalList = document.querySelector("ul");

const bokData = randomPersonData.filter(bok => {
    if (bok.gender === "female" && bok.age > 30) {
        let steenBokDate = parseInt(bok.birthday.mdy.replace("/", ""));
        if (steenBokDate > 1221 && steenBokDate < 1232 || steenBokDate < 119 && steenBokDate > 0) {
            console.log(bok);
            return bok;
        }
    }
});

const steenbokData = bokData.sort((a, b) => a.name.localeCompare(b.name));
console.log(steenbokData)

const testData = [{ name: "Beta" }, { name: "Алла" }, { name: "Omega" }, { name: "Charlie" }]
testData.sort((a, b) => a.name.localeCompare(b.name));
console.log(testData)

steenbokData.forEach(bok => {
    let newBok = document.createElement("li");
    newBok.innerHTML = `<p>${bok.name} ${bok.surname}</p>`;

    let imgBok = document.createElement("img");
    imgBok.src = bok.photo;

    newBok.appendChild(imgBok);
    totalList.appendChild(newBok);
})



// Maak een lijst van alle landen, gesorteerd op naam van het land.
const countryList = randomPersonData.map(c => {
    return c.region
}).sort((a, b) => a.localeCompare(b));
console.log(countryList)
