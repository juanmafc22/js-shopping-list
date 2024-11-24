/*

JavaScript Window Events
--------------------------------

1. load
2. resize
3. DOMContentLoaded
4. scroll
5. click
6. mouseover

Difference between load and DOMContentLoaded
-------------------------------------------
- load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, images, and frames.
- DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

*/


const theWindow = window;
let widthH2 = document.getElementById('winWidth');
let heightH2 = document.getElementById('winHeight');

function printWidth() {
    widthH2.innerText = theWindow.innerWidth;
}

function printHeight() {
    heightH2.innerText = theWindow.innerHeight;
}

function printSizes() {

    widthH2.innerText = window.innerWidth;
    heightH2.innerText = window.innerHeight;
}



theWindow.addEventListener('DOMContentLoaded', printSizes);
theWindow.addEventListener('resize', printWidth);
theWindow.addEventListener('resize', printHeight);


