#FOUNDATIONS Session Two

##Sushi Review and Cleanup

* create a separate css file and link it back to the documents
* reset the browser defaults

Do a before and after examination of the anchors tags using inline block

```css
.nav a {
	...
	display: inline-block;
}
```

An element's margins may stick out from its containing elements. Combined with the fact that various browsers may use different settings for default margins and padding on items it makes it very hard to accurately style a page.

Add a simple reset to the CSS style sheet and add margins to the paragraphs:

```css
* { 
	margin:0;  
	padding:0; 
}
p {
	margin: 1em 0;
}
```

N.B. Vendor prefixes may be required for newer css properties. e.g. [shape-outside](https://css-tricks.com/almanac/properties/s/shape-outside/):

```css
article img {
	float:right;
  	-webkit-shape-outside: circle(50%);
  	shape-outside: circle(50%);
}
```
[See Can I Use](http://caniuse.com/#search=shape-outside) for full information.



##Floating Image Gallery
* keep as many images as possible above the fold
* no horizontal scroll bars 

###Lay of the land

The following classes are used in the html:

* pic - any div with a picture
* ls - landscape (128 x 96)
* pt - portrait (96 x 128)
* tn - thumbnail link
* title / catno / price (not shown in this template)


###CONTACT SHEET

Google font

```css
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
```

(start-contact.html)

Add and examine the normalize.css file

```html
<link rel="stylesheet" href="styles/normalize.css" />
```

Add the base styles:

```css
body {
	background:#eed;
	padding:1em;
	font-family: 'Lato', sans-serif;
	font-size: 62.5%; 
}
#footer {
	padding-top: 3em;
	font-size: 1.25em; 
}
```

Note the footer font size and padding in the inspector. Try changing the base font size to 100%. Look at computed (as opposed to rules) in the inspector. 

```css
body {
	background:#eed;
	padding:1em;
	font-family: 'Lato', sans-serif;
	font-size: 100%; 
}
#footer {
	padding-top: 3rem;
	font-size: 1.25rem; 
}
```
ems vs rems

Add:

```css
.pic {
  float: left; 
  height: 128px; 
  width: 128px;
  border: 1px solid black;
}
```
Edit
```
#footer { 
	...
	clear:both;
}
```

Note the clear property and the effect it has on the collapsed body. No floating elements are allowed on the left or the right side of a cleared both item. 

```css
.pic {
  ...
  margin: 5px 3px; 
}
```

Add

```css
.pic ul {
  display: none;
}
```

We want all images to be centered vertically and horizontally within a square.

```css
.ls img { 
  height:96px; 
  width:128px;
  margin: 16px 0;
}
.pt img {
  height:128px;
  width:96px;
  margin:0 16px;
}
```

Examine the frame-ls and -pt images - they are 160px square

Edit the pic class to add more padding and the background images:

```css
.pic {
  ...
  padding: 16px; 
  background: url(styles/img/frame-ls.gif) center no-repeat;
}
```
background-image vs <img>?

Override the portrait style frames to use a different image.

```css
.pt {
	background-image: url(styles/img/frame-pt.gif);
}
```
Add a dimensional border to the images.

```css
.pic img {
  border: 1px solid #444; 
  border-color: #444 #aaa #aaa #444;
 }
 ```

Remove the border from the pic divs.

###Catalog View  

(3-catalog.html)

```css
.pic .tn {
	float: left;
 }

.pic {
	margin: 10px;
	clear: left;
	width: 350px;
}
```

Portrait - align the image thumbnails:

```css
.pt .tn {
	width: 96px;
	margin-right: 32px;
}
```

Landscape - align the image thumbnails

```css
.ls .tn {
	width: 128px 
}

.tn img {
	border: 1px solid #333;
}
```

Add margins and padding to separate text and pic and remove bullets

```css
.pic ul {
	padding: 0;
	margin-left:140px;
	list-style: none;
	border: 3px double #552;
}
```
Format content:

```css
.pic .title {
	font-weight: bold;
	font-size: 1.5rem;
	padding-top: 0.5rem;
	border-bottom: 1px solid #333;
	padding-left: 0.5rem;
}
.pic .catno {
	color: #777; 
	text-align: right;  
}
.pic .price {
	color: #777; 
	text-align: right;
}
```

Slide items against each other.

Establish a base height for the list items

```css
.pic li {
	line-height: 1.2rem; 
}
```

EDIT - Move catno over

```css
.pic.catno {
  ...
	margin-right: 4.5rem;  
}
```

EDIT - Slide price up

```css
.pic .price {
  ... 
	margin: -1.2rem 0 0 0;
}
```

Boxing the information - vertical borders left of catno and between catno and price - auto allows movement to right as needed

EDIT 

```css
.pic .price {
  ...
	margin: -1.2rem 0 0 auto;
	width: 4rem;
	border-left: 1px solid #333;
}

.pic .catno {
  ...
	margin: 0 4.5em 0 auto;
	width: 4rem;
	border-left: 1px solid #333;
}
```

EDIT  move the price over a bit to avoid double border

```css
.pic .price {
  ...
	margin: -1.2rem 3px 0 auto;
}
```

Increase spacing between items
```css
.tn img {
  ...
	margin-bottom: 1rem;
}
```

##Styling a List with Floats

In this exercise we will focus on list styling and navigation but instead of using `display: inline` or  `display: inline-block` to create horizontal navigation we will use floats.

Create an HTML file with the following code and save it as `cuisines.html`. Take a moment to examine the default margin and padding using the inspector.

```html
<ul id="nav">
	<nav>
		<li class="t-cuisines"><a href="cuisines.html" >Cuisines</a></li>
		<li><a href="#">Chefs</a></li>
		<li><a href="#">Reviews</a></li>
		<li><a href="#">Delivery</a></li>
	</nav>
</ul>
```

Add some basic formatting.

```css
body {
	margin:0;  	padding:0; 	font-family:"Lucida Grande", sans-serif;  	font-size:large;
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
	margin:0;
	padding:0;
	float:left;
}
```

Notice what happened to the `<ul>`'s height. The `<li>` items no longer force the parent `<ul>` element to expand to contain them. This behavior, know as collapsing, occurs whenever all the direct children of a container element are floated. In this case the `<ul>`  has collapsed. This behavior is important as collapsing is a common design issue. We will cover a number of methods to prevent this.

* Apply CSS overflow: auto; to the collapsed element:
* float a float (or "FNE" - float nearly everything) - apply a float to the collapsed element
* the clearfix hack - this entails creating a utility class and will be covered later
* adding a clearing div - this entails adding an HTML element to the page and while officially acknowledged, is discouraged

One problem with the first method is that it can create scroll bars in the layout.

Try adding the following to the CSS in order to see the scroll bars (remove it before proceeding).

```css
overflow:scroll; 
width:200px;
height:40px;
```

For our current example let's use the second method.

Try adding a float to the element that has collapsed (add the bold text).

```css
#nav { 
	background:#ffcb2d; 
	margin:0;
	padding:10px 0 0 46px; 
	list-style:none; 
	float:left; 
}
```

Note that the width has changed. Boxes are 100% width by default (they stretch to fill their container). Floating the collapsed element causes it to contract to contain its children.

Since we want the <ul> to extend the width of the window let's fix the width.

```css
#nav {
	...
	width:100%;
}
```

Remember, when you float an element you usually have to specify a width.

Extend the background property to add a background graphic to the <ul>.

```css
#nav { 
	...
	background:#ffcb2d url(i/nav_bg.gif); 
	...
}

Add positioning to the background.

```css
#nav { 
	...
	background:#ffcb2d url(i/nav_bg.gif) repeat-x bottom left;
	...
}
```

Adjust font size for the tabs:

```css
li { 
	...
	font-size: 85%;
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
	text-decoration:none;
	color:#333; 
	padding: 4px 8px;
	border: 1px solid #9b8748;
	margin: 0 6px 0 0;
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

Note what happened to the background graphic we placed in the <ul>. It is hidden behind the (now not transparent) anchors. 

Now, as with the previous exercise, we will create hover states for our tabs. This time we'll swap out the background image.

```css
a:hover { 
	background: #fff url(i/on_bg.gif) repeat-x top left; 
}
```

Let's match the border color to the image's.

```css
a:hover { 
	background: #fff url(i/on_bg.gif) repeat-x top left; 
	border-color:#727377; 
}
```

The slightly darker color helps the inactive tabs to appear to recede into the background.

Finishing touches

This part is a but tricky since it uses padding to show or hide the background graphic running along the bottom of the <ul>. We will be increasing the height by one pixel on hover to hide the image. 

Recall that the padding on the bottom of the anchor tags was 4px. Let's increase the padding on the hover state to 5px.

```css
a:hover { 
	background: #fff url(i/on_bg.gif) repeat-x top left; 
	border-color:#727377; 
	padding-bottom:5px; 
}
```

If you roll over the tabs now the height of the anchor increases by one pixel causing the <ul> to expand as well and thus showing the border along the bottom under the inactive tabs. Due to the fact that there is no selected tab (only hovered) the height of the element appears to jump slightly. Let's assume that one of the tabs will always be highlighted.

Create a second selector to highlight one of the anchors.

```css
a:hover, #t-cuisines a { 
	background: #fff url(i/on_bg.gif) repeat-x top left; 
	border-color:#727377; 
	padding-bottom:5px; 
}
```

Note that when you use two selectors they must be separated by a comma.

Let's extend the tabs treatment so it acts as navigation by adding an id to the page itself. (Note that the naming convention of the id's uses "t-". The t stands for tabs.

```html
<body id="cuisines">
	<ul id="nav">
		<li id="t-cuisines"><a href="cuisines.html">...
		<li id="t-chefs"><a href="chefs.html">...
		<li id="t-reviews"><a href="reviews.html">...
		<li id="t-delivery"><a href="delivery.html">...
	</ul>
</body>
```

Now, if we add an id to the body tag we can edit the selector to make it page specific.
Add id="cuisines" to the body tag.

```html
<body id="cuisines">
```

Edit the second selector to make the tab highlighting specific to this page.

```css
a:hover, 
body#cuisines #t-cuisines a 
{
	background: #fff url(i/on_bg.gif) repeat-x top left;
	border-color:#727377;
	padding-bottom:5px;
}
```

We are going to create a second HTML page shortly so, to make our lives easier, let's copy our code into an external CSS file and save it as styles.css into a new directory called css.

Last time we used the CSS method @import to bring the styles back in, let's use the HTML method this time.

```html
<link href="styles.css" rel="stylesheet" type="text/css">
```

Note that the paths to the images are no longer correct.

Save a new copy of the HTML page as chefs.html and edit the ID for the chefs page.

```html
<body id="chefs">
```

Add a new selector to the CSS.

```css
a:hover, 
 body#cuisines #t-cuisines a , body#chefs #t-chefs a {
	background: #fff url(i/on_bg.gif) repeat-x top left;
	border-color:#727377;
	padding-bottom:5px;
}
```

Now when you navigate between the two pages you should see a friendly reminder of what page you are on courtesy of the CSS file.


##Homework

Note: the finished files I was working on in class can be [downloaded](http://daniel.deverell.com/css-files/foundation-fall-2016/session1-master.zip) for reference.

1. 



##Reading 
* CSS Mastery: Advanced Web Standards Solutions - chapters 4-5
