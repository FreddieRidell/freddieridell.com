When you introduce a library that does something you could have handled yourself, your code ends up reforming around this new library to match its requirements.

E.G: If you use Mongoose as an ORM, you end up with lots of code that packs and unpacks that into your own internal representation. You could have just written your own simpler selection of functions for calling the DB
