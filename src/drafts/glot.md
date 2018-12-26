---
title: glot
repo: FreddieRidell/glot
npm: @freddieridell/glot
tags: js, library,
---

![min badge](https://badgen.net/bundlephobia/min/@freddieridell/glot)
![minzipped badge](https://badgen.net/bundlephobia/minzip/@freddieridell/glot)

> A tiny, simple, powerful, expressive, i18n library

I wanted to try my hand at making an [i18n][i18n] library that was as ergonomic and easy to use as possible, without sacrificing versatility.

After it was done, I was so happy with the results, that I also wanted to try releasing it as a propper NPM package for public consumption.

I'm pretty happy about the size of bundle that I'm publishing, and I'm going to be using it personally from now on to iron out any kinks.

You can get it [here][npm], and browse the source [here][repo]

## Library Deep Dive

> #JustUseThePlatform

After looking at a few other i18n js library, I'd become anoyed that none of them were using [tagged template literals][templates] to provide a great Developer Experience. It seems like an obvious choice, as i18n is primarily a problem of turning simple string keys into runtime calculated values.

`glot` exposes a function that takes a hierarchical dictionary of values as input, and returns a template tag that can be used to access those values

### Basic API

```javascript
const glot = createGlot({
en: {
greeting: "hello",
sales: {
CTA: "Buy our Shit!",
},
fra: {
greeting: "bonjour",
sales: {
CTA: "Buy le Shite!",
},
})({lang: "en"});

console.log(glot`greeting`); // => "hello"
console.log(glot`sales.CTA`); // => "Buy our Shit!"
```

### Other Languages

That template tag can then be repeatedly over-ridden to change the language, if nescisary

```javascript
const newGlot = glot({ lang: "fra" });

console.log(glot`greeting`); // => "bonjour"
console.log(glot`sales.CTA`); // => "Buy le Shit!"
```

[templates]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[i18n]: https://en.wikipedia.org/wiki/Internationalization_and_localization
[repo]: https://github.com/FreddieRidell/glot
[npm]: https://www.npmjs.com/package/@freddieridell/glot
