function isPrimeNumber(inputNumber) {
  var result = true;
  for (let i=2, s=Math.sqrt(inputNumber); i <= s; i++) {
    if (inputNumber % i == 0) {result = false}
  }
  return result;
}