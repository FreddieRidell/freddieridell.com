# The 10 Code Commandments

## 1 CPU time is cheaper than developer time

## 2 Every function is a public API

## 3 Code is primarily to be read and written by other HUMANS

## 4 Code is primarily to be read and written by OTHER humans

## 5 [Duplication is cheaper than the Wrong Abstraction][dontalwaysdry]

## 6 If you're adding a feature, add a feature; if you're improving the code, improve the code

If the aim of a task is to create a feature, prioritise that feature over changing the codebase to better accomidate the feature. Once you've validated that the feature was a good feature you can (and should) then improve it's implementation, even by changing its API.

## 7 Don't store derrived data

Except in an explicit caching layer, which should have the API of a memoized function

## 8 A network request should exist mostly in a single function in a single file

Use as many helper functions as you want to, for:

- augmenting the request
- parsing/shaping the response
- passing the response into a store

But avoid the temptation to create many `Service` wrappers. They are usually a level of abstraction that is not needed, and split the logic for a request over many files in a way that doesn't increase useability.

## 9 A good module system replaces the need for dependency injection

Just pass the argument
!(https://twitter.com/garybernhardt/status/1006983057138741248)
!(https://twitter.com/tpolecat/status/704694589605588992)
!(https://twitter.com/chris__martin/status/917530063796613120)

[dontalwaysdry]: https://www.youtube.com/watch?v=8bZh5LMaSmE&feature=youtu.be
