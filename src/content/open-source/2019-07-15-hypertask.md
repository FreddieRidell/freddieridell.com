---
title: HyperTask
abstract: A rust cli for managing ToDo lists and tasks
crates: hypertask # https://crates.io/api/v1/crates?q=hypertask
published: 2019-07-15
repo: FreddieRidell/hypertask
tags: [rust, cli, hypertask, code, git, openSource]
type: open-source
---

I've recently spent some time re-writing my js task manager in rust.

The old version was running fantastically slowly, with simple queries and modifications taking up to a minute. This was completely down to poor architectural decisions on my part, mostly because I was trying out some novel ideas. In this re-build I instead focused on finishing a rock-solid and performant tool, then I'll worry about clever ideas later.

The JS version was never in a good enough to demo or write-up, but this version is already good enough to talk about!

## Purpose

The overall goal of this tool is to provide a powerful and expressive cli to track and manage tasks in my life. It should allow for arbitrary filtering of tasks, and sort them by a heuristic function so that a user can easily see what tasks are the most pressing. It should also handle recurring tasks

## Syntax

### Add a task

```bash
$ task add take out the trash +chores due:now recur:3d
```

Adds a recurring task with the description `"take out the trash"`, that's due now, has the tag `chores` and recurs once every 3 days

### Modify a task

```bash
$ task f2peyd5aw4n7e22f +chores modify recur:1w
```

Selects every task with the tag `chores`, and the task with the id `f2peyd5aw4n7e22f` and changes them to recur once a week

### Mark a task as complete

```bash
$ task f2peyd5aw4n7e22f +chores done
```

Selects every task with the tag `chores`, and the task with the id `f2peyd5aw4n7e22f` and marks them as done; these tasks will no longer show up in task summaries

### Special Tags

Some tags have special semantic meanings:

- `+timely`: if this task is overdue, it's internal score will be doubled, moving it up the ranking
- `+urgent` this task's score we always be doubled, this stacks with `+timely`, so an overdue task with both tags will have quadruple its regular score

## Task Warrior

These commands should look very familiar to anyone who's used [task warrior][taskwarrior] before. I was a regular user of task warrior for a few years, and think it's a fantastic piece of software. It's far more expressive than hypertask, and anyone looking for the most powerful CLI task manager should look no further than task warrior.

Despite this, I decided to move away from task warrior for the following reasons:

### Task Sharing

The internal data format for task warrior strongly resists being shared in a conflict-resolvable way between different devices. I have a phone, laptop, and desktop, and as a contractor I often need to use new devices at whatever business I'm currently embedded in. It's very important to me that I can share tasks between all of these devices.

Task Warrior does provide a server architecture, but it is really quite hard to setup and configure. There are SaaS task-server hosting solutions, but they can't avoid some of the idiosyncrasies that task warrior introduces with it's client-server architecture.

### More powerful than I need

Task warrior has enough features that you could conceivably use it as a JIRA replacement, as well as a personal to do list. I found that this was far more functionality that I actually wanted for my use case. The feature rich nature of task warrior also made it quite hard to wrap my head around the mobile port, and web clients that exist for it; there was simply too much information for me to digest.

## My experience with rust

I'd previously spent almost two years piecing this project together in javascript. What I ended up with was, quite frankly, rubbish. I was trying out a variety of new ideas and all of them turned out to be novel but shit. I also struggled constantly against js' lack of typing, this project requires rock solid and reliable data manipulations based on possibly faulty user input in a DSL which ends up being a prime breeding ground for bugs and type errors.

Re-writing this project in rust was a pleasure. This is the largest rust codebase I've worked on, and it was starkly apparent how much more effective rust's type system is compared to [flow][flow] or [typescript][ts].

Rust's `enum`s and `iterators` are also fantastic features that I love playing with. I often found myself reworking my code to make better use of them, simply because they're such a pleasure to use.

Finally - and I'm not exaggerating here - the growing ecosystem of reusable crates might be the greatest achievement in open source software to date. Every problem I encountered was cleanly and effectively solved by a 3rd party crate. Installing these crates is incredibly simple, and I've yet to encounter a crate that doesn't work exactly as documented. Although the rust community is still comparatively small I believe that the bar of quality set by the crates ecosystem will come to effect and inform every other programming language sooner or later.

## Future of `hypertask`

- [ ] _Config_: hypertask is currently configured through [two environment variables][docs] as this was the quickest way for me to hit the ground running. In future I'll be moving this config to a dedicated .dotfile
- [ ] _Customisability_: currently the ordering of tasks is calculated by a hard-coded function. I'd like to replace this with some simple scripting language; I'm currently considering [rhai][rhai] as the most likely candidate, but I also want to try out [dyon][dyon], [ketos][ketos], and [moss][moss] as interesting alternatives.
- [ ] _Dat_: hypertask is actually called hypertask because it was originally meant to integrate with the [dat][dat] ecosystem (dat is powered by [hyperdrive][hyperdrive]). When multiwriter support is a bit better in the dat eco system I'm really looking forward to re-introducing it as a first class concept.
- [ ] _Dependencies, Parents, Projects_: I don't currently have much of a use for these, but if they can be added relativly simply and would be of use to others I'd be happy to add them.
- [ ] _Garbage Collection_: Currently, when a task is marked as `done`, we just set its `done` field to the current date. This means that the collection of tasks will continue to grow unbounded as the program is used. We could probably do with some functionality that deletes old task file after they've been done for a month
- [ ] _Improve CLI Id Selection_: [task warrior][taskwarrior] assigns each task a numerical id so that they can easily be addressed from the command line. I think there are two possible solutions:
  - find the minimum uniquely identifying prefix for each id, let the user interact these prefixes instead of the full Id (e.g: `nkm9xp94ypq82hsp` & `nk8ycg45c7kb3egk` map to `nkm` & `nk8`, that's how they're rendered, and they can be selected like that)
  - add [tab completion][rust-completion] to the cli, so that half completed ids and tags can be auto completed
- [ ] _WASM / WebApp version_: Rust has great support for compiling down to WASM, and building a web-app version of hypertask is high on the priority list for me. There are lots of cool build tools that simplify working with rust in js, including [parcel][parcel] which i've worked with before. There has been some work done on frontend UI libraries built in rust, but they're currently not quite mature and easy enough to use for them to be viable solutions

[dyon]: https://github.com/PistonDevelopers/dyon
[hyperdrive]: https://github.com/mafintosh/hyperdrive
[ketos]: https://github.com/murarth/ketos
[moss]: https://github.com/JohnBSmith/moss
[rhai]: https://github.com/jonathandturner/rhai
[taskwarrior]: https://taskwarrior.org/
[parcel]: https://parceljs.org/
[rust-completion]: https://www.joshmcguigan.com/blog/shell-completions-pure-rust/
