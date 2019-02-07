---
title: Scrollable site with fixed navigation
type: blog
tags: [ snippet, html, css ]
---

```html
<html>
   <head>
      <title>Scrollable site - fixed navigation</title>
   </head>
   <body>
      <header>This is the header</header>
      <main>This is the content</main>
      <footer>This is the footer</footer>
   </body>
</html>
```

```css
html, body {
  height: 100%;
  margin: 0;
  min-height: 100%;
}

body {
  overflowy: scroll;
  --header-height: 30px;
  --footer-height: 30px;
}

header {
  background-color: red;
  left: 0;
  max-height: var(--header-height);
  min-height: var(--header-height);
  position: fixed;
  right: 0;
  top: 0;
}

main {
   padding-top: var(--header-height);
   padding-bottom: var(--footer-height);
}

footer {
  background-color: blue;
  bottom: 0;
  left: 0;
  max-height: var(--footer-height);
  min-height: var(--footer-height);
  position: fixed;
  right: 0;
}
```
