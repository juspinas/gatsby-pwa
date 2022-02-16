module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{jpg,mdx,js,json,png,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};