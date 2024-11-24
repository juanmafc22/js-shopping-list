/*

    JavaScript event delegation and events on multiple elements
    -----------------------------------------------------------


*/

const clearBtn = document.getElementById('clear');
const allLiTags = document.querySelectorAll('li');



// function to remove all <li>
function removeAllLi() {
    allLiTags.forEach( item => {
        item.remove();
    })
}

function removeIndividualLi(e) {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
}







// Event listener to delete individual <li> tags
allLiTags.forEach( item => {
    item.addEventListener('mouseover', removeIndividualLi);
});

// Event listener for a click on the clearBtn to remove all <li>
clearBtn.addEventListener('click', removeAllLi);








