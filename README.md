#FOUNDATIONS Session Two

##Server Accounts

Username is the first seven letters of your last name + first letter of first name

Password is first initial, last initial, 123890

e.g. devereld // dd123890

Hostname is oit2.scps.nyu.edu

Test to see if your account is active by entering this URL into a new browser tab (use your username after the tilde):

http://oit2.scps.nyu.edu/~******/
Try using an FTP client.

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



##Styling a List with Floats

In this exercise we will focus on list styling and navigation but instead of using `display: inline` or  `display: inline-block` to create horizontal navigation we will use floats.

* Install [package control](https://packagecontrol.io)
* Install [emmet](https://packagecontrol.io/packages/Emmet)
* Review [emmet syntax](http://docs.emmet.io/abbreviations/syntax/)

Create an HTML file with the following code and save it as `cuisines.html` using emmet:

```sh
!

ul>li*4>a[href="#"]{link}

nav>ul>li.t-cuisines*4>a[href="cuisines.html"]{cuisines}
```
Edit the html to complete the classes and links:

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
	padding:0;
	font-family:"Lucida Grande", sans-serif;
	font-size:large;
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

Since we want the `<ul>` to extend the width of the window let's fix the width.

```css
#nav {
	...
	width:100%;
}
```

Remember, when you float an element you usually have to specify a width.

Extend the background property to add a background graphic to the `<ul>`.

```css
#nav { 
	...
	background:#ffcb2d url(i/nav_bg.gif); 
	...
}
```

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

Let's match the border color to the image's.

```css
a:hover {
	background: #fff url(i/on_bg.gif) repeat-x top left; 
	border-color: #727377; 
}
```

###Finishing touches

This part is a but tricky since it uses padding to show or hide the background graphic running along the bottom of the `<ul>`. We will be increasing the height by one pixel on hover to hide the image. 

Recall that the padding on the bottom of the anchor tags was 4px. Let's increase the padding on the hover state to 5px.

```css
a:hover { 
	background: #fff url(i/on_bg.gif) repeat-x top left; 
	border-color:#727377;
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

###Removing the on- off- images

Images take time to download - let's remove as many as we can.

* [Intro to gradients in css](https://css-tricks.com/css3-gradients/)
* [Gradient editor](http://www.colorzilla.com/gradient-editor/)

Edit the background properties for the tabs:

background-image: linear-gradient(to bottom, rgba(255,236,165,1) 0%,rgba(232,213,149,1) 6%,rgba(253,233,162,1) 94%,rgba(253,233,162,1) 100%);

background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(224,226,240,1) 6%,rgba(254,254,254,1) 53%);


##Homework

My final files are available [here](http://daniel.deverell.com/css-files/foundation-fall-2016/session2-master.zip)

1. Do the homework from last week. 

1. Review the steps we used to create a tab navigation interface.

1. Incorporate the new float-based tabs into your homework from last week. Be sure you can navigate between at least two pages and upload them to your NYU server space. Test and email me the link.



##Reading 
* CSS Mastery: Advanced Web Standards Solutions - chapters 4-5

Notes





