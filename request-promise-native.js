'use strict';

//const rpn = require('request-promise-native');
const rpn = require('request-promise-native').defaults({
	headers : {
		'User-Agent' : 'Request-Promise-Native',
		/* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
	},
});
const cheerio = require('cheerio');

rpn({
		method : 'GET',
		uri : 'https://ifconfig.io/all.json',
		/*
		qs : {//GET-параметры
			access_token : 'test',
		},
		body : {
			some : 'payload',
		},
		formData : {
			// Like <input type="text" name="name">
			name : 'test.jpg',
			// Like <input type="file" name="file">
			file : {
				value : fs.createReadStream('test/test.jpg'),
				options : {
					filename : 'test.jpg',
					contentType : 'image/jpg',
				},
			},
		},
		*/
		//json : true, // Automatically parses the JSON string in the response
		//resolveWithFullResponse : true,
		//simple : false,
		//transform2xxOnly : false,
		transform : function(body, response, resolveWithFullResponse) {
			
			if(/application\/json/.test(response.headers['content-type'])) {
				//console.log('json');
				return JSON.parse(body);
			} else if(/text\/html/.test(response.headers['content-type'])) {
				//console.log('html');
				return cheerio.load(body);
			} else {
				//console.log(response.headers['content-type']);
				return body;
			}
			
		},
	})
	.then(function($) {
		console.dir($);
	})
	.catch(function(err) {
		//console.log(err);
	})
;

/*
rp.post('http://example.com/api').then(...);
*/

/*
rp(...).then(...) or e.g. rp.post(...).then(...) which turn rp(...) and rp.post(...) into promises
rp(...).catch(...) or e.g. rp.del(...).catch(...) which is the same method as provided by Bluebird promises
rp(...).finally(...) or e.g. rp.put(...).finally(...) which is the same method as provided by Bluebird promises
rp(...).cancel() or e.g. rp.get(...).cancel() which cancels the request
rp(...).promise() or e.g. rp.head(...).promise() which returns the underlying promise so you can access the full Bluebird API
*/

/*
let cookie = new tough.Cookie({
    key: "some_key",
    value: "some_value",
    domain: 'api.mydomain.com',
    httpOnly: true,
    maxAge: 31536000
});
 
// Put cookie in an jar which can be used across multiple requests
var cookiejar = rp.jar();
cookiejar.setCookie(cookie, 'https://api.mydomain.com');
// ...all requests to https://api.mydomain.com will include the cookie
 
var options = {
    uri: 'https://api.mydomain.com/...',
    jar: cookiejar // Tells rp to include cookies in jar that match uri
};
*/