

Architecture idea: keep the buisness logic in rust, expose two interfaces:

`enum Query`/`enum QueryResponse` allows the js app to create a parameterized query to the engine that will be re-called whenever the underlying data changes.
`enum Mutation` allows the js app to modify the buisness logic.

```rust
enum Query {
   AllUsersIds, //get a list of all users' ids
   UserName(Id), //subscribe to a user's name
}

enum QueryResponse {
   AllUsersIds(Vec<Id>), //return a list of all users's ids
   UserName(String), //return a user's name
}

enum Mutation {
   CreateUser(Id),
   UpdateUserName(Id, String),
   DeleteUser(Id),
}
```

Allows you to move all your business logic and API stuff out of js and into rust, reducing JS to just a data layer
