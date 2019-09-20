1. make a large change over several commits.
2. git reset FIRST_COMMIT && git push && git reset LAST_COMMIT
3. if you need to make a change:
   1. rebase back to the commit you pushed
   2. make the change
   3. `git commit` it to generate a new commit
   4. and push from there
