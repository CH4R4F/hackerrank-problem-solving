function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let t = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // !(a % b) is the same as a % b === 0 [both return true if a % b === 0]
      if (!((ar[i] + ar[j]) % k)) {
        t++;
      }
    }
  }

  return t;
}
