function Shape(x, y) {
  this.x = x;
  this.y = y;

  this.color = 'green';
}

Shape.prototype.area = function() {
  return this.x * this.y;
}

function Rectangle(x, y, color) {

  Shape.call(this, x, y);

  this.color = color;
}

Rectangle.prototype = Object.create(Shape.prototype);
// 
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getParameter = function() {
  return (2 * this.x) + (2 * this.y); 
}

function Square(x) {

  Shape.call(this, x, x);
}

const ourRec = new Rectangle(2, 3, 'blue');

console.log(ourRec);
console.log(ourRec.area());
console.log(ourRec.getParameter());

// why doesn't work?
console.log(ourRec.__proto__);
console.log(ourRec.prototype);

// how do we create properties and methods that are only available on Shape and not Rectangle?

// class Shape {
//   // run when code is run
//   constructor(x=0, y=0) {
//     if (x < 0) {
//       throw 'ShapeException';
//     }
//     this.x = x;
//     this.y = y;
//   }

//   move(x, y) {
//     this.x += x;
//     this.y += y;
//   }
// }



// // EXAMPLES OF CLOSURE
// function greaterThan(n) {
//   return function(m) {
//     return m > n;
//   }
// }

// const greaterThan10 = greaterThan(10);

// console.log(greaterThan10(11));

// //
// (function applicationCade() {
//   const localVar = 0;
// })();

///////////////////////////////////////



///////////////////////////////////////
// function greetCurried(greeting) {
//   return function(name) {
//     console.log(`${greeting}, ${name}`);
//   };
// }

// const greetHello = greetCurried('Hello');

// const greetHi = greetCurried('hi');

// console.log(
// greetHello('Jim')
// );

// console.log(
// greetCurried('Hello')('Jim')
// );

// function getSecret(secret) {
//   return {
//     get: () => secret
//   }
// }

// function secret(msg) {
//   return () => msg;
// }

// const ourFunc = secret('asdf');


// console.log(ourFunc());

// currying / partial application

// function greet(greeting, name) {
//   console.log(`${greeting} ${name}`);
// }

// greet('greetings', 'sam');

// function greetCurried(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greetHello = greetCurried('hello');

// greetCurried('good morning')('Talking Parrot Lamp');


// function deeplyCurriedGreeting(greeting) {
//   return function(separator) {
//     return function(name) {
//       return function(emphasis) {
//         console.log(`${greeting}${separator} ${name}${emphasis}`);
//       }
//     }
//   }
// }

// deeplyCurriedGreeting('hello')('... ')('Hubert')('.');

// const ourPromise = new Promise((resolve, reject) => {
//   resolve('suprise!');
// });

// ourPromise
//   .then((res) => {
//     return res + res;
//   })
//   .then((res) => {
//     console.log(res);
//   });

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/*
algorithms and data structures
binary trees
save for later

function Tree(x) {
	this.key = x;
	this.value = 1;
	this.left = null;
	this.right = null;
}

Tree.prototype.add(thing, value) {
	if (thing == this.key) {
		this.value = value;
	}
	if (thing < this.key) {
		// place thing to our left
		if (this.left) return this.left.add(thing, value);
		this.left = new Tree(thing, value);
		return true;
	} else {
		if (this.right) return this.right.add(thing, value);
		this.right = new Tree(thing, value);
		return true;
	}
}

Tree.prototype.find(key) {
	if (this.key == key) {
		return this.value;
	}
	if (key < this.key) {
		if (!this.left) throw new Error('Not found');
		return this.left.find(key);
	}

	if (!this.right) throw new Error('Not found');
	return this.right.find(key);
}

Tree.prototype.walk = function(depth, func) {
	if (this.left) this.left.walk(depth + 1, func);
	func(depth, this);
	if (this.right) this.right.walk(depth + 1, func);
}

const counts = new Tree('root');
const data = fs.readFileSync('/usr/share/dict/words');
const words = data.split('\n');
for (var i=0; i<100; ++i) {
	const val = Math.floor(Math.random() * 256) % 6 + 1;
	counts.add(val);
}

const taxonomy = Tree('animal', 'Thing that breathes and walks');
taxonomy.add('pet', 'Thing that breathes, walks, and is loved');
taxonomy.add('fluffy', 'thing that breathes, is loved, and is soft');
taxonomy.add('rabbit', 'Avi');
taxonomy.add('avi', 'Rabbit?');
taxonomy.add('angelico', 'Chris');
taxonomy.add('apple', 'way to make chell jump');
taxonomy.add('lemon', 'way to burn down your house');
taxonomy.add('aardvark', 'stick-in-the-mud');
console.log(taxonomy.find('avi'));
console.log(taxonomy.find('apple'));
console.log(taxonomy.find('rabbit'));
console.log(taxonomy.find('spam'));

console.log('----------------------------');
taxonomy.walk(0, (depth, node) => {
	console.log(depth + '\t',
		node.key + '\t\t' +
		node.value
	);
});
*/
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
























