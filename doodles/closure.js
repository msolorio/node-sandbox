
const counter = (function() {

	let privateCounter = 0;
	
	function changeBy(num) {
		privateCounter += num;
	}

	return {
		getVal: function() {
			return privateCounter;
		},
		addOne: function() {
			changeBy(1);
		},
		subtractOne: function() {
			changeBy(-1);
		}
	};

}());

const counter = createCounter();

console.log(counter.getVal());
counter.addOne();
console.log(counter.getVal());
counter.subtractOne();
console.log(counter.getVal());
*/

// module
function createCounter() {

	let privateCounter = 0;
	
	function changeBy(num) {
		return function() {
			privateCounter += num;
		}
	}

	function getVal() {
		return privateCounter;
	}

	return {
		getVal: getVal,
		addOne: changeBy(1),
		subtractOne: changeBy(-1)
	};
};

const counter = createCounter();
const counterTwo = createCounter();

counter.getVal();
counter.addOne();
console.log(counter.getVal());
counter.subtractOne();
console.log(counter.getVal());
console.log(counterTwo.getVal());
*/

/*
function makeAdder(x) {
	return function(y) {
		return x + y;
	}
}

const add10 = makeAdder(10);
const add5 = makeAdder(5);

console.log(add10(2));
console.log(add5(3));
*/


// function has its lexical scope based on where it exists in the code
// function binds it's variables based on the state of the lexical scope
// at the moment it is called
/*
let a = 1;

function outer() {
	let b = 1;

	return function() {
		let c = 1;
		console.log(a, b, c);
	}

	b = 2;
}

const example = outer();

example();

a = 2;

example();
*/







































