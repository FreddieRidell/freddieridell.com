---
title: Will WASM change the frontend
type: blog
tags: [wasm, js, frontend, thinkpiece]
published: 2019-01-20
---

Over the last few months I've seen quite a few people excited about the possibility of moving the web platform forward by compiling new, previously inaccessible languages to WASM to have them run in browser. ([not][asmjs] [that][coffeescript] [you][dart] [couldn't][elm] [do][emscripten] [that][reasonml] [already][scala]). I'm excited about this too, it's awesome to have a high-performance compile target working in every browser without having to depend on [Java Applets][applet] or [Flash][flash].

Moving parts of your frontend logic into a WASM already make a lot of sense if it's

- Performance sensitive: WASM performs more predictably due to lack of a garbage collector.
- Mission critical: Use more advanced static analysis/type checking than any js-variant/compile-to-js language provides.

And with tools like [parcel][parcel-wasm] integrating WASM code into your frontend app is super easy.

But there's currently very little reason to move your whole frontend to WASM, and it's not just due to the lack of maturity of other solutions.

## Frontend from the start

> The part that is good is not original, and the part that is original is not good.
>
> > Samuel Johnson

Javascript is a bit shite in lots of ways; there's been enough written on that subject that I don't have to add any more.

However javascript has, from its inception, been a front-end language.

Doing small, performance/mission critical code snippets in WASM is clearly good, however this is what we need before we can have a fully WASM front-end framework hurdle What still makes JS so inviting as a front end language is also what makes it so irksome: It is wildly variable and can be forced into almost any shape.

The jerry-rigged nature of JS is what created its ecosystem of sharing small modules, and re-writing the platform to suite your needs: JQuery essentially embedded a whole new language inside JS.

React isn't used because it's written in JS, React is used because it's brilliant, and React is possible because of JS.

No other mainstream language offers the extensibility of javascript, or allows you to work in so many different ways. Both through compilation with babel (allows for powerful code transforms), and runtime extension (allows for drop in environment alteration).

JS was designed as a frontend language, that would run on other people's computers. No other programming language doe this. It had to be built to be extensible, because there was no other way for force an upgrade of the runtime environment of the computer running the code. & every other language that's tried to be a frontend language has fucking failed: `android`, `ios`, `swift`, `dart` are all languages that are only used in places where they're locked in. JS is so juicy that we've made it run on mobiles and non-browser apps, even at the cost of performance, because it's so much fucking easier to get anything done.

React hooks are a great example of this: a completely new and alien syntax, that appears to fundamentally alter the operation of the language, that's only requires you to bump 2 version numbers to use.

Until another language can show that it's equally updateable, customisable, and can wear as many hats, JS sill still rule

[applet]: https://en.wikipedia.org/wiki/Java_applet
[asmjs]: http://asmjs.org/A
[coffeescript]: https://coffeescript.org/
[dart]: https://www.dartlang.org/
[elm]: https://elm-lang.org/
[emscripten]: http://kripken.github.io/emscripten-site/
[flash]: https://www.adobe.com/uk/products/flashplayer.html<Paste>
[reasonml]: https://reasonml.github.io/
[rsx]: https://github.com/victorporof/rsx
[scala]: https://www.scala-lang.org/
[wasm]: https://webassembly.org/
[yew]: https://github.com/DenisKolodin/yew
[parcel-wasm]: https://parceljs.org/webAssembly.html
