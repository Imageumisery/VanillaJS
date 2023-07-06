const groceryList = document.querySelector('.grocery-list');
const input = document.querySelector('#grocery');
const submit = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');
const alert = document.querySelector('.alert');
const defaultItemName = 'grocery-item';
const dataIdName = 'data-id';
const titleName = 'title';
const defaulClass = 'class';
const editIcon = "fas fa-edit";
const editBtn = "edit-btn";
const deleteIcon = "fas fa-trash";
const deleteBtn = "delete-btn";
const show = 'show';

let listOfGroceries = [];
let idList = [];
let dataId = - 1;
let editableItemId;
let editing = false;

//clicks
submit.addEventListener('click', handleSubmit);
input.addEventListener('keydown', onEnter)
clearBtn.addEventListener('click', clearAll);

//appear buttons if any item exists
setInterval(checkItemList, 50);


function handleSubmit() {
    let inputValue = document.querySelector('#grocery').value;
    if (inputValue === '') return;
    if (editing) {
        editItem(inputValue);
        editing = false;
    } else {
        createItem(inputValue);
    }
    //clearing input field
    input.value = '';
}

function addButtonContainer() {
    const btnContainer = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const icon1 = document.createElement('i');
    const icon2 = document.createElement('i');

    icon1.setAttribute(defaulClass, editIcon);
    icon2.setAttribute(defaulClass, deleteIcon);
    btn1.classList.add(editBtn);
    btn2.classList.add(deleteBtn);
    btn1.addEventListener('click', onEdit);
    btn2.addEventListener('click', deleteItem);

    btn1.appendChild(icon1);
    btn2.appendChild(icon2);
    btnContainer.classList.add('btn-container');
    btnContainer.appendChild(btn1);
    btnContainer.appendChild(btn2);
    return btnContainer;
}

function onEnter(e) {
    if (e.key === "Enter") {
        handleSubmit();
    }
}

function deleteItem() {
    let id = this.parentElement.parentElement.dataset.id;
    let item = document.querySelector(`[data-id='${id}']`);
    console.log(item);
    item.remove();
    delete listOfGroceries[id];
}

function clearAll() {
    while (groceryList.firstChild) {
        groceryList.firstChild.remove();
    }
    listOfGroceries = [];
    dataId = -1;
    idList = [];
}

function onEdit() {
    editing = true;
    editableItemId = this.parentElement.parentElement.dataset.id;
    input.value = listOfGroceries[editableItemId];
}

function editItem(inputValue) {
    let item = document.querySelector(`[data-id='${editableItemId}']`);
    item.firstChild.textContent = inputValue;
}

function createItem(inputValue) {
    const item = document.createElement('article');
    const title = document.createElement('p');
    title.classList.add(titleName);
    title.textContent = inputValue;
    //should terminate value with only spaces

    item.appendChild(title);
    item.classList.add(defaultItemName);
    item.setAttribute(dataIdName, ++dataId);
    idList.push(dataId);
    listOfGroceries.push(inputValue);
    console.log(listOfGroceries);

    item.appendChild(addButtonContainer());
    groceryList.appendChild(item);
}

function checkItemList() {
    let items = groceryList.firstChild;
    if (items) {
        clearBtn.classList.add(show);
    } else {
        clearBtn.classList.remove(show);
    }
}
