class Rectangle {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }

  // function is not accessible outside of class
  static getColor() {
    return `the color is ${this.color}`;
  }

  getBio() {
    return `the rectangle is ${this.height} by ${this.width} and it's color is ${this.color}.`;
  }
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
class Rock {
  constructor(height, width, color) {
    this._height = height;
    this._width = width;
    this._color = 'grey';
  }

  set height(height) {
    if (height > 0) {
      this._height = height;
    } else {
      throw 'height should be greater than 0';
    }
  }

  // invariant - a rule that must remain unbroken
  reduceHeight(reduceBy) {
    if (reduceBy >= this.height) {
      throw 'reduceBy is greater than or equal to current rock height';
    }
    this.height = this.height - reduceBy;
  }

  doubleHeight() {
    this.height = this.height * 2;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this._height * this._width;
  }

  // function is not accessible on instances
  // only on the class itself
  static getColor() {
    return 'grey';
  }

  // printBio() {
  //   return `the rock is ${this.height} by ${this.width} and it's color is ${this.getColor()}.`;
  // }
}


const newRock = new Rock(3, 4, 'blue');

// newRock.color = 'black';

// console.log(newRock.getColor());

console.log(newRock.height);

// try {
  newRock.height = -1;
// }
// catch(err) {
//   console.error(err);
// }


console.log(newRock);