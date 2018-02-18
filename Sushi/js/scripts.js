// EXAMINING AND CHANGING THE DOCUMENT  //

// console.log(window);
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.body);

// find number of the H1 tag in the header in the list
// console.log(document.all);

// console.log(document.all[19]);
// document.all[19].textContent = 'Hello';

// console.log(document.links);
// console.log(document.images);

// RESTART HERE //

// getElementById  - sequence //
// console.log(document.getElementById('wrapper'));
// var wrapper = document.getElementById('wrapper');
// wrapper.textContent = 'Hello';
// wrapper.style.borderBottom = 'solid 30px red';

// getElementsByClassName //
// var nav = document.getElementsByClassName('nav');
// console.log(nav);

// GETELEMENTSBYTAGNAME //
// var listItems = document.getElementsByTagName('li');

// Gives BLOCKING error
// listItems.style.backgroundColor = '#f4f4f4';
// console.log(listItems);

// for (var i = 0; i < listItems.length; i++) {
// 	listItems[i].style.backgroundColor = 'green';
// }

// QUERYSLECTORALL replaces 90% of jQuery //
// var listItems = document.querySelectorAll('li');

// Gives BLOCKING error - the console log command never runs
// listItems.style.backgroundColor = '#f4f4f4';
// console.log('test');

// NODELIST has a method called FOREACH
// listItems.forEach(function(listItem) {
// 	listItem.style.backgroundColor = 'red';
// });

// QUERYSELECTOR //
// make sure you add a class of 'map' and Google map link to the map anchor tag in the sidebar
// var mapLink = document.querySelector('.map');
// mapLink.style.borderBottom = 'solid 8px red';
// document.querySelector('.map').style.borderBottom = 'solid 8px red';

// EVENTS //

// mapLink.addEventListener('click', function() {
// 	console.log('It works!');
// });

// mapLink.addEventListener('click', function() {
// 	console.log('It works!');
// 	event.preventDefault();
// });

// (e)

// mapLink.addEventListener('click', function() {
// 	console.log(event);
// 	event.preventDefault();
// });

// mapLink.addEventListener('click', buttonClick);

// function buttonClick(e) {
// console.log('Map link clicked');
// console.log(e);
// console.log(e.target);
// console.log(e.type);
// console.log(e.target.className);
// console.log(e.target.classList);
// console.log(e.clientX);
// console.log(e.clientY);
// console.log(e.offsetX);
// console.log(e.offsetY);
// event.preventDefault();
// }

// DYNAMICALLY CREATE AN ELEMENT //s

// // Create a div and then look at it in the console
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'popover';

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);
// newDiv.style.fontSize = '30px';
// newDiv.style.color = 'red';

// // Store a reference to the H1
// var headerOne = document.querySelector('header h1');

// // Add the new div to the document
// headerOne.appendChild(newDiv);
