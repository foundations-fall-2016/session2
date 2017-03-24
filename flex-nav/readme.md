## FlexBox
* CSS Flexible Box Layout Module
* A simple guide to the various CSS properties on [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Try https://www.w3schools.com/css/css3_flexbox.asp

### A simple Flex Nav

<img src="hero-1.png">

[Font Awesome](http://fontawesome.io/)

```
<link rel="stylesheet" href="font-awesome-4.6.3/css/font-awesome.min.css">

<!-- Logo -->
<i class="fa fa-bullseye fa-3x"></i>

<!-- Gear -->
<i class="fa fa-gear"></i>
```

```
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.site-header {
  background: #0D1313;
  color: white;
  display: flex;
  align-items: center;
  padding:0.5rem;
}

.logo {
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 10px;
}

.site-nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
.site-nav  a {
  text-transform: uppercase;
  text-decoration: none;
  color: #CDD0D0;
  padding: 20px;
  display: inline-block;
}
.site-nav .active a {
  font-weight: bold;
  color: #62DEBE;
  background: #444;
}

.account-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.account-dropdown ul {
    display: none;
}

.sign-out-link {
  color: #62DEBE;
  font-size: 0.8rem;
  margin-left: 10px;
  text-transform: uppercase;
}

@media (max-width: 600px) {
  .site-header {
    flex-wrap: wrap;
  }
  .site-nav {
    order: 2;
    background: #333;
    width: 100%;
  }
}


```
