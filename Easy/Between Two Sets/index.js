function getTotalX(a, b) {
  // Write your code here
  // in Constraints .. all numbers in a and b are less than or equal to 100
  // so instead of looping 100 times, we can loop till the biggest number in one of the arrays
  let m = Math.max(...b);
  let validCount = 0;
  for (let x = 1; x <= m; x++) {
    if (a.every((int) => x % int == 0)) {
      if (b.every((int) => int % x == 0)) {
        validCount++;
      }
    }
  }

  return validCount;
}
