---
title: Pull all repos belonging to user
type: blog
tags: snippet, git, curl, jq
published: "2018-12-10"
---

```bash
$ curl https://api.github.com/users/codogofreddie/repos | jq -r "map( .ssh_url  )[]" | while read -r line ; do git clone $line ; done
```
