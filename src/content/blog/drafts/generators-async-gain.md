---

title: Generators and async, what have we gained?
emoji: 🤷
tags: [ javascript, async, await, generators, opinion, ]

---

A lot of fuss has been made over the last year or two about the introduction of 'generators' and 'async'/'await' to the JavaScript language. It often seems you can't mention ES6 without in the same breath singing their prases. 

Since first hearing about both these new language features, I've had my doubts as to their usefulness. I'll try to lay out some of my problems with them below.

> This post does not serve as a good introduction to these language features, and assumes you already know a bit about them

## Generators

### The Itterator Protocol

The `itterator` protocol, is undenaibly an extremly useful addition to the langauge. Anyone who's tried to itterate over the contents of an array using the seeminly obvious `for( x in arr )` will find the following insanity:

```javascript
for( x in [ "a", "b", "c", ] ){
	console.log(x);
}
// output:
// 0
// 1
// 2
```

There are very good reasons why `for in` opperates like this, but none of those reasons outweigh the lack of a good way to itterate over collections.

Thankfully, with the introduction of the `itterator` protocol, coupled with the new `for of` loop, we finally have this functionality:

```javascript
for( x of [ "a", "b", "c", ] ){
	console.log(x);
}
// output:
// a
// b
// c
```

### Generators 101
The 'itterator' protocol is foundational to javascript generators, which act as a way to progamatically produce new values to be itterated over:

```javascript
function* gen(){
	yield "a";
	yield "b";
	yield "c";
}

for( x of gen() ){
	console.log(x);
}
// output:
// a
// b
// c
```

At first this seems like a pretty nifty little feature, a coroutine that can be called many times, yielding the next value for processing each time!

However, this same effect can be achived with the following code:

```javascript
//hand spun itterator
const foo = () => ({
	[Symbol.iterator]: () => ({
		items: [ "a", "b", "c", ],
		i: 0,
		next: () => ({
			done: this.items.length === i,
			value: this.items[i++],
		})
	})
});
```

Lets look at the pros, cons, and similarities of both aproaches.

#### Pro Generators:
The generator is ceartainly shorter and syntactically simpler, and there are probably some browser level optimisations that can be done to make them perform better than the hand spun solution.

#### Pro Hand Spun
Asside from `Symbol.iterator` this is all familiar javascript, it all works how you'd expect, and deals with familiar concepts like objects and arrow functions. It doesn't require you to lean any new syntax to understand, providing you know what sort of object `next` should return. If you wanted to make an itterator with more complex logic, 

#### Similarities
Both of these aproaches use the itterator protocol, both of them yield the exact same results, and both of them provide a nice wrapper for a stateful series of opperators.

### State of the Problem
My core complaint about generators is that they partially obsfucate the fact that they are a highly stateful langauge construct. It's been known for a long time that a whole class of errors and issues can be mitigated by reducing the hidden state of your components. __Generators are all about hiding state behind a nice pure seeming interface.__ In fact, much as `class`es and OOP have fallen out of vouge, our generator is functionally identical to the following class:

```javascript
class Gen {
	//setup the state of the generator
	constructor() {
		this.items = ["a", "b", "c"];
		this.i = 0;
	}

	//yield the next value
	next() {
		return {
			done: this.items.length === this.i,
			value: this.items[this.i++],
		};
	}
 
	//helper method for getting new instances of the generator
	static ittr() {
		return {
			[Symbol.iterator]: () => new Gen(),
		};
	}
}

for (let x of Gen.ittr()) {
	console.log(x);
}
```

### Playing with Fire
There's nothing intrinsicly wrong with generators themselves; I will probably end up using them a few times, as they provide the cleanest, simplest way to create your own custom components that implement the itterator protocol.

But we really aught to ask ourselves, was it really worth creating a whole new language feature, one that hides its own stateful nature, just to act as some syntactic sugar?

## `async` / `await`

__Praises be to The Christ Child!__ gone are the days of ugly, clunky, cumbersome promises:

```javascript
doAThing()
.then( x => doAnotherThing(x)
```

It's the Year of our Lord 2018 and it's time to do some fucking `async` shit!

```javascript
const x = await doAThing()
doAnotherThing(x)
```

I ask you the same retorical question every _"intro to async/await"_ tutorial has ever asked: __"Doesn't that look CLEANER!?!?"__

### ...umm
Well for starters, no, not perticuarly. It ceartainly looks more like the traditional sequential imperative code many js developer are used to if that's what you mean. But this _isn't_ sequential imperative code, this is asyncronous code.

When you replace promise flow in your code with `await` based code, you hide the fact that you're performing a series of asyncronus opperations. This is a double edged sword:

+ Pro: You don't have to think about the fact that you're programming asyncronously.
+ Con: You won't think about the fact that you're programming asyncronously.

### Promises
Promises do two things very well:

#### They provide a universal langauge construct for asyncronose programming
Node style callbacks were a good solution to this problem, but callback hell was a very real thing, and they were a very node-centric solution. Promises are a tool that is useable across all platforms, with near 100% adoption, and provide a really simple API.

#### They provide a system of encapsulation and decoupoling for asyncronous opperations
Each function passed into a `then` is its own self contained unit. It follows very simple rules:

+ Recieve the result of the previous promise as output
+ Return a value, or a promise, to be handled by the function in the next `then`

This means that every step in a chain of asyncronouse operations can be defined as a uniary function that can be reused anywhere, as added into the chain as easy as this:

```javascript
const foo = x => Promise.resolve( "_" + x );

doSomething().then(foo)
```

This structure lends itself very well to a functional style, function reuse, and code encapsulation; all things which are highly usefull for producing high quality code.

### I'm a-waiting
Straight off the bat, 

### What's in a name
I think a lot of the unwillingness to treat promises as they aught to be treated comes from their name

