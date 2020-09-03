// getAttribute();
// setAttribute();

const first = document.querySelector('.first');
const idValue = first.getAttribute('id'); // gets attribute by id
// console.log(idValue);

const link = document.getElementById('link'); // gets attribute by name
const showLink = link.getAttribute('href');
console.log(showLink);

const last = link.nextElementSibling; // gets link next element sibling
last.setAttribute('class', 'first');  // sets attribute class to first
last.textContent = 'i also have a class of first'; // accesses and changes the text content
console.log(last);




const links = document.querySelectorAll('.first');
console.log(links);



