---
title: Scrollable site with fixed navigation
type: blog
tags: [ snippet, html, css ]
---

__virtues:__
- uses the body to scroll, no need for nested `<div>`s with `overflow: auto`
- compartmentalizes the `header`, `footer` and `main` asap
- creates a new stacking context for header and footer
   - optimises animations that only affect the header or the footer
   - means you don't have to mess around with `z-index` to keep them above `<main/>`

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
  overflow-y: scroll;
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
