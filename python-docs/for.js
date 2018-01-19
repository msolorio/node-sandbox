const animals = ['cat', 'dog', 'goose'];

animals.forEach((animal) => {
  console.log(animal, animal.length);
});

console.log('..........................................');

let words = ['sun', 'moon', 'statistician', 'paleontologist', 'bee'];

let newWords = words.reduce((resultArr, word) => {
  if (word.length > 6) resultArr.unshift(word);
  return resultArr;
}, words.slice(0));

console.log(newWords);

console.log('..........................................');

for (let i=0; i<3; i++) {
  console.log(i);
}

console.log('..........................................');

for (let i=0; i<21; i+=2) {
  console.log(i);
}

console.log('..........................................');

words = ['mary', 'had', 'a', 'purple', 'lamb'];

words.forEach((word, index) => {
  console.log(index + 1, word);
});

console.log('..........................................');

function isPrime(num) {
  for (let i=2; i<num; i++) {
    if (num % i === 0) {
      return `${num} equals ${i} * ${num/i}`;
    }
  }
  return `${num} is a prime number`;
}

for (let i=2; i<10; i++) {
  console.log(isPrime(i));
}

console.log('..........................................');
