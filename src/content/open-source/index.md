---

title: Open Source
published: 1508244090

---

## [Dotfiles][dotfiles]
Since dropbox ruined all my dotfiles for the third time, I've since started storing them on [github][dotfiles]. This repo contains my config for:

+ [`git`][git]: Various configs, aliass and functions
+ [`zsh`][zsh]: Aliass, functions, and my own custom command line prompt. Heavily inspired by [oh my zsh][omz]
+ [`i3`][i3]: A tiling window manager, which I find far easier to use than a floating windowing manager.
+ [`task`][task]: A CLI for task management, a TODO list on unix steroids.
+ [`nvim`][nvim]: A modern rewrite of vim.
+ [`lemonbar`][lemonbar]: A tool for creating your own status bar.

As well as various other programs and tools that I use day-to-day.

## [wren][wren]
Wren is a dinky little scripting language that I am somewhat involved in. It is class based, byte-code interpreted, very fast, and has cooperative multi-tasking at its core. It was created by the venerable [Bob Nystrom][bob]. I've authored various open source wren packages, including:

+ [semver][wrenSemver]: For SemVer parsing and comparing.
+ [mesh][wrenMesh]: For working with the `.obj` mesh format.
+ [chorus][wrenChorus]: For parsing and delegating CLI arguments.
+ [tree][wrenTree]: For pretty printing tree structures.
+ [tempo][wrenTempo]: A date Library.
+ [stream proposal][wrenStreamProposal]: A proposal for introducing streams to the language.

## [ContentEditableComponent][ce]
While working on [Codogo Write][codogoWrite], we found a need for a react component that would allow us to work simply with `content-editable` elements in the DOM. Click [here](/open-source/content-editable-component/) for more information.

[ce]: https://www.npmjs.com/package/content-editable-component
[codogoWrite]: https://write.codogo.io

[dotfiles]: https://github.com/CodogoFreddie/dotfiles
[git]: https://git-scm.com/A
[zsh]: http://www.zsh.org/
[omz]: http://ohmyz.sh/
[i3]: https://i3wm.org/
[task]: https://taskwarrior.org
[nvim]: https://neovim.io/
[lemonbar]: https://github.com/LemonBoy/bar

[wren]: http://wren.io
[bob]: http://journal.stuffwithstuff.com/
[wrenMesh]: https://github.com/CodogoFreddie/wren-mesh
[wrenVector]: https://github.com/CodogoFreddie/wren-vector
[wrenStreamProposal]: https://github.com/CodogoFreddie/wren-stream-proposal
[wrenChorus]: https://github.com/CodogoFreddie/wren-chorus
[wrenTree]: https://github.com/CodogoFreddie/wren-tree
[wrenDeleggate]: https://github.com/CodogoFreddie/wren-deleggate
[wrenTempo]: https://github.com/CodogoFreddie/wren-tempo
[wrenSemver]: https://github.com/CodogoFreddie/wren-semver
