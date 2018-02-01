"use strict";

require('dotenv').config()
var Twit = require('twit')

var T = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

const prefixies = [
	"Breaking news: Patrick Stump reveals he",
	"Hot Damn: Patrick Stump announces he",
	"This just in, Fall Out Boy front man Patrick Stump exclusively reveals he",
	"#DidYouKnow Patrick Stump (singer of Fall Out Boy)",
	"Patrick Stump doesn't want you to discover the horrible truth: that he",
	"Pete Wentz finally comes clean in new autobiography: Patrick Stump",
	"I... worked on this story for a year... and... he just... he tweeted it out: Patrick Stump",
];

const sufixes = [
	"always make such expensive mistakes",
	"can feel the weather in his bones",
	"combs the crowd and pick you out",
	"doesn't blame you for being you",
	"doesn't want to forget how your voice sounds",
	"found the cure to growing older",
	"has been dying to tell you anything you want to hear",
	"has got arrogance down to a science",
	"has got such good fashion sense",
	"has got those jet pack blues",
	"hates all his friends",
	"hopes you sing along and you steal a line",
	"is a coal mine, you're a canary",
	"is addicted to the way he feels when he thinks of you",
	"is a leading man",
	"is an american psycho",
	"is an arms dealer fitting you with weapons in the form of words",
	"is a nervous wreck, is a nervous wreck, is a nervous wreck huh, is a n-n-nervous wreck, is a nervous wreck",
	"is a stitch away from making it",
	"is a young lover's rage",
	"is boring but overcompensates",
	"is doing it in the dark with smiles on his face",
	"is falling apart to songs about hips and hearts",
	"is feeling hot and wet",
	"is god's gift, but why would he bless him with such wit without a conscience equipped?",
	"is going down, down in an earlier round",
	"is here to collect your hearts; it's the only reason that he sings",
	"is hopelessly hopeful",
	"is in love with his own sins",
	"is just a notch in your bedpost",
	"is just a painter and is drawing a blank",
	"is making out inside crashed cars",
	"is more than you bargained for",
	"is not a crybaby, he's the crybaby ",
	"is not making any sense",
	"is on fire",
	"is only a liar",
	"is only good for the latest trends",
	"is pedal to the metal, make no mistake",
	"is sitting out dances on the wall",
	"is the best",
	"is the best boy",
	"is the first kid to write of hearts, lies, and friends",
	"is the opposite of amnesia",
	"is the sand in the bottom half of the hourglass (glass, glass)",
	"is the therapist pumping through your speakers",
	"is two quarters and a heart down",
	"is watching you two from the closet wishing to be the friction in your jeans",
	"is your best kept secret and your biggest mistake",
	"is your number one with a bullet",
	"just wants to know what it's like to be you",
	"keeps telling himself he's not the desperate type",
	"knows he's bad news",
	"knows this hurts, it was meant to (it was meant to)",
	"loves the way you hurt him",
	"only does it for the scars and stories, not the fame",
	"only wants sympathy in the form of you crawling into bed with him ",
	"says (he says, he says, he says) \"what did it ever do for me\"",
	"sets his clocks early 'cause he knows he's always late",
	"sleeping his way out of this one",
	"speaks fast and is not gonna repeat himself",
	"swears, he says",
	"talked about getting out but not forgetting about how his worst fears are letting out",
	"thinks that god is gonna have to kill him twice",
	"took a shot and didn't even come close",
	"took too many hits off this memory",
	"used to waste his time dreaming of being alive (now he only waste it dreaming of you)",
	"wants to be known for his hits, not just his misses",
	"was just an only child of the universe",
	"will burn this city down to show you the light",
	"will keep you warm and won't ask you where you've been",
	"wrote the gospel on giving up",
];

const randomFromList = list => {
	return list[Math.floor(Math.random() * list.length)];
};

const randomFromListWeighted = list => {
	return list[Math.floor(Math.pow(Math.random(), 2) * list.length)];
};

const generateTweet = () => {
	return randomFromListWeighted(prefixies) + " " + randomFromList(sufixes) + ". #falloutboy #mania"; 
};

console.log( generateTweet() );

module.exports.hello = (event, context, callback) => {
	T.post('statuses/update', { status: generateTweet() }, function(err, data, res) {
		console.log(data)

		const response = {
			statusCode: 200,
			body: JSON.stringify({
				message: 'Go Serverless v1.0! Your function executed successfully!',
				input: event,
				err,
				data,
				res,
			}),
		};

		callback(null, response);
	})

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
