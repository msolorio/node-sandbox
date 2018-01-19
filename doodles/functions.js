function myFunc(param) {
  if (!myFunc.cache[param]) {
    // heavy computation
    const result = param * 5;
    // heavy computation

    myFunc.cache[param] = result;
  }

  return myFunc.cache[param];
}

myFunc.cache = {};

console.log(
  'myFunc.cache:',
  myFunc.cache
);

console.log(
  'myFunc(3):',
  myFunc(3)
);

console.log(
  'myFunc(5):',
  myFunc(5)
);

console.log(
  'myFunc.cache:',
  myFunc.cache
);
