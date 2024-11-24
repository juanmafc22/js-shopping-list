/*

Some properties of the document object
--------------------------------------


*/	

let output;

// Accessing all the HTML elements in the document
console.log("All the HTML elements in the document");
output = document.documentElement
console.log("");

// Accessing the head of the document
output = document.head;
// Accessing the body of the document
output = document.body;

// Accessing all the elements INSIDE the body
// Gets the direct CHILDREN of the body
output = document.body.children;

// Getting different things from the document
// Doctype
output = document.doctype;
// Charset
output = document.characterSet;
// URL
output = document.URL;
// Content Type
output = document.contentType;


// Using the link
output = document.links;
// Because document.links is an HTML collection, I can access its elements by ID
output = document.links[0];     // there I grabbed the first one
// Let's try get the pathname of the link
output = document.links[0].pathname;
// Let's try get the href
output = document.links[0].href;
// let's try set an id on that link
output = document.links[0].id = 'airliners-net-new-id';
// let's try change the href on that link
output = document.links[0].href = 'http://www.rufieta.com.ar';
// putting some CSS class on that link
output = document.links[0].className = 'new-class-for-airliners-dot-net';

// Getting the images
output = document.images;

// An HTML collection IN NOT an array but it is ARRAY like
// we can convert into arrays for example.
const linksArray = Array.from(document.links);

for (const element of linksArray) {
    console.log(element.href);
}




console.log(linksArray);