# II Intro to DOM Scripting

## Homework

1. Install Node and Git on your personal computer
1. Review the documentation for
    * [addEventListener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp),
    * [querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp),
    * [querySelectorAll](https://www.w3schools.com/jsref/met_document_queryselectorall.asp), and
    * [classList](https://www.w3schools.com/jsref/prop_element_classlist.asp).
1. Add a JavaScript/CSS powered popover window to your page.
1. Add a close button to the popover div.

## Reading

* HTML5 and CSS3: Building Responsive Websites, Module 1 - chapters 1 and 2, Module 2 - chapters 1 to 4

## Server Accounts

[See session one](https://github.com/front-end-foundations/session1)

## Sushi - Converting to Standards (continued)

### Floats

The float property is used for positioning and layout on web pages.

Format the pull quote and image In `Sushi/css/styles.css`:

```css

article img {
  float: right;
}

blockquote {
  float: right;
  width: 40%;
  padding: 16px;
  font-size: 24px;
}

```

By default, a floated element shrinks to the width determined by the content.

### Adding color to our layout

Edit the CSS body rule.

```css

body {
  ...
  background-color: #ddd;
}

```

Note that the wrapper's background is transparent and shows through to the gray applied to the body.

Let's add a white background to wrapper and a bit of padding.

```css
#wrapper {
  ...
  background-color: #fff;
  padding: 1rem;
}
```

Add a box shadow to the wrapper CSS:

```css
#wrapper {
  box-shadow: 6px 6px 10px #999;
  ...;
}
```

Make it a glow:

```css
#wrapper {
  box-shadow: 0px 0px 20px #999;
  ...;
}
```

Add a drop shadow and rounded corners to the CSS for the info div using the inspector.

```css
aside {
  ...
  box-shadow: 3px 3px 3px #ddd;
  border-radius: 4px;
}
```

Format the text in the list and table

```css
aside {
  ...
  font-size: 0.875rem;
}

aside th {
  text-align: right;
}

aside ul {
  list-style: none;
  padding: 0;
}
```

### Formatting the content

Note the h1's margin outside the containing elements (not part of the box model).

```css
header h1,
header h2 {
  font-weight: normal;
  font-size: 3rem;
  margin: 8px 0;
  color: #600;
}
header h2 {
  font-size: 2rem;
}
article h2 {
  font-weight: 400;
  color: #600;
  border-bottom: 1px dotted #600;
}
```

### Highlight One Tab

This is a simple way to create color coded navigation on a web site.

Add a class to body tag so we know what kind of page this is.

```html

<body class="p-review">

```

Edit the nav so it uses classes on the tabs and 'real' links:

```html

<ul class="nav">
  <li class="t-cuisine"><a href="cuisines.html">Cuisines</a></li>
  <li class="t-recipe"><a href="recipes.html">Recipes</a></li>
  <li class="t-review"><a href="index.html">Reviews</a></li>
  <li class="t-delivery"><a href="delivery.html">Delivery</a></li>
</ul>

```

Click on the tabs to test.

Add the following to our CSS block:

```css

.p-review .t-review a {
  color: #600;
  background: #f0dfb4;
}

```

The Reviews tab is now highlighted only on the reviews page.

Add page level classes to the other three html documents and expand the css tabs selector to allow the tabs to display highlighted as well.

```css

.p-review .t-review a,
.p-cuisines .t-cuisine a {
  color: #600;
  background: #f0dfb4;
}

```

## DOM Scripting

DOM is an acronym for Document Object Model.

Every web page is a document, and the DOM is an “object model” representation of that document that programming languages like JavaScript can access and manipulate.

### Variable Assignment and Types

In the browser console (one line at a time):

```js

var width = 100
width
typeof width

width + 300
width; // still 100
width = width + 300
width // now 400

var wide = true
wide
typeof wide

var testString = '123456';
typeof testString;

```

Link `scripts.js` to `index.html` before the closing body tag:

```html

<script src="js/scripts.js"></script>

```

Add a link to a [Google map](https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734) to the map link in the aside:

```html

<li><a class="map" target="_blank" href="https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734">Map</a> | <a href="#">Directions</a></li>

```

Note the target attribute for the anchor tag. We have also used `class="map"` to name the link.

Note the contents of `scripts.js`. Display the Console in the developer tools. Uncomment and recomment lines and examine the output in the console.

The most important DOM scripting functions we will be using are:

* [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
* [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll)
* [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [classList](https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/)
* [event types](https://developer.mozilla.org/en-US/docs/Web/Events)
* [functions](https://developer.mozilla.org/en-US/docs/Glossary/Function)

### Creating the Popover

Make sure everything in `scripts.js` is commented. Add this to the bottom:

```js

var mapClicker = document.querySelector('.map')
console.log(mapClicker)

```

Use [addEventListener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) to listen for a click on `mapClicker`:

```js

var mapClicker = document.querySelector('.map');

mapClicker.addEventListener('click', function(){

  console.log(event); // The event details
  console.log(event.target); // The clicked element

  event.preventDefault();
});

```

Since we are working with a link we need to prevent it from navigating away from the page with `event.preventDefault();`.

We can call a function to run when the event occurs:

```js

var mapClicker = document.querySelector('.map');

mapClicker.addEventListener('click', show);

function show() {
  console.log(event); // The event details
  console.log(event.target); // The clicked element
  event.preventDefault();
};

```

Add to the bottom of the html (but before `<script>`) so it appears at the bottom of the browser:

```html

<div class="popover">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.821674756671!2d-73.97492268461596!3d40.67789794763805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba8edab126b%3A0xfaa0551477e2ec72!2sGeido!5e0!3m2!1sen!2sus!4v1490213487125" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>

```

Style the popover div:

```css

.popover {
  padding: 1rem;
  width: 300px;
  height: 225px;
  background: #fff;
  border: 1px solid #600;
  border-radius: 4px;
  position: fixed;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  /*display: none;*/
}

```

Note the `position: fixed` as well as the `top` and `left` properties.

Uncomment `display: none` so the popover div is initially hidden.

Add a new rule to the css:

```css

.showme {
  display: block;
}

```

Create a reference to the popover div.

```js

var mapClicker = document.querySelector('.map');
var popOver = document.querySelector('.popover');

mapClicker.addEventListener('click', show);

function show(e){
  e.preventDefault();
};

```

Use `classList` to toggle the `showme` class:

```js

var mapClicker = document.querySelector('.map');
var popOver = document.querySelector('.popover');

mapClicker.addEventListener('click', show);

function show(e){
  popOver.classList.toggle('showme');
  e.preventDefault();
};

```

### Using Event Delegation

Events "bubble up" from the targeted element to its parent elements and all the way up to the document and window.

Instead of listening to specific elements, we’ll instead listen for all click events on the page, and then check to see if the clicked item has a matching selector before running the function.

We will check if the targeted element has the class we want by using `classList.contains` as well as checking for the existence of the popover div:

```js

// Listen for clicks on the document
document.addEventListener('click', show, false)

function show() {
  // Bail if our clicked element doesn't have the .map class
  if (!event.target.classList.contains('map')) return;

  var popOver = document.querySelector('.popover');
  if (!popOver) return;
  
  popOver.classList.toggle('showme');
  
  event.preventDefault();

};

```

The last argument in `addEventListener()` (`false`) is known as "Use Capture." It allows you to force bubbling on events that don't do it by default. Most events bubble naturally and so use capture can be set to false. Setting `useCapture` to true allows you to take advantage of event bubbling for events that otherwise don’t support it.

For example, focus does not bubble, so in the example below we force it so we can listen for events on the document or window:

```js

// Listen for all focus events in the document
document.addEventListener('focus', function (event) {
    // Run functions whenever an element in the document comes into focus
}, true);

```

### End Sushi

## Styling a List with Floats

<img src="Tabs/tabs-image.jpg">

In this exercise we will focus on list styling and navigation but instead of using `display: inline` or `display: inline-block` to create horizontal navigation we will use floats.

<!-- ## Demo in Sublime

* Install [package control](https://packagecontrol.io)

* Install [emmet](https://packagecontrol.io/packages/Emmet)

* Review [emmet syntax](http://docs.emmet.io/abbreviations/syntax/)

Using emmet -->

<!-- ```sh
!

ul>li*4>a[href="#"]{link}

nav>ul>li.t-cuisines*4>a[href="cuisines.html"]{cuisines}
``` -->

Create an HTML file and save it as `cuisines.html` into the `Tabs` folder.

<!-- * duplicate lines `cmd-d` and
* use multiple cursors `cmd` to complete the classes and links so you end up with: -->


```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cuisines</title>
  <style>

  </style>
</head>

<body>

<nav>
  <ul class="nav">
    <li class="t-cuisines"><a href="cuisines.html">Cuisines</a></li>
    <li class="t-chefs"><a href="chefs.html">Chefs</a></li>
    <li class="t-reviews"><a href="reviews.html">Reviews</a></li>
    <li class="t-delivery"><a href="delivery.html">Delivery</a></li>
  </ul>
</nav>

</body>
</html>

```

Take a moment to examine the default user agent styles using the inspector.

Add and review some basic formatting (in the `<style>` block):

```css

body {
  margin: 0;
  font-family: 'Lucida Grande', sans-serif;
}
.nav {
  background: #ffcb2d;
  margin: 0;
  padding: 10px 0 0 46px;
}

```

Remove the bullets from the `<ul>`:

```css

.nav {
  ...
  list-style: none;
}

```

Float the list items to the left:

```css

li {
  float: left;
}

```

Notice what happened to the `<ul>`'s height. The `<li>` items no longer force the parent `<ul>` element to expand to contain them. This behavior, know as collapsing, occurs whenever all the direct children of a container element are floated. In this case the `<ul>` has collapsed. This behavior is important as "collapsing" is a common design issue when using floats.

There are a number of methods in use to prevent this:

* float a float (or "FNE" - float nearly everything) - apply a float to the collapsed element
* the clearfix hack - this entails creating a utility class and will be covered later
* adding a clearing div - this entails adding an HTML element to the page and is discouraged

For our current example let's use the second FNE method.

Try adding a float to the 'collapsed' element:

```css

.nav {
  ...
  float:left;
}

```

Note that the width has changed. Boxes are 100% width by default (they stretch to fill their container). Floating the collapsed element causes it to contract to contain its children.

Since we want the `<ul>` to extend the width of the window let's fix the width.

```css

.nav {
  ... 
  width:100%;
}

```

_When you float an element you usually have to specify a width._

Extend the [background property](https://www.w3schools.com/css/css_background.asp) to add a background color and image to the `<ul>`.

```css

.nav {
  ...
  background-color: #ffcb2d;
  background-image: url(i/nav_bg.gif);
}

```

Aside: demo the background property using `pattern.gif`.

Add positioning to the background.

```css

.nav {
  ...
  background-color: #ffcb2d;
  background-image: url(i/nav_bg.gif);
  background-repeat: repeat-x;
  background-position: bottom left;
}

```

Next we'll tackle the `<a>` tags. Add the following to our CSS block.

```css

a {
  text-decoration: none;
  color: #333;
}

```

Adding padding, margins to separate, and a border to make them more tab-like:

```css

a {
  ...
  padding: 4px 8px;
  border: 1px solid #9b8748;
  margin: 0 6px 0 0;
}

```

Although it may be a little difficult to discern, the same issue we had with collapsing earlier has occurred here as well. We will use the same method as before to make the container expand to fit its floated children. Let's remove the redundant border while we're at it.

```css

a {
  ...
  border-bottom: none;
  float: left;
}

```

By floating the anchors we cause the `<li>`s to expand to contain their floated children.
Now we add a background image to the `<a>`. Note the use of the background shortcut and that the image has a gradient and transparency.

```css

a {
  ...
  background: #f9eaa9 url(i/off_bg.gif) repeat-x top left;

```

Note what happened to the background graphic we placed in the `<ul>`. It is hidden behind the anchors.

Now we create hover states for our tabs by swapping out the background image:

```css

a:hover {
  background: #fff url(i/on_bg.gif) repeat-x top left;
}

```

### Finishing touches

This part is a but tricky since it uses padding to show or hide the background graphic running along the bottom of the `<ul>`. We will be increasing the height by one pixel on hover to hide the image.

Recall that the padding on the bottom of the anchor tags was 4px. Let's increase the padding on the hover state to 5px.

```css

a:hover {
  ...
  padding-bottom:5px;
}

```

If you roll over the tabs now the height of the anchor increases by one pixel causing the `<ul>` to expand as well and thus showing the border along the bottom under the inactive tabs.

Due to the fact that there is no selected tab (only hovered) the height of the element appears to jump slightly. Let's assume that one of the tabs will always be highlighted.

Create a second selector to highlight one of the anchors by adding `.t-cuisines a` as a second selector to the hover rule.

```css

a:hover, .t-cuisines a {
  ...
}

```

Note that when you use two selectors they must be separated by a comma.

Many prefer to keep the multiple selectors on separate lines like so:

```css

a:hover,
.t-cuisines a {
  ...
}

```

Now, if we add an id to the body tag we can edit the selector to make it page specific.

Add `class="cuisines"` to the body tag.

```html

<body class="p-cuisines">

```

Edit the second selector to make the tab highlighting specific to this page.

```css

a:hover,
.p-cuisines .t-cuisines a {
  ...
}

```

We are going to create a second HTML page shortly so let's copy our CSS into an external file as `styles.css` and link to it:

```html

<link href="css/styles.css" rel="stylesheet" type="text/css">

```

Note that because we used a new directory, the paths to the images are no longer correct. Correct them now using this pattern:

```css

background-image: url(../i/nav_bg.gif);

```

Save a new copy of the HTML page as `chefs.html` and edit the ID:

```html

<body class="chefs">

```

Add a new selector to the CSS.

```css

a:hover,
.p-cuisines .t-cuisines a,
.p-chefs .t-chefs a {
  ...
}

```

Now when you navigate between the two pages you should see a friendly reminder of what page you are on courtesy of the CSS file.

* There is a demo of this in the `Tabs > demo` directory.

### Removing the on- off- images

Images and any other externally linked asset increases the time it takes to download and render your page. It is considered a best practice to minimize the number of images whereever possible so let's remove as many as we can.

Aside: [Hex color vs. RGB vs. RGBA](https://www.w3schools.com/colors/colors_converter.asp)

* [Intro to gradients in css](https://css-tricks.com/css3-gradients/) has more information than you'll ever need
* The [Gradient editor](http://www.colorzilla.com/gradient-editor/) is still a useful tool

Edit the background properties for the tabs:

Normal (eg. non-hovered) state:

```css

background-image: linear-gradient(to bottom, rgba(255,236,165,1) 0%,rgba(232,213,149,1) 6%,rgba(253,233,162,1) 94%,rgba(253,233,162,1) 100%);

```

Highlighted (eg. hovered) state:

```css

background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(224,226,240,1) 6%,rgba(254,254,254,1) 53%);

```

We cannot use `border` for the underline on the `<ul>` so let's use a very thin gradient:

```css

background-image: linear-gradient(to bottom, #ffcb2d 0%,#ffcb2d 96%,#9b8748 100%);

```

### Using Flexbox

We will be covering flexbox in a future class. For now, note that a more modern method of creating the same design would be to use `display: flex`.

Remove the float from the `ul` and add `display: flex`:

```css

.nav {
  ...
  /* float: left; */
  display: flex;
}

```

Remove the float from the `<li>` tags and add flex:

```css

li {
  /* float: left; */
  display: flex;
}

```

Remove the float and underline from the anchors:

```css

a {
  ...
  /* border-bottom: none; */
  /* float: left; */
}

```

Add `border-bottom: none;` to the active state:

```css

a:hover,
.p-cuisines .t-cuisines a,
.p-chefs .t-chefs a {
  border-bottom: none;
  ...
}

```

## Looking Forward

Examine the other demos in the `demo` folder.
