function isPrime(num) {
  if (num > 0) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isPrime(1));
