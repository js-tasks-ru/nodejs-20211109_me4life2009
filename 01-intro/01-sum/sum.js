function sum(a, b) {
	if(typeof a !== 'number' || typeof b !== 'number') {
		throw new TypeError('Arguments typeof not a number ...');
	}
	return a + b;
}

module.exports = sum;
