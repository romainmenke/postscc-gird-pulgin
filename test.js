const postcss = require('postcss');

postcss([require('./indez.js')]).process(`{ gird-gap: 2px; }`, {from: undefined}).then((result) => {
	console.log(result.css);
});
