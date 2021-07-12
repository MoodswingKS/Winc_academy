const totalButtons = document.querySelector(".big-five-list");
const buttonItems = totalButtons.querySelectorAll(".big-five-list-item");
const animalItems = document.querySelectorAll(".spotted-animal-list");

buttonItems.forEach(button => button.addEventListener("click", e => {
  console.log('clicked button: ', e.target);
  let animalItem = e.target.textContent;
  console.log(animalItem);
  addAnimal(animalItem);
}));

const addAnimal = (animalItem) => { 
  const newListItem = document.createElement("li");
  const textNode = document.createTextNode(animalItem);
  newListItem.classList.add('spotted-animals-list-item');
  newListItem.appendChild(textNode);
  document.getElementById("spotted-animals-list").appendChild(newListItem);

};

document.getElementById("remove-first-item-button").addEventListener("click", e => {
  let firstItem = document.querySelector(".spotted-animals-list-item");
  document.getElementById("spotted-animals-list").removeChild(firstItem);
});

document.getElementById("remove-all-button").addEventListener("click", e => {
  let allAnimals = document.getElementById("spotted-animals-list");
  allAnimals.querySelectorAll('*').forEach(n => n.remove());
});