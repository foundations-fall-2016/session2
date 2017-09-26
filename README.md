# Front End Foundations Session Two

## Homework

1. Continue the homework from last week ("Examine the provided homework samples for inspiration and try your hand at redesigning the page using the CSS techniques described in class). Add a JavaScript/CSS powered popover window to your page.

1. Review the steps we used to create a tab navigation interface


## Reading 

* CSS3 for Web Designers - finish it

* [Responsive Web Design](https://abookapart.com/products/responsive-web-design) - start it, carefully read the section on Media Queries


## Server Accounts

[See session one](https://github.com/front-end-foundations/session1#server-accounts)


## Styling a List with Floats

<img src="Tabs/tabs-image.jpg">

Review the navigation from last week.

In this exercise we will focus on list styling and navigation but instead of using `display: inline` or  `display: inline-block` to create horizontal navigation we will use floats.

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
	<ul id="nav">
		<li class="t-cuisines"><a href="cuisines.html" >Cuisines</a></li>
		<li class="t-chefs"><a href="chefs.html">Chefs</a></li>
		<li class="t-reviews"><a href="reviews.html">Reviews</a></li>
		<li class="t-delivery"><a href="delivery.html">Delivery</a></li>
	</ul>
</nav>

</body>
</html>
```

Take a moment to examine the default user agent styles using the inspector.

Add some basic formatting.

```css
body {
	margin:0;
	font-family:"Lucida Grande", sans-serif;
	font-size:100%;
}
#nav {
	background:#ffcb2d;
	margin:0; 
	padding:10px 0 0 46px;
}
```

Firstly, remove the bullets from the `<ul>`:

```css
#nav {
	...
	list-style:none;
}
```

Then float the list items to the left (after removing the possibility that any margins or padding might be applied).

```css
li {
	float:left;
}
```

Notice what happened to the `<ul>`'s height. The `<li>` items no longer force the parent `<ul>` element to expand to contain them. This behavior, know as collapsing, occurs whenever all the direct children of a container element are floated. In this case the `<ul>`  has collapsed. This behavior is important as collapsing is a common design issue. 

There are a number of methods in use to prevent this:

* Apply CSS overflow: auto; to the collapsed element

* float a float (or "FNE" - float nearly everything) - apply a float to the collapsed element

* the clearfix hack - this entails creating a utility class and will be covered later

* adding a clearing div - this entails adding an HTML element to the page and is discouraged

For our current example let's use the second FNE method.

Try adding a float to the 'collapsed' element:

```css
#nav {
	...
	float:left;
}
```

Note that the width has changed. Boxes are 100% width by default (they stretch to fill their container). Floating the collapsed element causes it to contract to contain its children.

Since we want the `<ul>` to extend the width of the window let's fix the width.

```css
#nav {
	...
	width:100%;
}
```

*When you float an element you usually have to specify a width.*

Extend the background property to add a background graphic to the `<ul>`.

```css
#nav {
	...
	background:#ffcb2d url(i/nav_bg.gif);
}
```

Aside: demo the background property using `pattern.gif`.

Add positioning to the background.

```css
#nav {
	...
	background:#ffcb2d url(i/nav_bg.gif) repeat-x bottom left;
}
```

Next we'll tackle the anchor tags: `<a>`. Add the following to our CSS block.

```css
a {
	text-decoration:none;
	color:#333;
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
	float:left;
}
```

By floating the anchors we cause the list items to expand to contain their floated children.
Now we add a background image to the <a>. Note that the image has a gradient and transparency.

```
a {
	...
	background: #f9eaa9 url(i/off_bg.gif) repeat-x top left;
```

Note what happened to the background graphic we placed in the `<ul>`. It is hidden behind the (now not transparent) anchors. 

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

Create a second selector to highlight one of the anchors.

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
Add id="cuisines" to the body tag.

```html
<body id="p-cuisines">
```

Edit the second selector to make the tab highlighting specific to this page.

```css
a:hover, 
#p-cuisines .t-cuisines a 
{
	...
}
```

We are going to create a second HTML page shortly so let's copy our CSS into an external file, save it as styles.css, and link to it from a newly created css directory:

```html
<link href="css/styles.css" rel="stylesheet" type="text/css">
```

Note that because we used a new directory, the paths to the images are no longer correct. Correct them now.

Save a new copy of the HTML page as chefs.html and edit the ID:

```html
<body id="chefs">
```

Add a new selector to the CSS.

```css
a:hover, 
#p-cuisines .t-cuisines a ,
#p-chefs .t-chefs a {
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

```
background-image: linear-gradient(to bottom, rgba(255,236,165,1) 0%,rgba(232,213,149,1) 6%,rgba(253,233,162,1) 94%,rgba(253,233,162,1) 100%);
```

Highlighted (eg. hovered) state:

```
background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(224,226,240,1) 6%,rgba(254,254,254,1) 53%);
```

Underline:

```
background-image: linear-gradient(to bottom, #ffcb2d 0%,#ffcb2d 96%,#9b8748 100%);
```

## Looking Forward

Examine the other demos in the `demo` folder.


## Sushi Review

* review the CSS

* create a separate css file and link it back to the document

<!-- * reformat the anchor tags using display flex

```
.nav {
	display: flex;
	padding: 0;
} 
.nav li { 
	flex: 1;
	background-color: #d00;
	list-style: none;
	text-align: center;
}
``` -->

### CSS Variables

(These)[https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables] allow us to store commonly used information as a variable for use throughout our css.

See also [Can I Use](https://caniuse.com/#search=css%20variables)

```
html {
  --bg-color: #f0dfb4;
}
```

```
.nav a {
  ...
  background-color: var(--bg-color);
}

aside {
  ...
  background-color: var(--bg-color); 
}
```

## Responsive Design

```
@media print {
	* {
		display: none !important;
	}
}
```


```
@media screen and (max-width: 800px){
	.nav {
		top: 0;
		left:0;
		margin: 0;
		background: var(--rust);
	}
	header {
		padding-top: 30px;
	}
	aside {
		position: static;
		float: left;
		margin-right: 20px;
	}
	article {
		margin-left: 20px;
	}
	blockquote {
		width: 100%;
		float: none;
		margin: 0;
	}
}
	```


## DOM Scripting I

* The console and variables

Try this in the console (copy paste one line at a time):

```js
var width = 100;
width
typeof width
width + 300
width
width + 'test'
var width = 200;

let wide = true;
wide
typeof wide
let wide = false;
wide = false

const testString = '123456';
testString
typeof testString
const testString = 'abcde';

```

* Selecting items with [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), see also [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll) (we'll work with this later)

* attaching events with [addEventListener('event', function)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), see also [event types](https://developer.mozilla.org/en-US/docs/Web/Events)

* [Functions](https://developer.mozilla.org/en-US/docs/Glossary/Function)

* Manipulating HTML with [classList](https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/)

Add link to a [Google map](https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734):

```
https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734
```

e.g.:

```html
<li><a class="map" target="_blank" href="https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734">Map</a> | <a href="#">Directions</a></li>
```

Add a class of `.map` to the map link

```
<script>
	var mapClicker = document.querySelector('.map')

	mapClicker.addEventListener('click', show)
	// document.addEventListener('click', show)

	function show(){
		event.preventDefault()
	};
</script>
```

Add to the bottom of the html (but before `<script>`):

```
<div class="popover">
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.821674756671!2d-73.97492268461596!3d40.67789794763805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba8edab126b%3A0xfaa0551477e2ec72!2sGeido!5e0!3m2!1sen!2sus!4v1490213487125" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
```

```
.popover {
	padding: 1rem;
	width: 300px;
	height: 225px;
	background: #fff;
	border: 1px solid var(--rust);
	border-radius: var(--radius);
	position: fixed;
	top: calc(50% - 100px);
	left: calc(50% - 150px);
	/*display: none;*/
}
```

Uncomment `display: none` so the map stays hidden.

Add a new rule to the css:

```
.showme {
	display: block;
}
```

```
<script>
	var mapClicker = document.querySelector('.map')
	var popOver = document.querySelector('.popover')
	mapClicker.addEventListener('click', show)

	function show(){
		popOver.classList.toggle('showme')
		event.preventDefault()
	};
</script>
```






Notes





