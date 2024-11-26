const form = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemUl = document.getElementById('itemUl');

// add item to the <ul></ul>
function addItem(e) {

    e.preventDefault();

    // get the item entered
    const item = itemInput.value;

    // create the icon
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    const button = document.createElement('button');
    button.appendChild(icon);
    button.className = 'remove-item btn-link';

    const li = document.createElement('li');
    li.appendChild(button);
    li.innerText = item;

    itemUl.appendChild(li);

    document.getElementById('item-input').value = "";

}


// add item to the <ul></ul> on form submit
form.addEventListener('submit', addItem);