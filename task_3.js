function facto(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * facto(n - 1);
    }
}

let n = 5;
console.log(facto(n));