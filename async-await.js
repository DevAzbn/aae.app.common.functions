'use strict';

const utilities = require('./common/utilities');

/*
let scrape = async () => {
	return 'test';
};

scrape().then((value) => {
	console.log(value);
});
*/

/*
const f = ((fnc, c) => {
	let c_ = c + 1;
	return new Promise(function(resolve, reject) {
		fnc('promise', c_);
		resolve(c_);
	});
});

let builder = ((fnc, c) => {
	fnc('builder', c);
	return f(fnc, c);
});

let counter = 0;

builder(console.log, counter)
	.then((res) => {
		console.log('queue', res);
		return f(console.log, res);
	})
;

console.log('finish', 'promise');
*/


/*
const fs = require('fs');

const readFile = utilities.promisify(fs.readFile);

let getLastText = ((counter) => {
	
	return readFile('./tmp/file.txt', {
		encoding : 'utf8',
	})
		.then(text => {
			counter++;
			console.log(text);
			return readFile('./tmp/file.txt', {
				encoding : 'utf8',
			});
		})
		.then(text => {
			counter++;
			console.log(text);
			return readFile('./tmp/file.txt', {
				encoding : 'utf8',
			});
		})
		.then(text => {
			counter++;
			console.log(text);
			return readFile('./tmp/file.txt', {
				encoding : 'utf8',
			});
		})
		.then(text => {
			counter++;
			console.log(text);
			return counter;
		})
	;
	
});

let c = 0;
getLastText(c)
	.then(res => {
		console.log(res);
	})
;
*/

/*
let getData = (() => {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			resolve('it is timeout');
		}, 500);
	});
});

(async () => {
	
	let main = (async () => {
		let text = await getData();
		console.log(text);
		console.log('finish', 'main');
	});
	
	await main();
	console.log('finish', 'process');
	
})();
*/