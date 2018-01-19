
//
// /**
//  * Person - description
//  *
//  * @param  {string} firstname description
//  * @param  {string} lastname  description
//  * @param  {number} age       description
//  * @param  {array} interests description
//  * @return {object} returns a person object
//  */
// function Person(firstname, lastname, age, interests) {
// 	this.name = {
// 		first: firstname,
// 		last: lastname
// 	};
//
// 	this.age = age;
//
// 	this.interests = interests;
// };
//
// Person.prototype = {
// 	planet: 'Earth',
//
// 	numOfLegs: 2,
//
// 	listInterests() {
// 		const interestString = this.interests.reduce((result, interest, index) => {
// 			return `${result}${index + 1}. ${interest}\n`;
// 		}, '');
//
// 		return interestString;
// 	},
//
// 	speak(words) {
// 		return `hi, my name is ${this.name.first} ${this.name.last} and ${words}.`;
// 	},
//
// 	ageInMonths() {
// 		return this.age * 12
// 	},
//
// 	getPassion() {
// 		return this.interests[0];
// 	},
//
// 	getInterestByIndex(index) {
// 		return this.interests[index];
// 	},
//
// 	getLastInterest() {
// 		return this.interests[this.interests.length - 1]
// 	}
// };
//
// const jon = new Person('Jon', 'Doh', 2, [
// 	'singing',
// 	'dancing',
// 	'prancing'
// ]);
//
// console.log('jon.getPassion():', jon.getPassion());
// console.log('jon.getInterestByIndex(1):', jon.getInterestByIndex(1));
// console.log('jon.getLastInterest():', jon.getLastInterest());
//
//




















// function Person(first, last, age, gender) {
// 	this.name = {
// 		first: first,
// 		last: last
// 	};
// 	this.age = age;
// 	this.gender = gender;
// }
//
// Person.prototype.speak = function(words) {
// 	return `${this.name.first} ${this.name.last} is my name. and ${words}.`;
// }
//
// var person1 = new Person('Bob', 'Zazoo', 890, 'male');
//
// console.log(person1.speak('some words'));

//////////////////////////////////////////////////////
// Object.assign
//////////////////////////////////////////////////////
// const user1 = {
// 	username: 'calmwaters789',
// 	password: '1111'
// }

// const user2 = Object.assign({}, user1);

// console.log(user2);

/////////////////////////////////////////////////////
// Object.create
/////////////////////////////////////////////////////
// const user1 = new Object({
// 	username: 'calmwaters789',
// 	password: '1111'
// });

// const user2 = Object.create(user1);

// console.log(user1);
// console.log(user2);
// console.log(user2.username);
// console.log(user2.password);

/////////////////////////////////////////////////////
// var user = new Object({
// 	username: 'calmseas',
// 	password: '1111'
// });

// console.log(user);

// function Person(first, last, age) {
// 	this.name = {
// 		first: first,
// 		last: last
// 	};
// 	this.age = age;
// 	this.bio = function() {
// 		return `${this.name.first} ${this.name.last} is ${this.age} years of age.`;
// 	}
// }

// const bob = new Person('Bob', 'Herman', 21);

// console.log(bob.name);

// console.log(bob.age);

// console.log(bob.bio());
