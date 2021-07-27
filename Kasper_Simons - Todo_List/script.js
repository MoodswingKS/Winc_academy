const completedList = document.getElementById("completed-list");
const incompleteList = document.getElementById("incomplete-list");
const inputField = document.querySelector("input[type='text']");
const addButton = document.querySelector(".save");

const getListItems = async () => {
    inputField.value = '';
    completedList.querySelectorAll('*').forEach(n => n.remove());
    incompleteList.querySelectorAll('*').forEach(n => n.remove());

    const list = await getData();

    list.forEach(item => {
        const newItem = document.createElement("li");
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        editBtn.innerHTML = 'Klaar';
        editBtn.classList.add('edit');
        deleteBtn.innerHTML = 'Verwijder';
        deleteBtn.classList.add('delete');
        
        newItem.innerHTML = item.name;
        newItem.id = item._id;

        if (item.done) {
            newItem.appendChild(deleteBtn);
            newItem.classList.add("completed-list-item");
            completedList.appendChild(newItem);

            deleteBtn.addEventListener("click", e => {
                awaitRequest(e);
            }, false);
        } else {
            newItem.appendChild(editBtn);
            newItem.classList.add("incomplete-list-item");
            incompleteList.appendChild(newItem);

            editBtn.addEventListener("click", e => {
                awaitRequest(e);
            }, false);
        }
    })
}

getListItems();

const enterKey = (e) => {
    if (e.code == 'Enter') {
        awaitPostRequest()
    }
}

const awaitPostRequest = async () => {
    const writtenName = inputField.value;
    const task = { name: writtenName, done: false };

    await postData(task);
    getListItems();
}

const awaitRequest = async (e) => {
    const child = e.target;
    const id = child.parentNode.id;

    child.parentNode.className === 'completed-list-item' ? await removeData(id) : await changeData(id);
    getListItems();
}

addButton.addEventListener("click", awaitPostRequest, false);
inputField.addEventListener("keydown", enterKey, false);
