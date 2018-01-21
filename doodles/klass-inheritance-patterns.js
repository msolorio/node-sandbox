/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// INHERITANCE BY PROXY
// const Proxy = function() {};
// function inherit(Child, Parent) {
//   Proxy.prototype = Parent.prototype;
//   Child.prototype = new Proxy();
//   Child.prototype.constructor = Child;
// }
//
// function Product() {};
// Product.prototype.getProductName = function() {
//   return this.name;
// };
//
// function FoodItem(name, price) {
//   this.name = name;
//   this.price = price;
// }
//
// inherit(FoodItem, Product);
//
// const crackers = new FoodItem('crackers', 3);
//
// console.log(
//   'crackers:',
//   crackers
// );
//
// console.log(
//   'crackers.getProductName():',
//   crackers.getProductName()
// );

// function Parent() {}
// Parent.prototype.getName = function() {
//   return this.name;
// };
//
// function Child(name, age) {
//   this.name = name;
//   this.age = age;
//   this.constructor = Child;
// }
// Child.prototype = Parent.prototype;
//
// const gus = new Child('Gustavo');
//
// console.log(
//   'gus:',
//   gus
// );
//
// console.log(
//   'gus.getName():',
//   gus.getName()
// );
//
// console.log(
//   'gus.constructor:',
//   gus.constructor.name
// );

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// MULTIPLE INHERITANCE
// function Cat() {
//   this.jumps = true;
//   this.sulfSufficient = true;
// }
//
// function Bird() {
//   this.flies = true;
//   this.hasWings = true;
// }
//
// function CatBird() {
//   Cat.apply(this);
//   Bird.apply(this);
// }
//
// const hubertLawsome = new CatBird();
//
// console.log(
//   'hubertLawsome:',
//   hubertLawsome
// );

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// COMMON INHERITANCE PATTERN
// function Product() {}
//
// Product.prototype = {
//   getName() {
//     return this.name;
//   },
//
//   getPrice() {
//     return this.price;
//   }
// };
//
// function FoodItem(name, price) {
//   this.name = name;
//   this.price = price;
// }
//
// FoodItem.prototype = new Product();
//
// const orange = new FoodItem('orange', .5);
//
// console.log(
//   'orange:',
//   orange
// );
//
// console.log(
//   'orange.getPrice():',
//   orange.getPrice()
// );

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// *** RENT A CONSTRUCTOR ***
// function Product(name, price, category) {
//   this.name = name;
//   this.price = price;
//   this.category = category;
// }
//
// Product.prototype.getName = function() {
//   return this.name;
// };
//
// // eslint-disable-next-line no-unused-vars
// function FoodItem(name, price) {
//   Product.apply(this, [...arguments, 'food']);
// }
// FoodItem.prototype = Product.prototype;
//
// // eslint-disable-next-line no-unused-vars
// function HouseholdItem(name, price) {
//   Product.apply(this, [...arguments, 'household']);
// }
// HouseholdItem.prototype = Product.prototype;
//
// const muffin = new FoodItem('muffin', 1);
// const mop = new HouseholdItem('mop', 3);
//
// console.log(
//   'muffin:',
//   muffin
// );
//
// console.log(
//   'muffin.getName():',
//   muffin.getName()
// );
//
// console.log(
//   'mop:',
//   mop
// );
//
// console.log(
//   'mop.getName():',
//   mop.getName()
// );

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// function Parent(name) {
//   this.name = name || 'default';
// }
//
// Parent.prototype.say = function() {
//   return this.name;
// };
//
// Parent.prototype.planet = 'Earth';
//
// function Child(name) {
//   if (name) {
//     this.name = name;
//   }
// }
//
// Child.prototype = new Parent();
//
// const jim = new Child();
//
// console.log(
//   'jim:',
//   jim
// );
//
// console.log(
//   'jim.say():',
//   jim.say()
// );
//
// console.log(
//   'jim.hasOwnProperty(\'say\'):',
//   jim.hasOwnProperty('say')
// );
//
// console.log(
//   'jim.hasOwnProperty(\'name\'):',
//   jim.hasOwnProperty('name')
// );

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// const parent = {
//   name: 'Stevia'
// };
//
// // the prototype of child points to parent
// const child = Object.create(parent);
//
// console.log(
//   'child.name:',
//   child.name
// );

// const Person = function(name) {
//   this.name = name;
// };

// Person.method = function(methodName, yourFunc) {
//   Person.prototype[methodName] = yourFunc;
// };
//
// Person.method('getName', function() {
//   return this.name;
// });
//
// Person.method('setName', function(newName) {
//   this.name = newName;
// });

// Person.prototype.getName = function() {
//   return this.name;
// };
//
// Person.prototype.setName = function(newName) {
//   this.name = newName;
// };
//
// const hubert = new Person('Hubert');
//
// console.log(
//   'hubert:',
//   hubert
// );
//
// console.log(
//   'hubert.getName():',
//   hubert.getName()
// );
//
// hubert.setName('Bobolus');
//
// console.log(
//   'hubert.getName():',
//   hubert.getName()
// );

// function House(config) {
//   const numOfBedrooms = config.numOfBedrooms;
//   const numOfBathrooms = config.numOfBathrooms;
//   const numOfResidents = config.numOfResidents;
// }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// function House() {
//   const spec = {
//     squareFootage: 1200,
//     numOfBedrooms: 2
//   };
//
//   this.getSpec = function() {
//     // return Object.assign({}, spec);
//     return spec;
//   }
// }
//
// const ourHouse = new House();
//
// console.log(
//   'ourHouse.getSpec():',
//   ourHouse.getSpec()
// );
//
// const ourSpec = ourHouse.getSpec();
//
// ourSpec.squareFootage = 5000;
//
// console.log(
//   'ourHouse.getSpec():',
//   ourHouse.getSpec()
// );

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// function House(config) {
//   let numOfResidents = config.numOfResidents;
//   const numOfBedrooms = config.numOfBedrooms;
//   const numOfCars = config.numOfCars;
//
//   this.carToResidentRatio = function() {
//     return (numOfCars / numOfResidents).toFixed(2);
//   }
//
//   this.hasAvailableBedroom = function() {
//     return numOfBedrooms > numOfResidents;
//   }
//
//   this.addResident = function() {
//     numOfResidents += 1;
//     return numOfResidents;
//   }
// };
//
// const ourHouse = new House({
//   numOfResidents: 7,
//   numOfBedrooms: 9,
//   numOfCars: 4
// });
