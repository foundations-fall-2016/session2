// EXAMINING AND CHANGING THE DOCUMENT  //

// console.log(window);
// console.log(document); // console.dir(document) displays the element DOM properties
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.body);

/* FIND the tags in the header in the list */
// console.log(document.all);
// console.log(document.all[19]);
// document.all[19].textContent = 'Hello';

// console.log(document.links);
// console.log(document.images);

/* GET ELEMENT BY ID - uncomment in sequence */
// console.log(document.getElementById('wrapper'));
// var wrapper = document.getElementById('wrapper');
// wrapper.textContent = 'Text content set in JavaScript';
// wrapper.style.borderBottom = 'solid 30px red';

// QUERY SELECTOR ALL //
// var listItems = document.querySelectorAll('li');
// NOTE - returns a NodeList

// Gives BLOCKING error - the console log command never runs
// listItems.style.backgroundColor = '#f4f4f4';
// console.log('This will not run b/c the line about causes a blocking error');

// HERE'S how you would have to do it
// NODELIST has a method called FOREACH
// listItems.forEach(function(listItem) {
// 	listItem.style.backgroundColor = 'red';
// });

// QUERYSELECTOR //
// make sure you have a class of 'map' and a Google map link to the map anchor tag in the sidebar
// var mapLink = document.querySelector('.map');
// mapLink.style.borderBottom = 'solid 8px red';

// EVENTS //

// ADDEVENTLISTENER
// mapLink.addEventListener('click', function() {
//   console.log('It works!');
// });

// mapLink.addEventListener('click', function(event) {
//   console.log('It works!');
//   event.preventDefault();
// });

// EVENT (e)

// mapLink.addEventListener('click', function() {
// 	console.log(event);
// 	event.preventDefault();
// });

// CALLING A FUNCTION

// mapLink.addEventListener('click', buttonClick);

// function buttonClick() {
// console.log('Map link clicked');
// console.log(event);
// console.log(event.target);
// console.log(event.type);
// console.log(event.target.className);
// console.log(event.target.classList);
// console.log(event.clientX);
// console.log(event.clientY);
// console.log(event.offsetX);
// console.log(event.offsetY);
// event.preventDefault();
// }

// DYNAMICALLY CREATE AN ELEMENT //s

// // Create a div and then look at it in the console
// var newDiv = document.createElement('div');
// console.log(newDiv)

// // Add class
// newDiv.className = 'popover';

// // Add text
// newDiv.innerHTML = 'Hello World'
// newDiv.innerText = 'Hello World'

// // Add text to div
// newDiv.style.fontSize = '40px';
// newDiv.style.color = '#600';

// // Store a reference to the H1
// var headerOne = document.querySelector('header h1');

// // Add the new div to the document
// headerOne.appendChild(newDiv);