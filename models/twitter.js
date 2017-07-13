var apiKeys = require('./apiKeys.js');
var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: apiKeys.twitter.consumer_key,
	consumer_secret: apiKeys.twitter.consumer_secret,
	access_token_key: apiKeys.twitter.access_token_key,
	access_token_secret: apiKeys.twitter.access_token_secret
});