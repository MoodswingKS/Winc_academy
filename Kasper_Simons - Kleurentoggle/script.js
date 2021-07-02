// Als gebruiker wil ik op een radiobutton kunnen klikken van de kleur van mijn keuze, waardoor ik aan de radiobutton zie wat de huidige kleur is die "actief" is op dit moment.
// Als gebruiker wil ik in plaats van klikken met mijn muis over de hamburger kunnen hoveren, waardoor het menu verschijnt. Wanneer ik als gebruiker met mijn muis weer weg ga bij de hamburger verdwijnt het menu weer.
// Als gebruiker wil ik het menu langzaam in beeld zien schuiven en weer uit beeld zien schuiven, in plaats van plotseling verschijnen (doe dit met CSS transitions). (de richting maakt niet uit!)

let burger = document.querySelector('.burger');
let totalButtons = document.getElementById('button-total');
let buttonItems = totalButtons.querySelectorAll('.colormenu-item');
let backgroundColor = document.querySelector('body');
let textDiv = false;

for (let item = 0; item < buttonItems.length; item++) {
    buttonItems[item].addEventListener('click', function (e) {
        e.preventDefault();
        toggleBurger();
        chooseButton(item);
    })
}

document.addEventListener('keydown', function() {
    let eventKey = event.keyCode;
    console.log(eventKey);
    if (eventKey === 49) {
        backgroundColor.style.backgroundColor = 'white';
    } else if (eventKey === 50) {
        backgroundColor.style.backgroundColor = 'blue';
    } else if (eventKey === 51) {
        backgroundColor.style.backgroundColor = 'green';
    } else if (eventKey === 52) {
        backgroundColor.style.backgroundColor = 'red';
    } else if (eventKey === 53) {
        backgroundColor.style.backgroundColor = 'orange';
    } else if (eventKey === 54) {
        backgroundColor.style.backgroundColor = 'grey';
    }
});

const chooseButton = (item) => {
    let nameDiv = document.createElement('div');
    nameDiv.id = 'colorname';
    
    if (textDiv) {
        let oldDiv = document.querySelector('#colorname');
        backgroundColor.removeChild(oldDiv);
    }

    if (item === 0) {
        nameDiv.innerHTML = `<p>WIT</p>`;
        backgroundColor.style.backgroundColor = 'white';
    } else if (item === 1) {
        nameDiv.innerHTML = `<p>BLAUW</p>`;
        backgroundColor.style.backgroundColor = 'blue';
    } else if (item === 2) {
        nameDiv.innerHTML = `<p>GROEN</p>`;
        backgroundColor.style.backgroundColor = 'green';
    } else if (item === 3) {
        nameDiv.innerHTML = `<p>ROOD</p>`;
        backgroundColor.style.backgroundColor = 'red';
    } else if (item === 4) {
        nameDiv.innerHTML = `<p>ORANJE</p>`;
        backgroundColor.style.backgroundColor = 'orange';
    } else if (item === 5) {
        nameDiv.innerHTML = `<p>GRIJS</p>`;
        backgroundColor.style.backgroundColor = 'grey';
    }
    backgroundColor.appendChild(nameDiv);
    return textDiv = true;
}

const toggleBurger = () => {
    burger.classList.toggle('active-menu');
}

document.getElementById('menu-animation').addEventListener('click', function (e) {
    e.preventDefault();
    toggleBurger();
})

// document.getElementById('menu-animation').addEventListener('mouseenter', function (e) {
//     if (!burger.classList.contains('active-menu')) {
//         burger.classList.add('active-menu');
//     } 
// })
// document.getElementById('menu-animation').addEventListener('mouseleave', function (e) {
//     if (burger.classList.contains('active-menu')) {
//         burger.classList.remove('active-menu');
//     }
// })