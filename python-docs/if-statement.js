const prompt = require('prompt');

prompt.start();
prompt.get('please enter an integer', (err, result) => {
  const num = parseInt(result['please enter an integer']) || 0;

  printResult(num);
});

function printResult(num=0) {
  switch(true) {
    case (num < 0):
      num = 0;
      console.log('Negative changed to zero');
      break;

    case (num === 0):
      console.log('Zero');
      break;

    case (num === 1):
      console.log('Single');
      break;

    default:
      console.log('More than one');
  }
}
