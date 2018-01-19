function Parent(name) {
  this.name = name || 'Adam';
}

Parent.prototype.say = function() {
  return `my name is ${this.name}.`;
};

function Child() {}

Child.prototype = new Parent();

const kid = new Child();

console.log(
  'kid.say():',
  kid.say()
);

////////////////////////////////////////////////
////////////////////////////////////////////////
// function Mammal() {
//   this.planet = 'Earth';
//   this.eatsFood = true;
//   this.poops = true;
// }
//
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
//
// Person.prototype = new Mammal();
// Person.prototype.speaks = true;
// Person.prototype.walksUpright = true;
//
// const abe = new Person('Abe', 24);
//
// console.log(
//   'abe:',
//   abe
// );
//
// console.log(
//   'abe.__proto__:',
//   abe.__proto__
// );
