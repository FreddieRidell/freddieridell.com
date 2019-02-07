---
title: Pull all repos belonging to user
type: blog
tags: [snippet, git, curl, jq]
published: 2018-12-10
---

I needed this the other day when I was setting up a new laptop, and wanted to just make sure that I had every one of my repos locally

```bash
$ curl https://api.github.com/users/FreddieRidell/repos | #get all the repos
   jq -r "map( .ssh_url  )[]" | #extract the pull urls
   while read -r line ; #pipe into a loop
      do git clone $line ; #clone
   done
```

**In One Line**

```bash
$ curl https://api.github.com/users/codogofreddie/repos | jq -r "map( .ssh_url  )[]" | while read -r line ; do git clone $line ; done
```
