const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
};

const multiply = function(arr) {
	let total = 1;
	for (let i = 0; i < arr.length; i++) {
		total *= arr[i];
	}
	return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0) {
		return 1;
	} else {
		let start;
		if (a === 1) {
			start = a;
		} else {
			start = a - 1;
		}
		let total = a * start;
		for (let i = 0; i < a - 2; i++) {
			start--;
			total *= start;
		}
		return total;
	}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
