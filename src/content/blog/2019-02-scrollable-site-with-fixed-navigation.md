---
title: Scrollable site with fixed navigation
tldr: "Making your header and footer position: fixed makes them much easier to animate, and puts them in a new stacking context."
type: blog
tags: [snippet, html, css, react]
published: 2019-02-08
---

I've often wanted to make a website/webapp that satisfies some or all of the following criteria:

- has body contents that will overflow the screen size if there's lots of content
- has a header that stays locked in place at the top of the screen.
- has a footer that is always either at the bottom of the screen, or the bottom of the page.

The following is my general purpose solution for achieving this...

**virtues:**

-   uses the body to scroll, no need for nested `<div>`s with `overflow: auto`
-   compartmentalizes the `header`, `footer` and `main` asap
-   creates a new stacking context for header and footer
    -   optimises animations that only affect the header or the footer
    -   means you don't have to mess around with `z-index` to keep them above `<main/>`

## Pure HTML

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
html,
body {
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

## With React
You can use react to create a solution identical to the above, but in some situations, the following idea might be more suitable

```jsx
import React from "react";
import styled from "@emotion/styled";

const sharedStyled = ({ theme }) => ({
	minHeight: theme.headerHeight,
	backgroundColor: theme.headerColor,
});

// a component to take up space above the Main, that exists as part of the flow
const HeaderSpacer = styled.div(sharedStyled, { width: "100%" });
// a component with the same dimensions that exists above the flow.
const HeaderFixed = styled.div(sharedStyled, {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
});

const Header = () => (
	<React.Fragment>
		<HeaderSpacer />
		<HeaderFixed />
	</React.Fragment>
);

const App = () => (
	<React.Fragment>
      <Header />
      <main></main>
	</React.Fragment>
);
//follow the same logic to make a Footer
```
