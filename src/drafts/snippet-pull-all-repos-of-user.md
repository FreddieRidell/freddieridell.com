---
title: Pull all repos belonging to user
tags: snippet, git, curl, jq
---

```bash
$ curl https://api.github.com/users/codogofreddie/repos | jq -r "map( .ssh_url  )[]" | while read -r line ; do git clone $line ; done
```
