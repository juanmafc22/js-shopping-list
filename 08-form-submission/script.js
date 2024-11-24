// Get the form
// add event listener on submit
// add a conditional for input, select and checkbox
// if any are empty preventDefault();

const form = document.getElementById('item-form');

function actionsOnSubmit(e) {


    const inputValue = document.getElementById('item-input').value;
    const selectValue = document.getElementById('priority-input').value;
    const checkedValue = document.getElementById('checkbox').checked;

    if (inputValue == "" || selectValue == 0 || checkedValue == false) {

        e.preventDefault();

        document.getElementById('item-input').className = 'form-input-validation';
        document.getElementById('priority-input').className = 'form-input-validation';
        document.getElementById('checkbox').className = 'checkbox-validation';

    } else {

        e.preventDefault();

        console.log(inputValue);
        console.log(selectValue);
        console.log(checkedValue);

    }







} 






// Add event listener
form.addEventListener('submit', actionsOnSubmit);