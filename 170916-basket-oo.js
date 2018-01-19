var myRevealingModule = (function() {
  var privateCounter = 0;

  function privateFunction() {
    privateCounter++;
  }

  function publicFunction() {
    publicIncrement();
  }

  function publicIncrement() {
    privateFunction();
  }

  function publicGetCount() {
    return privateCounter;
  }

  return {
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount
  }
}());

myRevealingModule.start();
console.log(myRevealingModule.count());
