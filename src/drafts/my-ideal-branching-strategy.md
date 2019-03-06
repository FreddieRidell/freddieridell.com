

master, develop and feature branches
feature branches come off develop
master is always downstream of develop, hotfix into develop
CI should be fast enough that the above isn't a problem
feature branches should be rebased if they would cause conflicts 
features are squashed into develop

quality checks matching master
