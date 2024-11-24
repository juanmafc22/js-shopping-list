/*

JavaScript and the DOM
-----------------------

What is the DOM?
- The Document Object Model (DOM) is a programming interface for web documents.
- It represents the structure of a document as a tree of nodes
- Each node represents a part of the document (e.g. an element, text string, or comment).

- Picture it like a family tree, with the document as the root node at the top
- Window -> Document -> HTML -> HEAD, BODY -> H1, P, DIV, etc.

- Head -> TITLE, META, LINK, SCRIPT, etc.
- Body -> H1, P, DIV, etc.

- H1 -> atributes, text node

*/

// because window is the global object, we can access it directly
console.log("The whole document")
console.log(document);
console.log("");

// accessing the body
console.log("The body")
console.log(document.body);
console.log("");

// the html in the body
console.log("The HTML inside the body");
console.log(document.body.innerHTML);
console.log("");

// how about all the links?
console.log("All the links in the document");
console.log(document.links);
console.log("");

// Because the links is an HTML Collection, we can loop through it and access each link by index
console.log("Accessing an individual link by index");
console.log(document.links[0]);
console.log("");

// Accessing and individual item by id
console.log("Accessing an individual item by id");
console.log(document.getElementById("mainTitle"));
console.log("");

// For example, we can change the text of the main title
let newTitle = "This is the new title of the page";
document.getElementById("mainTitle").innerText = newTitle;

