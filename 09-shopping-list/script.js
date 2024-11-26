const form = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemUl = document.getElementById('itemUl');
const clearBtn = document.getElementById('clear');

// add item to the <ul></ul>
function addItem(e) {

    e.preventDefault();

    // get the item entered
    const item = itemInput.value;

    const li = document.createElement('li');
    li.innerText = item;

    if (validateInput(item)) {

        // create the icon
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-xmark';

        const button = document.createElement('button');
        button.appendChild(icon);
        button.className = 'remove-item btn-link text-red';

        li.appendChild(button);

        itemUl.appendChild(li);

        document.getElementById('item-input').value = "";

    } else {

        alert("Input field is empty");

    }
}

function clearAllLi() {

    const allLi = document.querySelectorAll('li');

    allLi.forEach(li => {
        li.remove();
    })
}

function validateInput(text) {

    if (text != "") {
        return true;
    } else {
        return false;
    }
}

// clear all the <li></li> items from the <ul></ul>

// add click to the clear all btn
clearBtn.addEventListener('click', clearAllLi);

// add submit event listener to the form
form.addEventListener('submit', addItem);