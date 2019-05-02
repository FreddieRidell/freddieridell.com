---
title: Monads for Dummies
tags: 
   - js
   - tutorial
---

> A monad is just a monoid in the category of endofunctors, what's the problem?
> > James Iry [apparently][jamesIry]

If you're anything like me you've spent the last few years hearing the cool kids talking about monads and wanted to get in on the fun. You've watched/read a few tutorials, and ended up bailing out after a few minutes, more confused than when you started. Every explanation eventually devolves into set theory and computation models so far removed from what I'm used to that they're incomprehensible.

The good news is: I finally figured them out and I'm here to spread the love around.

## The Problem
You have a scenario that occurs often in your code base. It crops up all over the place in lots of different contexts. It's a condition that can be applied to many data types that you deal with. And crucially: *you want to wrap some data up in this concept, pass it arround without worrying about it, and unwrap it later when you're ready*

## An Example
You've made an api request to a server, to get some user information. Your network code has made the request and done all it needs to do, but you've not yet received the data from the server. You know that when you *do* get the data, you want to render the user's details out to a UI. The "concept" that we're wrapping our data with here is "data that has not arrived from the network yet"

## The Solution
The solution here is something that you might have encountered already, most languages call them `Futures` or `Promises`. They *take* some data, *wrap* it in our concept, and allow you to *access* the value that's being wrapped once it's resolved

## Another Example


explain them as a wrapper structure, a function to get them in, and a function to chain them.
implement a basic `Option` monad.
talk about how js promises are basically monads.

[jamesIry]: https://stackoverflow.com/questions/3870088/a-monad-is-just-a-monoid-in-the-category-of-endofunctors-whats-the-problem
