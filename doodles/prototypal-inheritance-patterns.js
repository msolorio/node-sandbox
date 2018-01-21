

// function Ninja() {
//   this.name = 'Kuto';
//   this.swingSword = function() {
//     return false;
//   };
// }
//
// Ninja.prototype.swingSword = function() {
//   return true;
// };
//
// const ninja = new Ninja();
//
// console.log(
//   'ninja.constructor:',
//   ninja.constructor
// );
//
// console.log(
//   'ninja.constructor.prototype:',
//   ninja.constructor.prototype
// );

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// setting the prototype with Object.create
function ArtPiece(name, year, type) {
  this.name = name;
  this.year = year;
  this.type = type;
}

ArtPiece.prototype = {
  getName: function() {
    return this.name;
  },

  getYear: function() {
    return this.year;
  }
};

function Painting(name, year) {
  ArtPiece.apply(this, [name, year, 'painting']);
  this.constructor = Painting;
}

// Object.create also takes an optional second param to assign 'own' properties
// not used here
// Object.create returns an object who's prototype is the object passed in
Painting.prototype = Object.create(ArtPiece.prototype);

Painting.prototype.tools = ['paintbrush'];
Painting.prototype.materials = ['paint', 'canvas'];

const blue = new Painting('artist in blue', 1942);

console.log(
  'blue.constructor.prototype.__proto__:',
  blue.constructor.prototype.__proto__
);
//
// console.log(
//   'blue:',
//   blue
// );
//
// console.log(
//   'blue.__proto__:',
//   blue.__proto__
// );
//
// console.log(
//   'blue.getName():',
//   blue.getName()
// );
//
// console.log(
//   'blue.tools:',
//   blue.tools
// );
//
// console.log(
//   'blue.__proto__.__proto__:',
//   blue.__proto__.__proto__
// );
//
// // Painting.prototype points to an instance of an empty constructor
// // who's prototype points to ArtPiece.prototype
// console.log(
//   'Painting.prototype.__proto__:',
//   Painting.prototype.__proto__
// );
//
// console.log(
//   'Painting.prototype:',
//   Painting.prototype
// );
