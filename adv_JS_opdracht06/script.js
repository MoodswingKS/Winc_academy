const totalButtons = document.querySelector(".big-five-list");
const buttonItems = totalButtons.querySelectorAll(".big-five-list-item");
const animalItems = document.querySelectorAll(".spotted-animal-list");

// items:
/*
  0 = lion    1 = leopard   2 = ele     3 = rhino   4 = buffalo
*/

for (let item = 0; item < buttonItems.length; item++) {
  buttonItems[item].addEventListener("click", function (e) {
    console.log('clicked button: ', item);
    addAnimal(item);
  });
}

const addAnimal = (item) => { 
  // the mistake is either in the next line
  const newListItem = document.createElement("li");
  
  if (item === 0) {
    const newAnimal = document.createTextNode("Lion")
    newListItem.appendChild(newAnimal);
  }  

  // or the mistake is over here
  const currentItem = document.querySelector(".spotted-animal-list-item");

  document.body.insertBefore(newListItem, currentItem);
};
