// Select the H1, the input, the select and checkbox
const title = document.querySelector('h1');
const itemInput = document.getElementById('item-input');
const selectInput = document.getElementById('priority-input');
const recurringCheckbox = document.getElementById('checkbox');


console.log(title.outerHTML);
console.log(itemInput.outerHTML);
console.log(selectInput.outerHTML);
console.log(recurringCheckbox.outerHTML);
console.log("");

// function to get the value of the input field
function getInputValue(e) {
    console.log(e.target.value);
    title.textContent = e.target.value;
}

// function to get the value of the select tag
function getSelectValue(e) {
    console.log(e.target.value);
}


// function to get the value of a checkbox
function getCheckedValue(e) {

    const checkedValue = e.target.checked;

    if (checkedValue == true || checkedValue == false) {
        title.textContent = checkedValue;
    }
    console.log(checkedValue);
}

function changeInputBorder(e) {
    e.target.className = 'form-input-focus';
}
function changeInputBorder2(e) {
    e.target.className = 'form-input';
}

// event listener to the focus on the input
itemInput.addEventListener('focus', changeInputBorder);
itemInput.addEventListener('blur', changeInputBorder2);

// event listener to get the value of a checkbox
recurringCheckbox.addEventListener('input', getCheckedValue);
// event listener to get the value of the select tag
selectInput.addEventListener('input', getSelectValue);
// Adding an event listener to the input 
itemInput.addEventListener('input', getInputValue);