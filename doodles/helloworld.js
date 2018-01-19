/*
const fakeTitles = [
  'Pirate Of Reality',
  'Guardians Of Hell',
  'Witches With Vigor',
  'Spies And Heroes',
  'Robots And Kings',
];

const abbreviations1 = fakeTitles.map(function(item) {
	// console.log('this:', this);
	return item.toLowerCase().slice(0, 3);
});

// const abbreviations2 = fakeTitles.map((item) => {
//   console.log('this:', this);
//   return item.toLowerCase().slice(0, 3);
// });

const abbreviations2 = fakeTitles.map(item => item.toLowerCase().slice(0, 3));

// this is bound to the process
console.log(abbreviations1);

// this is an empty object
console.log(abbreviations2);
*/

const ourArray = [1, 2, 3, 4];

let [a, b] = ourArray;

console.log(a);
console.log(b);
console.log(ourArray);