---
title: how to run a repo
---

master, develop and feature branches
feature branches come off develop
master is always downstream of develop, hotfix into develop
CI should be fast enough that the above isn't a problem
feature branches should be rebased if they would cause conflicts 
features are squashed into develop
set a timelimit from push to deploy for CI tasks (eg. 15 minutes) stick to it
Limit number of people with commit access to a pizza number. If the team grows, split into multiple repos and use your language's packageing system
   this even works for one big product: create a root repo that `requires` many different features, each stored in their own repo. any shared components can be in a `widgets` repo or similar
Use as strict a code formatter as you can find: `prettier`, `gofmt`, `rustfmt`, `dartfmt`. The optimise for strictness and reproduceability, not atractiveness.
quality checks matching beeline
use a system like [zeit now][zeit] to have a static deploy of each pushed commit and branch
