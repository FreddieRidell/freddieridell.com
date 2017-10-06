'use strict';
require('dotenv').config()
var Twitter = require('twitter');
var pages = require("./pages");

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const doATweet = (tweet) => new Promise( (done, fail) => 
	client.post(
		"statuses/update.json",
		{
			status: tweet,
		},
		(error, tweets, response) => (
			error
			? fail(error)
			: done({ tweets, response })
		)
	)
);

const mockATweet = (tweet) => new Promise( (done, fail) => done("would have tweeted \"" + tweet + "\""));

const invalidPages = new Set([
	"/",
	"/404/",
	"/blog/",
]);

module.exports.hello = (event, context, callback) => {
	const postablePages = pages.filter( x => !invalidPages.has(x));
	const toPost = postablePages[Math.floor(Math.random() * postablePages.length)];

	mockATweet("Something for the weekend?")
		.then( console.log) ;
};
