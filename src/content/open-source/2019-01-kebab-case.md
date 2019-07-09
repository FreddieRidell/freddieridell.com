---
title: kebab-case
repo: FreddieRidell/kebab-case
npm: "@freddieridell/kebab-case"
tags: [js, library, kebab-case]
published: 2019-01-12
type: open-source
abstract: A stripped down, minimal kebab-case parser, to deal with 90% of programmatic conversion usage
lang: js
---

Sometimes, you need [lodash](https://www.npmjs.com/package/lodash.kebabcase), but sometimes a simple minimalist library will do.

This library does everything that I commonly want from a kebab-case converter, it's not designed to deal with user input, just with converting strings from APIs and stuff

```javascript
kebabCase("foo-bar-baz"); // => "foo-bar-baz"
kebabCase("foo bar baz"); // => "foo-bar-baz"
kebabCase("1foo ' 2 bar *_ b3az"); // => "1foo-2-bar-b3az"
kebabCase("fooBarBaz"); // => "foo-bar-baz"
kebabCase("FooBarBaz"); // => "foo-bar-baz"
kebabCase("   foo bar baz   "); // => "foo-bar-baz"
kebabCase("   FooBarBaz   "); // => "foo-bar-baz"
```
