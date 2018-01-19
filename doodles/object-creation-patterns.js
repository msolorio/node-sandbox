const Person = function(name) {
  this.name = name;
};

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

Person.prototype.getName = function() {
  return this.name;
}

Person.prototype.setName = function(newName) {
  this.name = newName;
}

const hubert = new Person('Hubert');

console.log(
  'hubert:',
  hubert
);

console.log(
  'hubert.getName():',
  hubert.getName()
);

hubert.setName('Bobolus');

console.log(
  'hubert.getName():',
  hubert.getName()
);

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
