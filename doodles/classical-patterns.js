function Article() {
  this.tags = ['js', 'css'];
}

function BlogPost() {}
BlogPost.prototype = new Article();

function TravelBlogPost() {
  Article.call(this);
}

const blogPostInstance = new BlogPost();
const travelBlogPostInstance = new TravelBlogPost();

console.log(
  'travelBlogPostInstance.tags:',
  travelBlogPostInstance.tags
);

// console.log(
//   'blogPostInstance.hasOwnProperty(\'tags\'):',
//   blogPostInstance.hasOwnProperty('tags')
// );
//
// console.log(
//   'travelBlogPostInstance.hasOwnProperty(\'tags\'):',
//   travelBlogPostInstance.hasOwnProperty('tags')
// );

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// function Parent(name) {
//   this.name = name;
// }
//
// Parent.prototype.say = function() {
//   return `my name is ${this.name}.`;
// };
//
// function Child(name) {
//   if (name) {
//     this.name = name;
//   }
// }
//
// Child.prototype = new Parent('default');
//
// const kid = new Child('Henryetta');
//
// console.log(
//   'kid.say():',
//   kid.say()
// );

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
