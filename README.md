# II Sushi

## Homework

1. Install Node and Git on your personal computer
1. Add a JavaScript/CSS powered popover window to your page. Be sure to review the documentation for [addEventListener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp), [querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp), and [classList](https://www.w3schools.com/jsref/prop_element_classlist.asp).

## Reading

* HTML5 and CSS3: Building Responsive Websites, Module 1 - chapters 1 and 2, Module 2 - chapter 1 to 4
* [Responsive Web Design](https://abookapart.com/products/responsive-web-design) - carefully read the section on Media Queries

## Server Accounts

[See session one](https://github.com/front-end-foundations/session1)

## Sushi - Converting to Standards (continued)

### Floats

Format the pull quote and image:

```css
blockquote {
  float: right;
  width: 40%;
  padding: 16px;
  font-size: 24px;
}
article img {
	float: right;
}
```

Note the float property and how the text wraps around it before and after we have defined a width. By default, the floated container shrinks to the width determined by the content.

### Adding color to our layout

Edit the CSS body rule.

```css
body {
  ...
  background-color: #ddd;
}
```

Note that the wrapper's background is transparent and shows through to the gray applied to the body.

Let's add a white background to wrapper.

```css
#wrapper {
  ...
  background-color: #fff;
}
```

Add a drop shadow to the CSS for the info div using the inspector (...).

```css
aside {
  box-shadow: 3px 3px 3px #ddd;
  ...;
}
```

Add a box shadow to the wrapper CSS:

```css
#wrapper {
  box-shadow: 10px 10px 20px #666;
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

Note the body background color is grayed out in the inspector. Neither it nor the margin are inherited by other elements.

### Formatting the content

Note the h1's margin outside the containing elements (not part of the box model).

```css
h1,
h2 {
  color: #600;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 3rem;
  margin-bottom: 0;
}
h2 {
  font-size: 32px;
  margin-top: 0;
}
```

Note - selector strength here. Note that the lack of namespacing allows this to effect the Matsu text as well.

Namespace the header items:

```css
header h1,
header h2 {
  color: #600;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 3rem;
  margin-bottom: 0;
}
header h2 {
  font-size: 32px;
  margin-top: 0;
}
```

Format elements in the list and table

```css
aside th {
  text-align: right;
}

aside ul {
  list-style: none;
  margin: 1em;
  padding: 0;
}
```

### Inline, In Page & External CSS

We've already seen the link tag and @import methods of adding css. Let's examine all the ways to add CSS to an HTML document:

* Inline via the HTML `style=` attribute
* In page via the HTML `<style>` tag
* As an external .CSS file via linking (HTML `<link>` tag)
* As an external .CSS file via importing (CSS `@import` statements)

Inline styles are inefficient:

```html
<p style="margin-top: 12px;">
```

However, this method is frequently used when dynamically changing the page after it has been loaded in the browser.

Demonstrate: using the inspector on a dynamic page (e.g. http://www.w3schools.com/jquery/jquery_animate.asp) or this page on [apple.com](https://www.apple.com/homepod/). Note how it displays animation and the purple highlighting in the inspector.

Note: the css-based alternative for:

```html
<link href="css/styles.css" rel="stylesheet" media="all" />
```

is:

```html
<style>
  @import url("css/styles.css");
</style>
```

We are not using this method.

### Highlight one of the tabs

This is a simple way to create color coded navigation on a web site.
Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review">
```

Add a list item to the nav list with a class of review-link.

```html
<li class="t-review"><a href="#">Reviews</a></li>
```

Add the following to our CSS block:

```css
.p-review .t-review a {
    color: #600;
    background: #f0dfb4;
 }
```

The Reviews tab is now highlighted.

### CSS Variables

[These](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) allow us to store commonly used information as a variable for use throughout our css.

See also [Can I Use](https://caniuse.com/#search=css%20variables)

```css
html {
	--bg-color: #f0dfb4;
  --badass: #bada55;
  --rust: #600;
  --radii: 3px;
}
```

```css
.nav a {
	...
  background-color: var(--bg-color);
}

aside {
	...
  background-color: var(--bg-color);
}
```

## Terminal

There are many good reasons to aquire a basic understanding of the command line terminal. In the class we will use the terminal for GIT and GITHUB as well as for Node Package Manager (NPM).

The Windows equivalent to Mac's Terminal app is PowerShell but there are important differences and you WILL NOT be able to run Python as shown below.

Some Windows users use alternates such as [cmder](http://cmder.net/) or the shell that comes with [Git for Windows](https://gitforwindows.org/) aka "Git Bash." (Check to see if Git Bash is installed on the class computers.)

Some basic shell commands:

```sh
cd
cd <path-to-folder>
cd ..
cd ~
```

```sh
node --version
npm --version
git --version
pwd
ls
ls -l
```

Windows examples for `cd` / `ls`:

```sh
dir C:\windows
chdir C:\windows
```

On a mac you can `cd` to a folder via drag and drop or by copying and pasting a folder into the terminal.

`cd` into today's folder and enter the following command into Terminal:

```sh
python -m SimpleHTTPServer 9000
```

Access `localhost:8000` in Chrome. Note the directory listing and the default index.html.

## DOM Scripting I

### Variable assignment and types.

In the browser console (copy paste one line at a time):

```js
var width = 100;
width;
typeof width;

width + 300;
width;
width = width + 300;
width;

let wide = true;
wide;
typeof wide;
let wide = false;
wide = false;

const testString = '123456';
testString;
typeof testString;
const testString = 'abcde';
testString = 'abcde';
```

Link scripts.js to index.html:

```html
<script src="js/scripts.js"></script>
```

Use the code therein to examine code before proceeding.

* Selecting items with [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), see also [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll) (we'll work with this later)
* Attaching events with [addEventListener('event', function)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), see also [event types](https://developer.mozilla.org/en-US/docs/Web/Events)
* [Functions](https://developer.mozilla.org/en-US/docs/Glossary/Function)
* Manipulating HTML with [classList](https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/)

Add a link to a [Google map](https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734) to the map link in the aside:

```html
<li><a class="map" target="_blank" href="https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734">Map</a> | <a href="#">Directions</a></li>
```

Note the target attribute for the anchor tag. We have also used the class `map` to name this link.

Add a class of `.map` to the map link

```html
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

```html
<div class="popover">
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.821674756671!2d-73.97492268461596!3d40.67789794763805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba8edab126b%3A0xfaa0551477e2ec72!2sGeido!5e0!3m2!1sen!2sus!4v1490213487125" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
```

```css
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

```css
.showme {
	display: block;
}
```

```html
<script>
	var mapClicker = document.querySelector('.map')
	var popOver = document.querySelector('.popover')
	mapClicker.addEventListener('click', show)

	function show(e){
		popOver.classList.toggle('showme')
		e.preventDefault()
	};
</script>
```

# End Sushi

## Styling a List with Floats

<img src="Tabs/tabs-image.jpg">

Review the navigation from last week.

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
	<ul id="nav">
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
#nav {
	background: #ffcb2d;
	margin: 0;
	padding: 10px 0 0 46px;
}
```

Firstly, remove the bullets from the `<ul>`:

```css
#nav {
	... list-style:none;
}
```

Then float the list items to the left (after removing the possibility that any margins or padding might be applied).

```css
li {
	float: left;
}
```

Notice what happened to the `<ul>`'s height. The `<li>` items no longer force the parent `<ul>` element to expand to contain them. This behavior, know as collapsing, occurs whenever all the direct children of a container element are floated. In this case the `<ul>` has collapsed. This behavior is important as collapsing is a common design issue.

There are a number of methods in use to prevent this:

* Apply CSS overflow: auto; to the collapsed element

* float a float (or "FNE" - float nearly everything) - apply a float to the collapsed element

* the clearfix hack - this entails creating a utility class and will be covered later

* adding a clearing div - this entails adding an HTML element to the page and is discouraged

For our current example let's use the second FNE method.

Try adding a float to the 'collapsed' element:

```css
#nav {
	... float:left;
}
```

Note that the width has changed. Boxes are 100% width by default (they stretch to fill their container). Floating the collapsed element causes it to contract to contain its children.

Since we want the `<ul>` to extend the width of the window let's fix the width.

```css
#nav {
	... width:100%;
}
```

_When you float an element you usually have to specify a width._

Extend the background property to add a background graphic to the `<ul>`.

```css
#nav {
	... background:#ffcb2d url(i/nav_bg.gif);
}
```

Aside: demo the background property using `pattern.gif`.

Add positioning to the background.

```css
#nav {
	... background:#ffcb2d url(i/nav_bg.gif) repeat-x bottom left;
}
```

Next we'll tackle the anchor tags: `<a>`. Add the following to our CSS block.

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
	... padding-bottom:5px;
}
```

If you roll over the tabs now the height of the anchor increases by one pixel causing the `<ul>` to expand as well and thus showing the border along the bottom under the inactive tabs.

Due to the fact that there is no selected tab (only hovered) the height of the element appears to jump slightly. Let's assume that one of the tabs will always be highlighted.

Create a second selector to highlight one of the anchors.

```css
a:hover,
.t-cuisines a {
	...;
}
```

Note that when you use two selectors they must be separated by a comma.

Many prefer to keep the multiple selectors on separate lines like so:

```css
a:hover,
.t-cuisines a {
	...;
}
```

Now, if we add an id to the body tag we can edit the selector to make it page specific.

Add `id="cuisines"` to the body tag.

```html
<body id="p-cuisines">
```

Edit the second selector to make the tab highlighting specific to this page.

```css
a:hover,
#p-cuisines .t-cuisines a {
	...;
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
#p-cuisines .t-cuisines a,
#p-chefs .t-chefs a {
	...;
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

# Notes

### Using Flexbox (optional - demo only)

```css
.nav {
	display: flex;
	padding: 0;
}
.nav li {
	flex: 1;
	background-color: #f0dfb4;
	list-style: none;
	text-align: center;
}
```
