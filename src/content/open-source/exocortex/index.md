# ExoCortex

## Extending Jask
[`jask`][jask] was orriginally concieved as a replacement for [`task`][task], but since its initial inception it's grown in power quite significantly. By trying to following problems:

+ Eventually consistent consensus across trusted peers with intermitent network
+ No data conflicts / manual merges 
+ Searchable tasks that can cross refference eachother

I've acidentally written a very powerful modle for arbitrary structured data storage.

[`jask`][jask] uses a (_perhaps foolish_) system or arbitrary data manipulation encoded in timestamped actions. Each action opperates on a single root object, and can perform any opperation on the object.

These actions can be saved and distributed across a network using a variety of different methods, as each action is a standalone `JSON` object that knows nothing about the structure of the [`jask`][jask] store.

This make the [`jask`][jask] engine a perfect match for storing a wide variety of rich metatextual data.

## Full Meta Cortex:

+ Finish [`jask`][jask] cli and web client
+ Break out action /(creator|parser)/ engine
+ /(Break out|generalise)/ /(query|mutator)/ engine 
+ Create cli/web interface for making arbitrary changes to any data item
+ Generalise [`jask`][jask] as a viewer on all data (only displays data tagged with the `task` property.

## Action Specification 
```js
//example execution:

(
	state = {} //empty state
	action = {
		timestamp: Int, //must include a timestamp
		object: UUID, //which object will we opperate on
		mutations: [ //a list of mutations to apply
			{
				type: assoc | dissoc, //are we setting or clearing a property?
				path: [ foo, bar, ], //eg: [ "dueDate", ], or [ "tags", "finance", ],
				value: Any,
			},
			...
		]
	}
) => ({
	state: { //all the objects
		uuid: {
			foo: {
				bar: {
					value,
				},
			},
		},
	},
	lookup: { //a structure to help with queries and lookups
		foo: {
			bar: Set([
				uuid, //allows for both 1-2-many and many-2-many connections
			]),
		},
	},
})
```
