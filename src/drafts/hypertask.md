---
title: HyperTask
repo: FreddieRidell/hypertask
crates: hypertask
tags: [rust, cli, hypertask, code, git, openSource]
type: open-source
abstract: A rust cli for managing ToDo lists and tasks
---

I've recently spent some time re-writing my js task manager in rust.

The old version was running fantastically slowly, with simple queries and modifications taking up to a minute. This was completely down to poor architectural decisions on my part, mostly because I was trying out some novel ideas. In this re-build I instead focused on finishing a rock-solid and performant tool, then I'll worry about clever ideas later.

The JS version was never in a good enough to demo or write-up, but this version is already good enough to talk about!

## Purpose

The overall goal of this tool is to provide a powerful and expressive cli to track and manage tasks in my life. It should allow for arbitrary filtering of tasks, and sort them by a heuristic function so that a user can easily see what tasks are the most pressing. It should also handle recurring tasks

## Syntax

### Add a task

`task add take out the trash +chores due:now recur:3d`
Adds a recurring task with the description `"take out the trash"`, that's due now, has the tag `chores` and recurs once every 3 days

### Modify a task

`task f2peyd5aw4n7e22f +chores modify recur:1w`
Selects every task with the tag `chores`, and the task with the id `f2peyd5aw4n7e22f` and changes them to recur once a week

### Mark a task as complete

### Special Tags

## Task Warrior

[task warrior][taskwarrior] is a fantastic tool

## My experience with rust

## Future

-   [ ] _Dat_:
-   [ ] _WASM_:
-   [ ] _Projects_:
-   [ ] _Config_:
-   [ ] _Garbage Collection_:
-   [ ] _Id Abreviation_:

[taskwarrior]: https://taskwarrior.org/
