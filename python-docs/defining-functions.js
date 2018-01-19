const prompt = require('prompt-sync')();

function getFib(n) {
  let [a, b] = [0, 1];
  let result = '';

  while (a < n) {
    result += `${a} `;
    [a, b] = [b, a+b];
  }

  console.log(result);
}

getFib(100);

function ask_ok(ourPrompt, retries=4, reminder="Please try again") {
  let bool = true;

  while (bool === true) {
    const ok = prompt(ourPrompt)
    retries -= 1;
    if (ok === 'n' || ok === 'no') {
      bool = false;
    } else if (retries < 0) {
      throw new Error('invalid user response');
    }
  }
}

ask_ok('do you want some dairy? ');
