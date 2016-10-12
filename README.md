#FOUNDATIONS Session Two

##Sushi Cleanup

* create a separate css file and link it back to the documents
* reset the browser defaults:

An elements margins may stick out from its containing elements. Combined with the fact that various browsers may use different settings for default margins and padding on items it makes it very hard to accurately style a page.

Add a simple reset to the CSS style sheet:

```css
* { 
	margin:0;  
	padding:0; 
}
```

##Google font

```css
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
$font-family: 'Lato', sans-serif;
```

##Floating Image Gallery
* keep as many images as possible above the fold
* no horizontal scroll bars 

###Lay of the land

The following classes are used in the html:

* pic - any div with a picture
* ls - landscape 128 x 96
* pt - portrait 96 x 128
* tn - thumbnail link
* title / catno / price (not shown in this template)


###CONTACT SHEET  

(start-contact.html)

Add and examine the normalize.css file

```html
<link rel="stylesheet" href="styles/reset-min.css" />
```

Add the base styles:

```css
body {
	background:#eed;
	padding:1em;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 62.5%; 
}
#footer {
	padding-top: 3em;
	font-size: 1.2em; 
}
```

Note the relation between the font size and padding in the inspector. Try changing the base font size to 1em to see what happens. Add:

```css
.pic {
  float: left; 
  height: 128px; 
  width: 128px;
  background: #fff;
  border: 1px solid black;
}
Edit
#footer { 
	padding-top: 3em; 
	font-size: 1.2em;
	clear:both;
}
```

Note the clear property and the effect it has on the collapsed body. No floating elements are allowed on the left or the right side of a cleared both item. See Coyer’s article.

Also note that the Yahoo reset removes borders from images when displayed as part of a link and the use of multiple class names in the HTML. Edit .pic:

```css
.pic {
  float: left; 
  height: 128px; 
  width: 128px;
  background: #fff;
  border: 1px solid black;
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

Edit the pic class to show more background in preparation for the background image which is 160px square.


```css
.pic {
  float: left; 
  height: 128px; 
  width: 128px;
  background: #fff;
  border: 1px solid black;
  margin: 5px 3px; 
  padding: 16px; 
  background: url(styles/img/frame-ls.gif) center no-repeat;
}
```

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
  margin-left:140px;
  list-style: none;
  border: 3px double #552;
}
```
Format content:

```css
.pic .title {
  font-weight: bold;
  font-size:1.5em;
  padding-top:0.5em;
  border-bottom:1px solid #333;
  padding-left:0.5em;
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
  line-height: 1.2em; 
}
```

EDIT - Move catno over

```css
.pic.catno {
  ...
  margin-right: 4.5em;  }
```

EDIT - Slide price up

```css
.pic .price {
  ... 
  margin: -1.2em 0 0 0;  }
```

Boxing the information - vertical borders left of catno and between catno and price - auto allows movement to right as needed

EDIT 

```css
.pic .price {
  ...
  margin: -1.2em 0 0 auto;
  width: 4em;
  border-left: 1px solid #333;    }

.pic .catno {
  ...
  margin: 0 4.5em 0 auto; 
  width: 4em;
  border-left: 1px solid #333;  }
```

EDIT  move the price over a bit to avoid double border

```css
.pic .price {
  ...
  margin: -1.2em 3px 0 auto; }
```

Increase spacing between items
```css
.tn img {
  ...
  margin-bottom: 1em;
}
```


##Homework

Note: the finished files I was working on in class can be [downloaded](http://daniel.deverell.com/css-files/foundation-fall-2016/session1-master.zip) for reference.

1. 



##Reading 
* CSS Mastery: Advanced Web Standards Solutions - chapters 4-5
