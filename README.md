# Front End Foundations Session Two

## Homework

1. Continue the homework from last week - "Examine the provided homework samples for inspiration and try your hand at redesigning the page using the CSS techniques described in class"

1. Review the steps we used to create a tab navigation interface


## Reading 

* CSS3 for Web Designers - finish it

* [Responsive Web Design](https://abookapart.com/products/responsive-web-design) - start it, carefully read the section on Media Queries


## Server Accounts

[See session one](https://github.com/front-end-foundations/session1#aside---server-accounts)


## Sushi Review

* review the CSS

* create a separate css file and link it back to the document

* reformat the anchor tags using display flex

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
```


## DOM Scripting I

* The console and `console.log()`

* Selecting items with `document.querySelector`

* attaching events with `addEventListener()`

* Functions

* Manipulating HTML with `classList`

Add link to map:

```
https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734
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
	border: 1px solid var(--hilite-color);
	border-radius: var(--radius);
	position: fixed;
	top: calc(50% - 100px);
	left: calc(50% - 150px);
	/*display: none;*/
}
```

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



## Styling a List with Floats

<img src="tabs/tabs-image.png">

In this exercise we will focus on list styling and navigation but instead of using `display: inline` or  `display: inline-block` to create horizontal navigation we will use floats.

* Install [package control](https://packagecontrol.io)

* Install [emmet](https://packagecontrol.io/packages/Emmet)

* Review [emmet syntax](http://docs.emmet.io/abbreviations/syntax/)

Create an HTML file and save it as `cuisines.html`.

Using emmet

```sh
!

ul>li*4>a[href="#"]{link}

nav>ul>li.t-cuisines*4>a[href="cuisines.html"]{cuisines}
```

Edit the html (cmd-d / multiple cursors - cmd / opt + cmd) to complete the classes and links:

```html
<nav>
	<ul id="nav">
		<li class="t-cuisines"><a href="cuisines.html" >Cuisines</a></li>
		<li class="t-chefs"><a href="chefs.html">Chefs</a></li>
		<li class="t-reviews"><a href="reviews.html">Reviews</a></li>
		<li class="t-delivery"><a href="delivery.html">Delivery</a></li>
	</ul>
</nav>
```

Take a moment to examine the default margin and padding using the inspector.

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

First we remove the bullets from the `<ul>`:

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

Notice what happened to the `<ul>`'s height. The `<li>` items no longer force the parent `<ul>` element to expand to contain them. This behavior, know as collapsing, occurs whenever all the direct children of a container element are floated. In this case the `<ul>`  has collapsed. This behavior is important as collapsing is a common design issue. We will cover a number of methods to prevent this.

* Apply CSS overflow: auto; to the collapsed element

* float a float (or "FNE" - float nearly everything) - apply a float to the collapsed element

* the clearfix hack - this entails creating a utility class and will be covered later

* adding a clearing div - this entails adding an HTML element to the page and is discouraged

For our current example let's use the second method.

Try adding a float to the element that has collapsed (add the bold text).

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

When you float an element you fequently have to specify a width.

Extend the background property to add a background graphic to the `<ul>`.

```css
#nav {
	...
	background:#ffcb2d url(i/nav_bg.gif);
}
```

Add positioning to the background.

```css
#nav {
	...
	background:#ffcb2d url(i/nav_bg.gif) repeat-x bottom left;
}
```

Next we'll tackle the anchors. Add the following to our CSS block.

```css
a {
	text-decoration:none;
	color:#333;
}
```

Add padding, margins to separate, and a border to make them more tab-like.

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

```css
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

If you roll over the tabs now the height of the anchor increases by one pixel causing the `<ul>` to expand as well and thus showing the border along the bottom under the inactive tabs. Due to the fact that there is no selected tab (only hovered) the height of the element appears to jump slightly. Let's assume that one of the tabs will always be highlighted.

Create a second selector to highlight one of the anchors.

```css
a:hover, .t-cuisines a {
	...
}
```

Note that when you use two selectors they must be separated by a comma.

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

We are going to create a second HTML page shortly so let's copy our code into an external file and save it as styles.css into a new css directory:

```html
<link href="css/styles.css" rel="stylesheet" type="text/css">
```

Note that the paths to the images are no longer correct and need to be changed.

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

### Removing the on- off- images

Images take time to download - let's remove as many as we can.

* [Intro to gradients in css](https://css-tricks.com/css3-gradients/)
* [Gradient editor](http://www.colorzilla.com/gradient-editor/)

Edit the background properties for the tabs:

Highlight state

```
background-image: linear-gradient(to bottom, rgba(255,236,165,1) 0%,rgba(232,213,149,1) 6%,rgba(253,233,162,1) 94%,rgba(253,233,162,1) 100%);
```

Nomral state:

```
background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(224,226,240,1) 6%,rgba(254,254,254,1) 53%);
```

Underline:

```
background: linear-gradient(to bottom, #ffcb2d 0%,#ffcb2d 96%,#9b8748 100%);
```


Notes





