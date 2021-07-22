const buttonTest = document.getElementById("testclick");
const pokemonDiv = document.getElementById("pokemon");
const pokemonData = document.getElementById("pkmn-data");

buttonTest.addEventListener('click', e => {
    getData();
});

const getData = async () => {
    const randomNum = Math.floor(Math.random() * 151)
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${randomNum}/`
    console.log(randomNum)
    try {
        let res = await fetch(apiURL, { method: "GET" });
        let data = await res.json();
        console.log(data);
        pkmnFun(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}

const pkmnFun = (data) => {
    const spriteDiv = document.querySelector(".p-div");
    const nameDiv = document.querySelector(".pkmn-name");

    pokemonDiv.removeChild(spriteDiv);
    pokemonData.removeChild(nameDiv);

    let newP = document.createElement("div");
    let imgP = document.createElement("img");
    let nameP = document.createElement("div");
    let textName = document.createElement("h1");
    let numberP = document.createElement("p");
    let typeP = document.createElement("p");

    imgP.src = data.sprites.versions["generation-v"]["black-white"].front_default;
    numberP.innerHTML = '#' + data.id;
    textName.innerHTML = data.name.toUpperCase();
    if (data.types[1]) {
        typeP.innerHTML = `${data.types[0].type.name} & ${data.types[1].type.name}`;
    } else {
        typeP.innerHTML = `${data.types[0].type.name}`
    }

    newP.appendChild(imgP);
    newP.classList.add("p-div");
    pokemonDiv.appendChild(newP);
    nameP.appendChild(numberP);
    nameP.appendChild(textName);
    nameP.appendChild(typeP);
    nameP.classList.add("pkmn-name");
    numberP.classList.add("font-extra");

    pokemonData.appendChild(nameP);
};


