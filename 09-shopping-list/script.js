const itemQuantityText = document.getElementById('itemQuantity');
const itemInput = document.getElementById('item-input');
const title = document.querySelector('h1');
const liItems = document.querySelectorAll('li');
const theWindow = window;
const form = document.getElementById('item-form');
const addItemBtn = document.getElementById('add-item-btn');


// function to count the li items on DOM load
function countLis() {
    let counter = 0;
    liItems.forEach( item => {
        counter++;
    })
    itemQuantityText.innerText = counter;
}

// function to add new <li> element
function addNewLi(e) {
    
    e.preventDefault();

    let inputValue = document.





}






// Add event listener to submit on form button
form.addEventListener('submit', addNewLi);

// Add event listener on DOM load to count the num of elements in the <ul> list
theWindow.addEventListener('DOMContentLoaded', countLis);


