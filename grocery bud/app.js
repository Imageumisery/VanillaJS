const groceryList = document.querySelector('.grocery-list');
const submit = document.querySelector('.submit-btn');
const form = document.querySelector('.grocery-form');
const clearBtn = document.querySelector('.clear-btn');
const alert = document.querySelector('.alert');
const defaultItemName = 'grocery-item';
const dataIdName = 'data-id';
const defaulClass = 'class';
const editIcon = "fas fa-edit";
const editBtn = "edit-btn";
const deleteIcon = "fas fa-trash";
const deleteBtn = "delete-btn";

let listOfGroceries = [];
let idList = [];
let dataId = 0;

//clicks
submit.addEventListener('click', createItem);
clearBtn.addEventListener('click', clearAll);


function createItem() {
    const item = document.createElement('article');
    const title = document.createElement('p');
    title.classList.add('title');
    let inputValue = document.querySelector('#grocery').value;
    if (inputValue === '') {
        return
    }
    //should terminate value with only spaces
    title.textContent = inputValue;

    item.appendChild(title);
    item.classList.add(defaultItemName);
    item.setAttribute(dataIdName, ++dataId);
    idList.push(dataId);
    item.appendChild(addButtonContainer());
    groceryList.appendChild(item);
    document.querySelector('#grocery').value = '';
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
    btn1.addEventListener('click', edit);
    btn2.addEventListener('click', clearItem);


    btn1.appendChild(icon1);
    btn2.appendChild(icon2);
    btnContainer.classList.add('btn-container');
    btnContainer.appendChild(btn1);
    btnContainer.appendChild(btn2);
    return btnContainer;
}

function clearItem() {

}

function clearAll() {
    while (groceryList.firstChild) {
        groceryList.firstChild.remove();
    }
}

function edit() {

}