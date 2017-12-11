---

title: ContentEditableComponent

---

> You can find the npm package [here][ce].

While working on [Codogo Write][codogoWrite], we found a need for a react component that would allow us to work simply with `content-editable` elements in the DOM.

There are various solutions, and for a while we tried to use [draftjs][draftjs]; draftjs is a very powerful library, but we found it enforced too many opinions onto our usecase, most of which were contrary to what we were trying to achieve. 

In the end we made that most often regretted decision and wrote our own. We now have a component that allows for manipulation of rich text and cursor position through a simple, react-y api.

[Codogo Write][codogoWrite] is in alpha at the time of writing, so [ContentEditableComponent][ce] still has a fair few idiosyncracies (eg. it's only been tested on chrome), but it's under constant active development, and is already proving more versatile and powerful than trying to force draftjs to be something it's not.

[ce]: https://www.npmjs.com/package/content-editable-component
[codogoWrite]: https://write.codogo.io
[draftjs]: https://draftjs.org/
