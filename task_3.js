function facto(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * facto(n - 1);
    }
}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number to make it a factorial: ', (n) => {
  console.log(facto(n));
  rl.close();
});