var assert = require('assert');
var s3PublicUrl = require('../');

describe('node-s3-public-url', function() {
	describe('Encoding', function() {

		var tests = {
			'should return string when asked to convert': {
				input: 'a!@#$%^*()_+-={}|[]\\"\'<>?,:;.mp4',
				output: 'a!%40%23%24%25%5E*%28%29_%2B-%3D%7B%7D%7C%5B%5D%5C%22%27%3C%3E%3F%2C%3A%3B.mp4'
			},
			'should not convert slash \/': {
				input: '/',
				output: '/'
			},
			'should convert space into a +': {
				input: ' ',
				output: '+'
			}
		}

		function runTest(desc, test) {
			it(desc, function() {
				assert.equal(s3PublicUrl(test.input), test.output);
			});
		}

		for(var desc in tests) {
			runTest(desc, tests[desc]);
		}

	});
});
