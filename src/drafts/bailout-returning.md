---
title: Bailout Returning
---

Talk about why I prefer

```jsx
const foo = input => {
	if (invalid(input)) {
		return null;
	}

	return <Component {...input} />;
};
```

to

```jsx
const foo = input => {
	if (valid(input)) {
		return <Component {...input} />;
	} else {
		return null;
	}
};
```
