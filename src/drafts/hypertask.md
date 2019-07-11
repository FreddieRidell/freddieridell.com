---
title: HyperTask
repo: FreddieRidell/hypertask
crates: hypertask # https://crates.io/api/v1/crates?q=hypertask
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

`task f2peyd5aw4n7e22f +chores done`
Selects every task with the tag `chores`, and the task with the id `f2peyd5aw4n7e22f` and marks them as done; these tasks will no longer show up in task summaries

### Special Tags

Some tags have special semantic meanings:

-   `+timely`: if this task is overdue, it's internal score will be doubled, moving it up the ranking
-   `+urgent` this task's score we always be doubled, this stacks with `+timely`, so an overdue task with both tags will have quadruple its regular score

## Task Warrior

These commands should look very familiar to anyone who's used [task warrior][taskwarrior] before. I was a regular user of task warrior for a few years, and think it's a fantastic piece of software. It's far more expressive than hypertask, and anyone looking for the most powerful CLI task manager should look no further than task warrior.

Despite this, I decided to move away from task warrior for the following reasons:

### Task Sharing

The internal data format for task warrior strongly resists being shared in a conflict-resolvable way between different devices. I have a phone, laptop, and desktop, and as a contractor I often need to use new devices at whatever business I'm currently embedded in. It's very important to me that I can share tasks between all of these devices.

Task Warrior does provide a server architecture, but it is really quite hard to setup and configure. There are SaaS task-server hosting solutions, but they can't avoid some of the idiosyncrasies that task warrior introduces with it's client-server architecture.

### More powerful than I need

Task warrior has enough features that you could conceivably use it as a JIRA replacement, as well as a personal to do list. I found that this was far more functionality that I actually wanted for my use case. The feature rich nature of task warrior also made it quite hard to wrap my head around the mobile port, and web clients that exist for it; there was simply too much information for me to digest.

## My experience with rust

I'd previously spent almost two years piecing this project together in javascript. What I ended up with was, quite frankly, rubbish. 

## Future

-   [ ] _Dat_:
-   [ ] _WASM_:
-   [ ] _Projects_:
-   [ ] _Config_:
-   [ ] _Garbage Collection_:
-   [ ] _Id Abreviation_:
-   [ ] _Dependencies, Parents, Projects_:

[taskwarrior]: https://taskwarrior.org/
