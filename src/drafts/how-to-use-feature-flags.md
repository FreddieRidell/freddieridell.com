---
title: How to use Feature Flags
---

Feature Flags can be a very powerful tool in your codebase. They allow you to check work in to the `master` branch, but have it toggled off so it doesn't work for the majority of users. It can allow you to continue developing a feature without surfacing it to your users, and can let you roll out new features to only a subset of your users before you do a full release.

There are a few ideas that you'll want to keep in mind when developing a Feature Flag system, to make it as easy to manage as possible.

# Compile Time or Run Time

There are many different ways to implement a feature flagging system, and first thing you have to consider is if the flags should function at Compile Time or Run Time?

## Compile Time

Switch functionality on/off as you're building your app from source. This works well if you're deploying to multiple different environments and can have different flags enabled for different envs. This is also the simplest way to implement feature flags: it can be as simple as an environment variable in your build environment.

The trade off here is that your flag will be the same for all users on a given environment, which may impose too much of a limit on how flexible your flags can be.

## Run Time

Switch functionality on/off as the app is running. This is a more flexible solution: your app can make an API call to get the Feature Flag status for a given user at any time. This means you can enable certain features for certain users: great for testing, or feature previews.

This comes at the cost of complexity: you need to dynamically query this API, and figure out what the app should do while it's waiting for a response, or the request fails.

# They should operate on UI, not Logic

Using Feature Flags to toggle logic is an easy mistake that many people make. It seems to make sense to disable logical functions that your app is never going to use.

However, this can be a major source of bugs, and you want your Feature Flags to be as reliable as possible.

- They should be at as high a level as possible
- There should be as few checks against each flag as possible
- They should only operate on UI, not logic, if possible
