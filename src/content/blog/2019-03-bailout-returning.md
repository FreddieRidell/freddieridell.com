---
title: Bailout Returning
abstract: My prefered way of handling returning from functions, and why I prefer it.
tldr: Instead of wrapping most of your function in a conditional, why not just return early?
published: 2019-03-04
type: blog
tags: 
   - js 
   - code
   - thinkpiece
---

Often in a function you have to deal with a special case. When I say "special case" I don't mean the sort of special case that's been tacked on later in a functions life ("ohh, `foo` does almost exactly what I need, if I just add a new parameter I can make it..." ←  (never do this)).

In this situation, the special cases I'm talking about are ones that are know at the functions original authoring; eg:

* the function takes an array **which might be empty**
* the function takes a parameter **which might be `null`**
* the function performs an operation **unless certain, very specific conditions are met**

In these situations, 95% of the body of the function won't do anything, the function should simply return whatever value it's meant to in these special cases.

## Solution 1

```js
const foo = input => {
	if (isValid(input)) {
      //do lots of calculation and...
      return something;
	} else {
		return null;
	}
};
```

Here `isValid` is our simple check for special cases, `if` no special case problems are found `then` we do our calculations, `else` we return a default value that signals we couldn't do anything.
This style of solution has a fair amount to recommend it:

* We're using `happyPath == true`, `sadPath == false`; a useful convention
* We have a balanced `else` statement, which can often make code easier to reason about.

However, I prefer a different way of handling these special cases:

## Solution 2

```js
const foo = input => {
	if (isInvalid(input)) {
		return null;
	}

   //do lots of calculation and...
   return something;
};
```

Here, we instead check `isInvalid`, `if` there is a special case problem `then` we return our default value, `else` we carry on with the function calculations and return.

I prefer this style, as it no longer suggests that this special case handling is part of the core logic of the function. When the special case handling is in an `if/else` branch it means 95% of the logic of the function is wrapped in a conditional that has no real baring on its functionality. This is makes it harder to reason about the function, and also increases indentation.

This hopefully becomes clearer when you compare a function with a special case check to the following variants:

### Compared with no special cases

```js
const foo = input => {

	//if (isInvalid(input)) {
		//return null;
	//}

   //do lots of calculation and...
   return something;
};
```

### Compared with multiple special cases

```js
const foo = input => {
	if (isInvalidReason1(input)) {
		return null;
	}
	if (isInvalidReason2(input)) {
		return null;
	}
	if (isInvalidReason3(input)) {
		return null;
	}

   //do lots of calculation and...
   return something;
};
```

## Use Cases
A very common use case for bailout returning is [redux][redux] reducers:

```js
const reducer = (state, action) => {
   if(!action.success){
      return state;
   }
      
   //do lots of calculation and...
   return newState;
}
```

or in [react][react] components:

```js
const Component = (props) => {
   if(props.error){
      return null
   }

   return <div>
      { /* lots of clever components... */ }
   </div>
```

## Conclusion

Although this seems like a very small and trivial change, it often really helps me to reduce the complexity of a function, reason about it more easily and reduce my cognitive load. Next time you find yourself wrapping most of your function code in a conditional, just to return `null`, consider [Bailout Returning](.) instead.

[react]: https://reactjs.org/
[redux]: https://redux.js.org/
