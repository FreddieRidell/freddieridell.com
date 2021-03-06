---
title: glot
repo: FreddieRidell/glot
npm: "@freddieridell/glot"
tags: [js, library, glot, i18n]
published: 2018-12-28
type: open-source
abstract: A tiny, simple, powerful, expressive, i18n library
lang: js
---

I wanted to try my hand at making an [`i18n`][i18n] library that was as ergonomic and easy to use as possible, without sacrificing versatility.

After it was done, I was so happy with the results, that I also wanted to try releasing it as a propper NPM package for public consumption.

I'm pretty happy about the size of bundle that I'm publishing, and I'm going to be using it personally from now on to iron out any kinks.

You can get it [here][npm], and browse the source [here][repo]

## Library Deep Dive

After looking at a few other `i18n` js libraries, I'd become anoyed that none of them were using [tagged template literals][templates] to provide a great Developer Experience. It seems like an obvious choice, as `i18n` is primarily a problem of turning simple string keys into runtime calculated values. `glot` attempts to provide this.

### Basic API

`glot` exposes a function that takes a hierarchical dictionary of values as input, and returns a template tag that can be used to access those values

```js
const glot = createGlot({
	en: {
		greeting: "hello",
		sales: {
			CTA: "Buy our Shit!",
		},
	},
	fra: {
		greeting: "bonjour",
		sales: {
			CTA: "Buy le Shite!",
		},
	},
})({ lang: "en" });

console.log(glot`greeting`);
// => "hello"
console.log(glot`sales.CTA`);
// => "Buy our Shit!"
```

### Other Languages

That template tag can then be repeatedly overridden to change the language, if nescisary

```javascript
const newGlot = glot({ lang: "fra" });

console.log(glot`greeting`);
// => "bonjour"
console.log(glot`sales.CTA`);
// => "Buy le Shit!"
```

Reconfiguring `glot` in this way creates a new `glot` template tag, that can be re-configured again.

### Creating Formatting Functions

You don't always want to return a simple string from your `i18n` tool, so `glot` provides a simple way to create functions from your dictionary

```javascript
import createGlot from "@freddieridell/glot";
import { format as formatDate } from "date-fns/fp";

//initalise with dictionary
const glot = createGlot({
	en: {
		date: "yyyy-MM-dd",
	},
})({ lang: "en" });

const localisedDateFormatter = glot({
	mkFn: formatDate,
})`date`;

console.log(localisedDateFormatter(new Date()));
// => "2018-12-28"

//or do all this inline:
glot({ mkFn: formatDate })`date`(new Date());
```

For more complex procedures you might have to move a bit more logic into the function, but this covers a lot of use cases with a very minimal API.

### Start Using Today

`glot` should be ready to use today, I'd really love it if anyone starts using it, so please do get in touch if you find it at all useful!

[templates]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[i18n]: https://en.wikipedia.org/wiki/Internationalization_and_localization
[repo]: https://github.com/FreddieRidell/glot
[npm]: https://www.npmjs.com/package/@freddieridell/glot
