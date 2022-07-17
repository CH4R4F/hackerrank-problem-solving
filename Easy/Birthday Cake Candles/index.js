function birthdayCakeCandles(candles) {
  // Write your code here
  let sorted = candles.sort((a, b) => b - a);
  let bigger = sorted.filter((x) => x == sorted[0]); // while sorted from biggest to smallest, if the current element is the same as the first element, it's a bigger candle too

  return bigger.length;
}
