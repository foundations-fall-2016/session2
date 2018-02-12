// EXAMINE THE DOCUMENT OBJECT //

// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.body);

// find number of the H1 tag in the header
// console.log(document.all);

// console.log(document.all[20]);
// document.all[20].textContent = 'Hello';

// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('wrapper'));
// var wrapper = document.getElementById('wrapper');

// wrapper.textContent = 'Hello';
// wrapper.style.borderBottom = 'solid 30px red';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYCLASSNAME //
// var nav = document.getElementsByClassName('nav');
// console.log(nav);

// GETELEMENTSBYTAGNAME //
// var a = document.getElementsByTagName('a');

// Gives error
// li.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < a.length; i++) {
// 	a[i].style.backgroundColor = 'green';
// }

// QUERYSELECTOR //
// add a class map to the map link in the sidebar
var mapLink = document.querySelector('.map');
mapLink.style.borderBottom = 'solid 8px red';

// EVENTS //

// mapLink.addEventListener('click', function() {
// 	console.log('It works!');
// });

// mapLink.addEventListener('click', function() {
// 	console.log('It works!');
// 	event.preventDefault();
// });

// mapLink.addEventListener('click', buttonClick);

// function buttonClick(e) {
// console.log('Map link clicked');
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);
// console.log(e.target);
// console.log(e.target.className);
// console.log(e.target.classList);
// console.log(e.type);
// console.log(e.clientX);
//console.log(e.clientY);
// console.log(e.offsetX);
//console.log(e.offsetY);
// 	event.preventDefault();
// }

// DYNAMICALLY CREATE AN ELEMENT //s

// // Create a div
var newDiv = document.createElement('div');

// // Add class
newDiv.className = 'popover';

// // Create text node
var newDivText = document.createTextNode('Hello World');

// // Add text to div
newDiv.appendChild(newDivText);

var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

h1.appendChild(newDiv, h1);
