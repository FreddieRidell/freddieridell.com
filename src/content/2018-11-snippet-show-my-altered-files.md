---
title: Show every commit where I altered file $X
tags: [snippet, git, xargs]
type: blog
published: 2018-11-15
---

Show the commit message, from every commit made by me, that altered a typescript file in `src/client`

```bash
$ find src/client -type f -name '*.ts' | #find all the typescript files in src/client
	 xargs -n 1 git blame HEAD -- | get the blame
	 ag freddie | #find lines containing my name
	 cut -d " " -f 1 | #get the commit hash
	 sort | uniq -c | sort | tr -s ' ' | cut -d " " -f 3 | #get a list of unique commit hashes, with the one that i'm blamed most on at the bottom
	 xargs -n 1 git log -n #print the commit message of each commit hash
```

**In One Line**

```bash
find src/client/services -type f -name '*.ts' | xargs -n 1 git blame HEAD -- | ag freddie | cut -d " " -f 1 | sort | uniq -c | sort | tr -s ' ' | cut -d " " -f 3 | xargs -n 1 git log -n 1
```
